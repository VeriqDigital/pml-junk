const trustItems = [
  {
    label: "Ask About an Estimate",
    icon: (
      <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />
    ),
  },
  {
    label: "Locally Owned",
    icon: (
      <>
        <path d="m3 11 9-7 9 7" />
        <path d="M5 10v10h14V10M9 20v-6h6v6" />
      </>
    ),
  },
  {
    label: "Lifting, Loading & Hauling",
    icon: (
      <>
        <path d="m14.7 6.3 3-3a4 4 0 0 1-5 5l-7.9 7.9a2 2 0 0 0 2.8 2.8l7.9-7.9a4 4 0 0 0 5-5l-3 3" />
      </>
    ),
  },
  {
    label: "Home & Business Inquiries",
    icon: (
      <>
        <path d="M5 17h14l1-5-3-4H7l-3 4 1 5Z" />
        <path d="M7 17v2M17 17v2M7.5 13h.01M16.5 13h.01" />
      </>
    ),
  },
  {
    label: "Direct Communication",
    icon: (
      <>
        <path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z" />
        <path d="M9 8h6M9 12h6" />
      </>
    ),
  },
] as const;

const TrustStrip = () => {
  return (
    <section
      aria-label="PML Junk Removal concept service highlights"
      className="border-b border-[#d8d5ce] bg-[#f5f5f3]"
    >
      <div className="mx-auto grid max-w-(--container-width) grid-cols-[repeat(2,minmax(0,1fr))] px-4 sm:px-6 lg:grid-cols-[repeat(5,minmax(0,1fr))]">
        {trustItems.map((item) => (
          <div
            key={item.label}
            className="flex min-h-24 min-w-0 items-center gap-3 border-b border-[#ddd9d1] px-3 py-4 last:col-span-2 lg:last:col-span-1 lg:border-b-0 lg:border-r lg:last:border-r-0"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="size-8 shrink-0 fill-none stroke-(--accent) stroke-[1.8]"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {item.icon}
            </svg>
            <p className="min-w-0 font-heading text-base font-bold leading-5 text-[#202020]">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustStrip;
