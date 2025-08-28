import * as nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!message || !name || !email) { // Also check for email
      return NextResponse.json(
        { message: "Please fill out the necessary fields" },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PW, // This should be an App Password
      },
    });

    const mailData = {
      from: email,
      to: process.env.EMAIL_TO,
      subject: `Message from ${name}`,
      text: `${message} | Sent from: ${email}`,
      html: `<div>${message}</div><p>Sent from: ${email}</p>`,
    };

    await transporter.sendMail(mailData);

    return NextResponse.json({ message: "Message sent!" }, { status: 200 });

  } catch (error) {
    if (error instanceof SyntaxError) { // Handle JSON parsing error
      return NextResponse.json(
        { message: "Invalid JSON in request body" },
        { status: 400 },
      );
    }
    console.error(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
};