import Button from "@/components/ui/Button";
import Image from "next/image";
import { services } from "@/data/services";

type ServicesSectionProps = {
  showAll?: boolean;
};

const ServicesSection = ({ showAll = false }: ServicesSectionProps) => {
  const displayedServices = showAll ? services : services.slice(0, 6);

  return (
    <div>
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-(--accent)">
          Service examples
        </p>
        <h2 className="mt-4 max-w-3xl font-heading text-4xl font-black uppercase leading-tight text-[#202020] md:text-6xl">
          Junk removal options to discuss
        </h2>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {displayedServices.map((service, index) => (
          <article
            key={service.title}
            className="flex min-h-105 flex-col overflow-hidden border border-[#d8d5ce] bg-white"
          >
            <div className="relative min-h-52 overflow-hidden bg-[#e7e9e4]">
              <Image src={service.image} alt={service.title} fill className="object-cover transition duration-500 hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="font-heading text-sm font-bold text-[#444444]">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="font-heading text-xl font-black uppercase text-[#202020]">{service.title}</h3>
              <p className="mt-4 text-sm leading-6 text-[#625f59]">{service.description}</p>
            </div>
          </article>
        ))}
      </div>

      {!showAll && (
        <div className="mt-10">
          <Button href="/services" variant="secondary">
            View full list of services
          </Button>
        </div>
      )}
    </div>
  );
};

export default ServicesSection;
