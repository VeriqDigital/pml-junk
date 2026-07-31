"use client";

import Link from "next/link";
import { footerLinks, siteConfig } from "@/config/site";
import LeadModal from "./LeadModal";
import useLeadModal from "./useLeadModal";

const Footer = () => {
  const {
    activeModal,
    closeModal,
    handleFormSubmit,
    hasSubmitted,
    isSubmitting,
    openModal,
    submitError,
  } = useLeadModal();

  return (
    <footer className="w-full border-t-4 border-(--accent) bg-[#f5f5f3] text-[#202020]">
      <div className="mx-auto w-full max-w-(--container-width) px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.1fr_0.7fr_1fr_1fr] lg:gap-10">
          <div>
            <h2 className="font-heading text-2xl font-bold">
              {siteConfig.name}
            </h2>
            <p className="mt-4 max-w-sm leading-7 text-[#625f59]">
              {siteConfig.description}
            </p>
            <p className="mt-5 font-heading text-lg font-bold">
              Clear quotes. Reliable pickup. No clutter left behind.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="font-heading text-lg font-bold uppercase">
              Quick Links
            </h2>
            <ul className="mt-5 space-y-3 text-sm font-semibold text-[#4f4c47]">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  {"href" in link ? (
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-(--accent)"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => openModal(link.modal)}
                      className="cursor-pointer transition-colors hover:text-(--accent)"
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-heading text-lg font-bold uppercase">
              Service Area
            </h2>
            <address className="mt-5 text-sm not-italic leading-7 text-[#4f4c47]">
              <p>{siteConfig.contact.address}</p>
            </address>
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold uppercase">Availability</h2>
            <dl className="mt-5 space-y-3 text-sm text-[#4f4c47]">
              {siteConfig.hours.map((item) => (
                <div key={item.label}>
                  <dt className="font-semibold text-[#202020]">{item.label}</dt>
                  <dd className="mt-0.5">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-14 border-t border-[#cbc7bf] pt-6 text-center text-xs font-semibold text-[#6f6b64] sm:flex sm:items-center sm:justify-between sm:text-left">
          <p>&copy; 2026 {siteConfig.name}. All rights reserved.</p>
          <div>
            <p className="mt-2 sm:mt-0">Johnston, Iowa</p>
            <p className="mt-1 normal-case text-[#6f6b64]">
              Website designed by{" "}
              <Link
                href="https://www.veriqdigital.com/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-(--primary)"
              >
                Veriq Digital
              </Link>
            </p>
          </div>
        </div>
      </div>

      {activeModal && (
        <LeadModal
          activeModal={activeModal}
          hasSubmitted={hasSubmitted}
          isSubmitting={isSubmitting}
          onClose={closeModal}
          onSubmit={handleFormSubmit}
          submitError={submitError}
        />
      )}
    </footer>
  );
};

export default Footer;
