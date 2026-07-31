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
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.1fr_0.7fr_1fr] lg:gap-10">
          <div>
            <h2 className="font-heading text-2xl font-bold">
              {siteConfig.name}
            </h2>
            <p className="mt-4 max-w-sm leading-7 text-[#625f59]">
              {siteConfig.description}
            </p>
            <p className="mt-5 font-heading text-lg font-bold">
              Call, text, or email Jason directly to discuss a pickup.
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
              Contact Jason
            </h2>
            <address className="mt-5 text-sm not-italic leading-7 text-[#4f4c47]">
              <p>{siteConfig.contact.address}</p>
              <p>{siteConfig.contact.serviceArea}</p>
              <p className="mt-3 font-semibold text-[#171717]">Call or text:</p>
              <a href={siteConfig.contact.phoneHref} className="block hover:underline">{siteConfig.contact.phone}</a>
              <a href={siteConfig.contact.smsHref} className="block hover:underline">Text Jason</a>
              <a href={siteConfig.contact.emailHref} className="mt-2 block break-all hover:underline">{siteConfig.contact.email}</a>
            </address>
          </div>
        </div>

        <div className="mt-14 border-t border-[#cbc7bf] pt-6 text-center text-xs font-semibold text-[#6f6b64] sm:flex sm:items-start sm:justify-between sm:text-left">
          <div className="max-w-3xl">
            <p>Unofficial website concept created by Veriq for demonstration purposes. This website is not currently operated by or affiliated with PML Junk Removal.</p>
            <p className="mt-2">&copy; 2026 Veriq. Demonstration concept.</p>
          </div>
          <div>
            <p className="mt-2 sm:mt-0">Johnston, Iowa</p>
            <p className="mt-1 normal-case text-[#6f6b64]">
              Website designed by{" "}
              <Link
                href="https://www.veriqdigital.com/"
                target="_blank"
                rel="noopener noreferrer"
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
