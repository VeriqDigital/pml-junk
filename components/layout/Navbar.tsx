"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import { navigation, primaryCta, siteConfig } from "@/config/site";
import LeadModal from "./LeadModal";
import type { ModalType } from "./LeadModal";
import useLeadModal from "./useLeadModal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    activeModal,
    closeModal,
    handleFormSubmit,
    hasSubmitted,
    isSubmitting,
    openModal,
    submitError,
  } = useLeadModal();

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const handleModalOpen = (modal: ModalType) => {
    setIsMenuOpen(false);
    openModal(modal);
  };

  const desktopNavItemClass =
    "font-heading text-base font-extrabold uppercase tracking-[0.06em] text-[#252525] transition-colors hover:text-(--accent)";

  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b-4 border-(--accent) bg-white text-sm shadow-[0_4px_16px_rgba(0,0,0,0.12)]">
      <div className="mx-auto hidden h-32 w-full max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-10 lg:grid">
        <div className="justify-self-start">
          <p className="font-heading text-lg font-bold leading-tight text-[#202020]">
            Junk removal made simple.
          </p>
          <p className="mt-2 text-xs leading-5 text-[#4f4c47]">
            Serving Johnston and the surrounding Des Moines metro.
          </p>
        </div>

        <Link
          href="/"
          className="flex h-31 w-52 items-center justify-center"
          aria-label={`${siteConfig.name} home`}
        >
          <Image
            src="/PML logo.png"
            alt="PML Junk Removal LLC"
            width={198}
            height={200}
            className="h-full w-full object-contain"
            sizes="208px"
            preload
          />
        </Link>

        <div className="justify-self-end text-right text-xs leading-5 text-[#4f4c47]">
          <p className="font-heading text-base font-bold text-[#202020]">
            Need your space back?
          </p>
          <p className="mt-1">
            Tell us what needs to go and we’ll take it from there.
          </p>
        </div>
      </div>

      <nav className="hidden h-14 border-t border-[#e5e1d9] lg:flex lg:items-center lg:justify-center lg:gap-10">
        {navigation.map((item) =>
          "href" in item ? (
            <Link
              key={item.href}
              href={item.href}
              className={desktopNavItemClass}
            >
              {item.label}
            </Link>
          ) : (
            <button
              key={item.label}
              type="button"
              onClick={() => openModal(item.modal)}
              className={`${desktopNavItemClass} cursor-pointer`}
            >
              {item.label}
            </button>
          ),
        )}
        <Button onClick={() => openModal(primaryCta.modal)}>
          {primaryCta.label}
        </Button>
      </nav>

      <nav className="relative mx-auto grid h-24 w-full grid-cols-[1fr_auto_1fr] items-center px-4 sm:h-30 sm:px-8 lg:hidden">
        <Link
          href="/"
          className="relative z-10 col-start-2 flex h-22 w-36 items-center justify-center sm:h-28 sm:w-44 lg:h-31 lg:w-52"
          aria-label={`${siteConfig.name} home`}
        >
          <Image
            src="/PML logo.png"
            alt="PML Junk Removal LLC"
            width={198}
            height={200}
            className="h-full w-full object-contain"
            sizes="(max-width: 640px) 144px, (max-width: 1024px) 176px, 208px"
            preload
          />
        </Link>

        <div className="col-start-1 row-start-1 lg:hidden">
          <button
            type="button"
            className="flex size-10 items-center justify-center border-2 border-[#252525] text-[#252525] transition hover:border-(--accent) hover:text-(--accent)"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          >
            <span className="grid gap-1.5" aria-hidden="true">
              <span
                className={`block h-0.5 w-5 rounded-full bg-current transition-transform ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-current transition-opacity ${isMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-current transition-transform ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>

        <div className="col-start-3 row-start-1 ml-auto origin-right scale-70 sm:scale-80 lg:hidden">
          <Button onClick={() => openModal(primaryCta.modal)}>Quote</Button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="w-full border-t border-[#d8d2c7] bg-white p-2 text-[#252525] shadow-[0_12px_30px_rgba(0,0,0,0.15)] lg:hidden">
          <div className="grid gap-1">
            {navigation.map((item) =>
              "href" in item ? (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block border-b border-[#e5e0d6] px-4 py-3 font-bold transition hover:bg-[#f3f0e8] hover:text-(--accent)"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleModalOpen(item.modal)}
                  className="w-full border-b border-[#e5e0d6] px-4 py-3 text-left font-bold transition hover:bg-[#f3f0e8] hover:text-(--accent)"
                >
                  {item.label}
                </button>
              ),
            )}
          </div>
        </div>
      )}

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
    </header>
  );
};

export default Navbar;
