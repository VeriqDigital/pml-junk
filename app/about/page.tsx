import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `About ${siteConfig.name}, presented in an unofficial Veriq website concept.`,
};

const companyValues = [
  {
    title: "Direct communication",
    description:
      "Work directly with Jason to discuss what needs to go and what the job involves.",
  },
  {
    title: "Respectful service",
    description:
      "We work carefully around your home or business and treat your property like it is our own.",
  },
  {
    title: "A cleaner finish",
    description:
      "We load the unwanted items, haul them away, and leave the work area ready to use again.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-heading text-lg font-bold text-(--accent)">
              Locally owned in Johnston
            </p>
            <h1 className="mt-3 max-w-2xl font-heading text-5xl font-bold leading-[1.05] text-[#202020] md:text-6xl">
              The easy way to clear out what you no longer need
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#625f59]">
              {siteConfig.name} is locally owned and operated by Jason Paullin
              in Johnston, Iowa. Call or text Jason to discuss what needs to go,
              then let PML handle the lifting, loading, and hauling.
            </p>
            <p className="mt-4 max-w-xl text-lg leading-8 text-[#625f59]">
              Whether you are clearing one bulky item, an entire property, or
              debris from a project, the service is designed to help you get
              back a clean, usable space without doing the heavy lifting.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/services">View Services</Button>
              <Button href={siteConfig.contact.phoneHref} variant="secondary">Call Jason</Button>
            </div>
          </div>

          <div className="relative min-h-105 overflow-hidden border border-[#d8d5ce] bg-[#ece9e2]">
            <Image
              src="/pexels-zeynep-sude-emek-193601188-29359069.jpg"
              alt="Household items ready for junk removal"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
              preload
            />
          </div>
        </div>
      </Section>

      <Section>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-(--accent)">
            What you can expect
          </p>
          <h2 className="mt-3 font-heading text-4xl font-bold text-[#202020] md:text-5xl">
            Junk removal without the hassle
          </h2>

          <div className="mt-10 grid border-l border-t border-[#d8d5ce] md:grid-cols-3">
            {companyValues.map((value, index) => (
              <article
                key={value.title}
                className="border-b border-r border-[#d8d5ce] bg-white p-7"
              >
                <p className="font-heading text-sm font-bold text-(--accent)">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-heading text-2xl font-bold text-[#202020]">
                  {value.title}
                </h3>
                <p className="mt-4 leading-7 text-[#625f59]">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative min-h-90 overflow-hidden border border-[#d8d5ce] bg-[#ece9e2]">
            <Image
              src="/pexels-jakobjin-13885592.jpg"
              alt="A cluttered space ready for a complete cleanout"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="lg:pl-6">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-(--accent)">
              Local and ready to help
            </p>
            <h2 className="mt-3 font-heading text-4xl font-bold text-[#202020] md:text-5xl">
              Serving Johnston and the Des Moines metro
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#625f59]">
              Based in Johnston, PML helps homeowners, landlords, property
              managers, and businesses throughout the surrounding metro clear
              unwanted items.
            </p>
            <div className="mt-7">
              <Button
                href={siteConfig.contact.mapUrl}
                newTab
                variant="secondary"
              >
                View Service Area
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
