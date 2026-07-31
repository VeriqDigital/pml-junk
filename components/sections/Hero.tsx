"use client";

import Image from "next/image";
import LeadModal from "@/components/layout/LeadModal";
import useLeadModal from "@/components/layout/useLeadModal";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { primaryCta, siteConfig } from "@/config/site";

const Hero = () => {
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
    <section>
      <div className="grid border-b border-(--border) bg-white lg:min-h-115 lg:grid-cols-[0.9fr_1.1fr]">
        <Container className="flex items-center py-12 lg:py-14">
          <div className="max-w-xl lg:ml-auto lg:pr-12">
            <p className="mb-3 font-heading text-lg font-bold text-(--accent)">
              Locally Owned &amp; Operated
            </p>
            <h1 className="font-heading text-4xl font-bold leading-[1.05] text-[#202020] sm:text-5xl lg:text-[3.5rem]">
              Junk Gone.
              <span className="block">Space Reclaimed.</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-7 text-[#4f4c47]">
              Junk removal for homes, rentals, and businesses in Johnston,
              Iowa and the surrounding Des Moines metro.
            </p>
            <p className="mt-3 max-w-lg text-lg leading-7 text-[#4f4c47]">
              From one bulky item to a complete cleanout, we do the lifting,
              loading, and hauling.
            </p>
            <p className="mt-5 font-heading text-lg font-bold text-[#202020]">
              Work directly with Jason from the first message through pickup.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button onClick={() => openModal(primaryCta.modal)}>
                {primaryCta.label}
              </Button>
              <Button href={siteConfig.contact.phoneHref} variant="secondary">Call Jason</Button>
            </div>
            <a href={siteConfig.contact.smsHref} className="mt-4 inline-block text-sm font-semibold text-[#555555] underline decoration-[#999999] underline-offset-4 transition hover:text-black">
              Prefer texting? Text {siteConfig.contact.phone}
            </a>
          </div>
        </Container>

        <div className="relative min-h-80 border-t border-[#d8d2c7] bg-[#e8e5de] sm:min-h-100 lg:min-h-full lg:border-l lg:border-t-0">
          <Image
            src="/pexels-rdne-7464712.jpg"
            alt="Person carrying a large furniture item for removal"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 55vw"
            preload
          />
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
    </section>
  );
};

export default Hero;
