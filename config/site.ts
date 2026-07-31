import type { ModalType } from "@/components/layout/LeadModal";

export const siteConfig = {
  name: "PML Junk Removal",
  shortName: "PML Junk Removal",
  owner: "Jason Paullin",
  description:
    "An unofficial website concept created by Veriq for PML Junk Removal in Johnston, Iowa.",
  locale: "en_US",
  contact: {
    phone: "(515) 901-3779",
    phoneHref: "tel:+15159013779",
    smsHref: "sms:+15159013779",
    email: "jason.paullin@pml.com",
    emailHref: "mailto:jason.paullin@pml.com",
    address: "Johnston, Iowa",
    serviceArea: "Serving the surrounding Des Moines metro",
    mapUrl: "https://maps.google.com/?q=Johnston+Iowa",
    mapEmbedUrl: "https://www.google.com/maps?q=Johnston+Iowa&output=embed",
  },
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
  { label: "Preview Estimate Form", modal: "service" },
];

export const primaryCta = {
  label: "Preview Estimate Form",
  modal: "service",
} as const satisfies { label: string; modal: ModalType };
