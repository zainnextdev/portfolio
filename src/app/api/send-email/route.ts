// src/app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ContactFormEmail } from '../../../../emails/ContactFormEmail';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = 'zain.nextdev@gmail.com'; // **REPLACE THIS WITH YOUR GMAIL**

export async function POST(request: Request) {
  const { email, message } = await request.json();

  if (!email || !message) {
    return NextResponse.json({ error: 'Email and message are required.' }, { status: 400 });
  }

  try {
    const { data } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Required by Resend
      to: toEmail,
      subject: 'New Message from Portfolio Contact Form',
      replyTo: email,
      react: React.createElement(ContactFormEmail, {
        senderEmail: email,
        message: message,
      }),
    });

    return NextResponse.json({ message: 'Email sent successfully!', data });
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}