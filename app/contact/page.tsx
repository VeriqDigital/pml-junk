import type { Metadata } from "next";
import LocationSection from "@/components/sections/LocationSection";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Contact Jason",
  description:
    "Confirmed direct-contact details for PML Junk Removal, presented in an unofficial Veriq website concept.",
};

export default function ContactPage() {
  return (
    <Section>
      <div className="pt-8">
        <LocationSection />
      </div>
    </Section>
  );
}
