import React, { useRef, useEffect } from "react";

interface OtpInputProps {
  length?: number;
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
}

export default function OtpInput({
  length = 6,
  value,
  onChange,
  error,
}: OtpInputProps) {
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  // Initialize inputs array
  useEffect(() => {
    inputs.current = inputs.current.slice(0, length);
  }, [length]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const char = e.target.value;

    // Handle only the last entered valid character
    // This allows replacing a character by typing over it
    const newChar = char.slice(-1);

    if (!/^\d*$/.test(newChar)) return;

    const newValue = value.split("");
    // Ensure array is long enough
    while (newValue.length < length) newValue.push("");

    newValue[index] = newChar;
    const newString = newValue.join("").slice(0, length);

    onChange(newString);

    // Focus next input
    if (newChar && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace") {
      if (!value[index] && index > 0) {
        // If empty, delete previous and move back
        const newValue = value.split("");
        newValue[index - 1] = "";
        onChange(newValue.join(""));
        inputs.current[index - 1]?.focus();
      } else {
        // Just delete current
        const newValue = value.split("");
        newValue[index] = "";
        onChange(newValue.join(""));
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, length);
    if (!/^\d+$/.test(pastedData)) return;

    onChange(pastedData);

    // Focus the next empty input or the last one
    const nextIndex = Math.min(pastedData.length, length - 1);
    inputs.current[nextIndex]?.focus();
  };

  return (
    <div className="flex gap-2 sm:gap-4 justify-center">
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          ref={(el) => {
            inputs.current[index] = el;
          }}
          type="text"
          inputMode="numeric"
          maxLength={1} // Allow slightly more for better handling of overwrite, handled in logic
          value={value[index] || ""}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          className={`w-10 h-12 sm:w-14 sm:h-16 text-center text-xl sm:text-2xl font-bold bg-[#1A1A1A] border rounded-xl focus:outline-none transition-all duration-200
            ${
              error
                ? "border-red-500 text-red-500"
                : "border-[#262626] text-white focus:border-primary focus:shadow-[0_0_10px_rgba(57,255,20,0.2)]"
            }
          `}
        />
      ))}
    </div>
  );
}
