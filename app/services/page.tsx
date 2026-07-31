import type { Metadata } from "next";
import ServicesSection from "@/components/sections/ServicesSection";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Junk Removal Services",
  description:
    "Explore junk removal, hauling, and cleanout services from PML Junk Removal in Johnston, Iowa.",
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
