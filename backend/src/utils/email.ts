import * as Brevo from "@getbrevo/brevo";
import logger from "./logger.js";

interface SendOTPOptions {
  email: string;
  username: string;
  otp: string;
}

export const sendOTP = async ({ email, username, otp }: SendOTPOptions) => {
  try {
    const apiInstance = new Brevo.TransactionalEmailsApi();

    // Configure API key authorization: api-key
    apiInstance.setApiKey(
      Brevo.TransactionalEmailsApiApiKeys.apiKey,
      process.env.BREVO_API_KEY || "",
    );

    const sendSmtpEmail = new Brevo.SendSmtpEmail();

    sendSmtpEmail.subject = "Verify your account - YourBank";
    sendSmtpEmail.htmlContent = `
      <html>
        <body>
          <h1>Welcome to YourBank, ${username}!</h1>
          <p>Please use the following OTP to verify your account:</p>
          <h2 style="color: #4CAF50;">${otp}</h2>
          <p>This code will expire in 15 minutes.</p>
          <p>If you didn't request this, please ignore this email.</p>
        </body>
      </html>
    `;
    sendSmtpEmail.sender = {
      name: "YourBank Team",
      email: process.env.BREVO_SENDER_EMAIL || "no-reply@yourbank.com",
    };
    sendSmtpEmail.to = [{ email: email, name: username }];

    await apiInstance.sendTransacEmail(sendSmtpEmail);
    logger.info({ email }, "OTP email sent successfully");
    return true;
  } catch (error: any) {
    logger.error({ err: error, email }, "Failed to send OTP email");

    // FALLBACK FOR DEVELOPMENT:
    // If we are in dev mode and the email fails (e.g., account disabled),
    // log the OTP to the console and allow registration to proceed.
    if (process.env.NODE_ENV !== "production") {
      console.log("\n==================================================");
      console.log("⚠️  EMAIL SENDING FAILED (Dev Mode Fallback) ⚠️");
      console.log("--------------------------------------------------");
      console.log(`To: ${email}`);
      console.log(`OTP: \x1b[32m${otp}\x1b[0m`); // Green color for visibility
      console.log("==================================================\n");
      return true; // Return true to pretend it worked
    }

    return false;
  }
};
