"use client";

import Button from "@/components/ui/Button";
import LeadModal from "@/components/layout/LeadModal";
import useLeadModal from "@/components/layout/useLeadModal";
import { primaryCta, siteConfig } from "@/config/site";

const ContactCtaSection = () => {
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
    <div className="grid items-center gap-10 border-y border-[#d8d8d5] bg-white px-6 py-12 md:grid-cols-[1fr_auto] md:px-10">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#444444]">
          Local and easy to reach
        </p>
        <h2 className="mt-3 max-w-3xl font-heading text-4xl font-black uppercase leading-none text-[#171717] md:text-6xl">
          Ready to get your space back?
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-[#666666]">
          Call or text Jason with a description or photos of what needs to be
          removed, and PML can follow up about your estimate.
        </p>
      </div>

      <div className="flex min-w-56 flex-col gap-3">
        <Button href={siteConfig.contact.phoneHref}>Call Jason</Button>
        <Button href={siteConfig.contact.smsHref} variant="secondary">Text Jason</Button>
        <Button onClick={() => openModal(primaryCta.modal)} variant="secondary">
          {primaryCta.label}
        </Button>
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
    </div>
  );
};

export default ContactCtaSection;
