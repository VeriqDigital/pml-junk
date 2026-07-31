import type { ModalType } from "@/components/layout/LeadModal";

export const siteConfig = {
  name: "PML Junk Removal",
  shortName: "PML Junk Removal",
  description:
    "Fast, dependable junk removal and cleanout services in Johnston, Iowa and the surrounding Des Moines metro.",
  url: "https://example.com",
  locale: "en_US",
  contact: {
    email: "hello@example.com",
    address: "Johnston, IA and surrounding communities",
    mapUrl: "https://maps.google.com/?q=Johnston+Iowa",
    mapEmbedUrl: "https://www.google.com/maps?q=Johnston+Iowa&output=embed",
  },
  hours: [
    { label: "Scheduling", value: "By appointment" },
    { label: "Service area", value: "Johnston & the Des Moines metro" },
  ],
  socialLinks: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/",
      shortLabel: "IG",
    },
  ],
} as const;

export type NavItem =
  | { label: string; href: string }
  | { label: string; modal: ModalType };

export const navigation: NavItem[] = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", modal: "contact" },
];

export const footerLinks: NavItem[] = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Request a Quote", modal: "service" },
];

export const primaryCta = {
  label: "Request a Quote",
  modal: "service",
} as const satisfies { label: string; modal: ModalType };
