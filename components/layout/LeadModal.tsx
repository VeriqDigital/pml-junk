"use client";

import type { FormEvent } from "react";

export type ModalType = "service" | "contact";

const modalContent = {
  service: {
    eyebrow: "Free estimate",
    title: "Request a junk removal quote",
    submitLabel: "Request quote",
    successTitle: "Thanks, we received your quote request.",
    successMessage:
      "The PML team will follow up to review the job and scheduling.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Send a message",
    submitLabel: "Send message",
    successTitle: "Thanks, your message is in.",
    successMessage: "Someone from the business will get back to you soon.",
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
            className="flex size-9 cursor-pointer items-center justify-center border border-[#aaa69e] text-xl leading-none text-[#625f59] transition hover:border-(--accent) hover:text-(--accent)"
            aria-label={`Close ${activeContent.title.toLowerCase()} form`}
          >
            x
          </button>
        </div>

        {hasSubmitted ? (
          <div className="border border-(--accent)/40 bg-green-50 p-4">
            <p className="font-semibold text-(--accent)">
              {activeContent.successTitle}
            </p>
            <p className="mt-2 text-sm text-[#625f59]">
              {activeContent.successMessage}
            </p>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={onSubmit}>
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
                Email
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-2 w-full border border-[#aaa69e] bg-white px-3 py-2 text-[#202020] outline-none transition placeholder:text-[#8a867f] focus:border-(--accent)"
                  placeholder="you@example.com"
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
                  placeholder="(555) 555-5555"
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
                    <option value="service">Service</option>
                    <option value="billing">Billing</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              )}
            </div>

            {isBooking && (
              <>
                <fieldset>
                  <legend className="text-sm font-semibold text-[#202020]">
                    Pickup details
                  </legend>
                  <div className="mt-2 grid gap-3 sm:grid-cols-2">
                    <input
                      required
                      name="pickup-address"
                      className="w-full border border-[#aaa69e] bg-white px-3 py-2 text-[#202020] outline-none transition placeholder:text-[#8a867f] focus:border-(--accent)"
                      placeholder="Pickup address"
                      aria-label="Pickup address"
                    />
                    <select required name="item-type" defaultValue="" aria-label="Type of junk" className="w-full border border-[#aaa69e] bg-white px-3 py-2 text-[#202020] outline-none transition focus:border-(--accent)">
                      <option value="" disabled>Type of junk</option>
                      <option value="household">Household junk</option>
                      <option value="furniture-appliances">Furniture or appliances</option>
                      <option value="cleanout">Property cleanout</option>
                      <option value="yard-debris">Yard debris</option>
                      <option value="construction">Construction debris</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </fieldset>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm font-semibold text-[#202020]">
                    Preferred date
                    <input
                      required
                      name="preferred-date"
                      type="date"
                      className="mt-2 w-full border border-[#aaa69e] bg-white px-3 py-2 text-[#202020] outline-none transition focus:border-(--accent)"
                    />
                  </label>
                  <label className="block text-sm font-semibold text-[#202020]">
                    Preferred time
                    <input
                      required
                      name="preferred-time"
                      type="time"
                      className="mt-2 w-full border border-[#aaa69e] bg-white px-3 py-2 text-[#202020] outline-none transition focus:border-(--accent)"
                    />
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
                    ? "Describe the items, approximate amount, access details, or anything else we should know."
                    : "How can we help?"
                }
              />
            </label>

            <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={onClose}
                disabled={isSubmitting}
                className="cursor-pointer border border-[#aaa69e] px-5 py-2.5 font-semibold text-[#4f4c47] transition hover:bg-[#f3f0e8]"
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
