"use client";

import { useState } from "react";
import { Check } from "./icons";

const initialForm = { name: "", email: "", phone: "", message: "" };

/**
 * ContactForm
 * Front-end only inquiry form. Submission is prevented and a success message
 * is shown with React state — no backend required.
 *
 * Wire this to an API route, form service (Formspree / Basin), or an email
 * provider when you're ready to actually collect leads.
 */
export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // "idle" | "success" | "error"
  const [submittedName, setSubmittedName] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Basic client-side validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      return;
    }
    // Validate the email format (the form uses noValidate, so the browser
    // won't enforce type="email" for us).
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
    if (!emailOk) {
      setStatus("error");
      return;
    }
    // In a real app you would POST `form` to your endpoint here.
    setSubmittedName(form.name.trim());
    setStatus("success");
    setForm(initialForm);
  };

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex h-full min-h-[26rem] flex-col items-center justify-center rounded-lg bg-white p-10 text-center shadow-[0_0_0_1px_var(--color-line)]"
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-primary">
          <Check className="h-8 w-8" aria-hidden="true" />
        </span>
        <h3 className="mt-6 text-2xl font-semibold text-ink">
          Thank You, {submittedName}!
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
          Your inquiry has been received. A member of our team will reach out
          within one business day to schedule your private viewing.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-outline mt-8"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-lg bg-white p-7 shadow-[0_0_0_1px_var(--color-line)] sm:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="field-label">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className="field"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="field-label">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            className="field"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="field-label">
            Phone (optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="(555) 000-0000"
            className="field"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="field-label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us a little about what you're looking for…"
            className="field resize-none"
            required
          />
        </div>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-5 rounded-lg bg-sale/10 px-4 py-3 text-sm text-sale">
          Please fill in your name, a valid email address, and a message before sending.
        </p>
      )}

      <button type="submit" className="btn-primary mt-7 w-full sm:w-auto">
        Send Inquiry
      </button>

      <p className="mt-4 text-xs text-muted">
        This is a demo form — no data is sent anywhere.
      </p>
    </form>
  );
}
