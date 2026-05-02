import { NextResponse } from "next/server";
import { Resend } from "resend";

import { getAllProducts } from "@/lib/products";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  phone: string;
  email?: string;
  productInterest?: string;
  message: string;
};

function sanitizePayload(payload: Partial<ContactPayload>): ContactPayload {
  return {
    name: String(payload.name || "").trim(),
    phone: String(payload.phone || "").trim(),
    email: String(payload.email || "").trim(),
    productInterest: String(payload.productInterest || "").trim(),
    message: String(payload.message || "").trim(),
  };
}

function validatePayload(payload: ContactPayload) {
  if (!payload.name || payload.name.length < 2) {
    return "Please provide a valid name.";
  }

  if (!payload.phone || payload.phone.length < 7) {
    return "Please provide a valid phone number.";
  }

  if (payload.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return "Please provide a valid email address.";
  }

  if (payload.productInterest) {
    const productExists = getAllProducts().some(
      (product) => product.name === payload.productInterest,
    );

    if (!productExists) {
      return "Please select a valid product interest.";
    }
  }

  if (!payload.message || payload.message.length < 10) {
    return "Please enter a message with more detail.";
  }

  return null;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const rawPayload = (await request.json()) as Partial<ContactPayload>;
    const payload = sanitizePayload(rawPayload);
    const validationError = validatePayload(payload);

    if (validationError) {
      return NextResponse.json({ message: validationError }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const contactToEmail = process.env.CONTACT_TO_EMAIL;
    const contactFromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!resendApiKey || !contactToEmail || !contactFromEmail) {
      return NextResponse.json(
        {
          message:
            "The contact form is not fully configured yet. Please add the required email environment variables.",
        },
        { status: 500 },
      );
    }

    const resend = new Resend(resendApiKey);
    const timestamp = new Date().toISOString();
    const safeName = escapeHtml(payload.name);
    const safePhone = escapeHtml(payload.phone);
    const safeEmail = escapeHtml(payload.email || "Not provided");
    const safeProductInterest = escapeHtml(
      payload.productInterest || "Not specified",
    );
    const safeMessage = escapeHtml(payload.message).replace(/\n/g, "<br />");

    await resend.emails.send({
      from: contactFromEmail,
      to: contactToEmail,
      subject: `New Zillay Seeds inquiry from ${payload.name}`,
      replyTo: payload.email || undefined,
      text: [
        "New Zillay Seeds contact inquiry",
        "",
        `Name: ${payload.name}`,
        `Phone: ${payload.phone}`,
        `Email: ${payload.email || "Not provided"}`,
        `Product interest: ${payload.productInterest || "Not specified"}`,
        `Timestamp: ${timestamp}`,
        "",
        "Message:",
        payload.message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #173a25;">
          <h2>New Zillay Seeds contact inquiry</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Phone:</strong> ${safePhone}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Product interest:</strong> ${safeProductInterest}</p>
          <p><strong>Timestamp:</strong> ${timestamp}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        </div>
      `,
    });

    return NextResponse.json({
      message: "Your inquiry has been sent successfully.",
    });
  } catch {
    return NextResponse.json(
      {
        message: "Unable to send your inquiry right now. Please try again later.",
      },
      { status: 500 },
    );
  }
}
