import type { Metadata } from "next";
import ServicesSection from "@/components/sections/ServicesSection";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Junk Removal Services",
  description:
    "Junk removal service examples presented in an unofficial Veriq website concept for PML Junk Removal.",
};

export default function ServicesPage() {
  return (
    <Section>
      <div className="pt-8">
        <ServicesSection showAll />
      </div>
    </Section>
  );
}
