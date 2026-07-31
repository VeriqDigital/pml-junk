import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

const LocationSection = () => {
  return (
    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="space-y-6">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-(--accent)">
            Service area
          </p>
          <h2 className="mt-4 max-w-3xl font-heading text-4xl font-black uppercase leading-tight text-[#202020] md:text-6xl">
            Proudly Serving Johnston
          </h2>
        </div>
        <div>
          <h3 className="font-heading text-2xl font-black uppercase text-[#202020]">
            Based in
          </h3>
          <p className="mt-2 text-[#625f59]">{siteConfig.contact.address}</p>
        </div>
        <Button href={siteConfig.contact.mapUrl} newTab>
          View Service Area
        </Button>
        <div className="h-px bg-[#d8d5ce]" />
        <div className="space-y-2">
          <h3 className="font-heading text-2xl font-black uppercase text-[#202020]">
            Availability
          </h3>
          {siteConfig.hours.map((item) => (
            <p key={item.label} className="font-bold text-[#625f59]">
              {item.label}: {item.value}
            </p>
          ))}
        </div>
      </div>
      <div className="min-h-100 overflow-hidden border border-[#d8d5ce] bg-white">
        <iframe
          src={siteConfig.contact.mapEmbedUrl}
          title={`${siteConfig.name} map`}
          width="100%"
          height="100%"
          loading="lazy"
          className="min-h-100"
        />
      </div>
    </div>
  );
};

export default LocationSection;
