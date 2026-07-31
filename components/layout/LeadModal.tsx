"use client";

import type { FormEvent } from "react";
import { siteConfig } from "@/config/site";

export type ModalType = "service" | "contact";

const modalContent = {
  service: {
    eyebrow: "Estimate preview",
    title: "Preview the estimate form",
    submitLabel: "Preview estimate request",
    successTitle: "Demo form preview complete",
    successMessage:
      "This is an unofficial website concept, so this form does not submit information to PML Junk Removal. To contact the business directly, call or text Jason at (515) 901-3779.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Contact Jason",
    submitLabel: "Preview message",
    successTitle: "Demo form preview complete",
    successMessage:
      "This is an unofficial website concept, so this form does not submit information to PML Junk Removal. To contact the business directly, call or text Jason at (515) 901-3779.",
  },
};

type LeadModalProps = {
  activeModal: ModalType;
  hasSubmitted: boolean;
  isSubmitting: boolean;
  onClose: () => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  submitError: string;
};

const LeadModal = ({
  activeModal,
  hasSubmitted,
  isSubmitting,
  onClose,
  onSubmit,
  submitError,
}: LeadModalProps) => {
  const activeContent = modalContent[activeModal];
  const isBooking = activeModal === "service";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 py-8 backdrop-blur-sm"
      role="presentation"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${activeModal}-form-title`}
        className="max-h-[calc(100vh-4rem)] w-full max-w-2xl overflow-y-auto border border-[#d8d5ce] bg-white p-6 text-[#202020] shadow-[0_24px_70px_rgba(0,0,0,0.22)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-(--accent)">
              {activeContent.eyebrow}
            </p>
            <h2
              id={`${activeModal}-form-title`}
              className="font-heading text-3xl font-black uppercase"
            >
              {activeContent.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            autoFocus
            className="flex size-9 cursor-pointer items-center justify-center border border-[#aaa69e] text-xl leading-none text-[#625f59] transition hover:border-(--accent) hover:text-(--accent)"
            aria-label={`Close ${activeContent.title.toLowerCase()} form`}
          >
            ×
          </button>
        </div>

        {hasSubmitted ? (
          <div className="border border-[#777777] bg-[#f3f3f1] p-4">
            <p className="font-semibold text-(--accent)">
              {activeContent.successTitle}
            </p>
            <p className="mt-2 text-sm text-[#625f59]">
              {activeContent.successMessage}
            </p>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
              <a href={siteConfig.contact.phoneHref} className="underline">Call {siteConfig.contact.phone}</a>
              <a href={siteConfig.contact.smsHref} className="underline">Text Jason</a>
              <a href={siteConfig.contact.emailHref} className="underline">{siteConfig.contact.email}</a>
            </div>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={onSubmit}>
            <div className="border-l-4 border-[#111111] bg-[#f3f3f1] p-3 text-sm text-[#555555]">
              <p className="font-bold text-[#171717]">Demo form only</p>
              <p className="mt-1">This form does not send a message. Contact Jason directly at <a href={siteConfig.contact.phoneHref} className="font-semibold underline">{siteConfig.contact.phone}</a> or <a href={siteConfig.contact.emailHref} className="font-semibold underline">{siteConfig.contact.email}</a>.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-semibold text-[#202020]">
                Name
                <input
                  required
                  name="name"
                  className="mt-2 w-full border border-[#aaa69e] bg-white px-3 py-2 text-[#202020] outline-none transition placeholder:text-[#8a867f] focus:border-(--accent)"
                  placeholder="Your name"
                />
              </label>
              <label className="block text-sm font-semibold text-[#202020]">
                Email{isBooking ? " (optional)" : ""}
                <input
                  required={!isBooking}
                  type="email"
                  name="email"
                  className="mt-2 w-full border border-[#aaa69e] bg-white px-3 py-2 text-[#202020] outline-none transition placeholder:text-[#8a867f] focus:border-(--accent)"
                  placeholder="Email address"
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-semibold text-[#202020]">
                Phone
                <input
                  required={isBooking}
                  name="phone"
                  type="tel"
                  className="mt-2 w-full border border-[#aaa69e] bg-white px-3 py-2 text-[#202020] outline-none transition placeholder:text-[#8a867f] focus:border-(--accent)"
                  placeholder="Phone number"
                />
              </label>
              {!isBooking && (
                <label className="block text-sm font-semibold text-[#202020]">
                  Topic
                  <select
                    name="topic"
                    className="mt-2 w-full border border-[#aaa69e] bg-white px-3 py-2 text-[#202020] outline-none transition focus:border-(--accent)"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Choose a topic
                    </option>
                    <option value="general">General question</option>
                    <option value="service">Service availability</option>
                    <option value="items">Item acceptance</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              )}
            </div>

            {isBooking && (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm font-semibold text-[#202020]">
                    Service address or location
                    <input
                      required
                      name="pickup-address"
                      placeholder="Johnston, IA"
                      className="mt-2 w-full border border-[#aaa69e] bg-white px-3 py-2 text-[#202020] outline-none transition focus:border-(--accent)"
                    />
                  </label>
                  <label className="block text-sm font-semibold text-[#202020]">
                    Preferred contact method
                    <select required name="preferred-contact" defaultValue="" className="mt-2 w-full border border-[#aaa69e] bg-white px-3 py-2 text-[#202020] outline-none transition focus:border-(--accent)">
                      <option value="" disabled>Choose one</option>
                      <option value="call">Call</option>
                      <option value="text">Text</option>
                      <option value="email">Email</option>
                    </select>
                  </label>
                </div>
              </>
            )}

            <label className="block text-sm font-semibold text-[#202020]">
              {isBooking ? "What needs to go?" : "Message"}
              <textarea
                required={isBooking}
                name="message"
                rows={4}
                className="mt-2 w-full resize-none border border-[#aaa69e] bg-white px-3 py-2 text-[#202020] outline-none transition placeholder:text-[#8a867f] focus:border-(--accent)"
                placeholder={
                  isBooking
                    ? "Describe the items, approximate amount, access details, or anything else Jason should know."
                    : "What would you like to ask Jason?"
                }
              />
            </label>

            <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={onClose}
                disabled={isSubmitting}
                className="cursor-pointer border border-[#aaa69e] px-5 py-2.5 font-semibold text-[#4f4c47] transition hover:bg-[#f3f3f1]"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="cursor-pointer bg-(--accent) px-5 py-2.5 font-semibold text-white transition hover:bg-(--accent-hover) disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Sending" : activeContent.submitLabel}
              </button>
            </div>

            {submitError && (
              <p
                className="text-sm font-semibold text-red-700"
                aria-live="polite"
              >
                {submitError}
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default LeadModal;
