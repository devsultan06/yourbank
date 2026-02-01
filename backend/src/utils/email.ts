import { Resend } from "resend";
import logger from "./logger.js";

interface SendOTPOptions {
  email: string;
  username: string;
  otp: string;
  type?: "verification" | "reset";
}

export const sendOTP = async ({
  email,
  username,
  otp,
  type = "verification",
}: SendOTPOptions) => {
  try {
    if (!process.env.RESEND_API_KEY) {
      logger.error("❌ RESEND_API_KEY not set in .env file");
      // Fallback for dev mode
      if (process.env.NODE_ENV !== "production") {
        console.log("\n⚠️  RESEND API KEY MISSING - FALLBACK LOG ⚠️");
        console.log(`To: ${email}`);
        console.log(`Type: ${type}`);
        console.log(`OTP: ${otp}`);
        console.log("-----------------------------------------------\n");
        return true;
      }
      return false;
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const isReset = type === "reset";
    const subject = isReset
      ? "Reset your password - YourBank"
      : "Verify your account - YourBank";
    const title = isReset
      ? `Hello ${username}, request to reset password received`
      : `Welcome to YourBank, ${username}!`;
    const message = isReset
      ? "Please use the following code to reset your password:"
      : "Please use the following One-Time Password (OTP) to verify your account:";

    const { data, error } = await resend.emails.send({
      from: "YourBank <onboarding@resend.dev>", // Default testing domain for Resend
      to: email, // Resend only allows sending to your own email during testing
      subject: subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <div style="padding: 20px; background-color: #f8f9fa; border-radius: 10px;">
            <h1 style="color: #4CAF50; margin-bottom: 20px;">${title}</h1>
            <p style="font-size: 16px;">${message}</p>
            <div style="background-color: #fff; padding: 15px; border-radius: 8px; text-align: center; margin: 25px 0; border: 1px solid #e9ecef;">
              <h2 style="color: #333; margin: 0; letter-spacing: 5px; font-size: 32px;">${otp}</h2>
            </div>
            <p style="color: #666;">This code will expire in 15 minutes.</p>
            <p style="color: #999; font-size: 12px; margin-top: 30px;">If you didn't request this code, please ignore this email.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      logger.error(
        { err: error, email },
        "❌ Failed to send OTP email via Resend",
      );
      return false;
    }

    logger.info(
      { email, id: data?.id },
      "✅ OTP email sent successfully via Resend",
    );
    return true;
  } catch (error: any) {
    logger.error(
      { err: error, email },
      "❌ Failed to send OTP email via Resend",
    );
    return false;
  }
};
