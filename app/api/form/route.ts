import nodemailer from "nodemailer";
import {NextRequest, NextResponse} from "next/server";

export async function POST(req: any): Promise<Response> {
  const body = await req.json();
  const {firstName, lastName, email, organization, message} = body;

  const messageBody = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Form Submission</title>
</head>
<body>
  <h1>New Form Submission</h1>
  <p><strong>First Name:</strong> ${firstName}</p>
  <p><strong>Last Name:</strong> ${lastName}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Organization:</strong> ${organization}</p>
  <p><strong>Message:</strong> ${message}</p>
</body>
</html>
`;

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Define email options
    const mailOptions = {
      from: `la-fondation-dassault-systemes website ${process.env.EMAIL_USER}`,
      to: "vrexpds@skct.edu.in",
      // to: "siddeshsankhya@gmail.com",
      subject: "New Form Submission",
      html: messageBody,
    };

    // Send mail
    await transporter.sendMail(mailOptions);
    return new NextResponse(
      JSON.stringify({message: "Email sent successfully"}),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new NextResponse(JSON.stringify({message: error}), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
