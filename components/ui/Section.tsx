import Container from "./Container";

type SectionProps = {
  children: React.ReactNode;
  id?: string;
};

const Section = ({ children, id }: SectionProps) => {
  return (
    <section id={id} className="border-t border-[#dedbd4] bg-white py-20 text-[#202020]">
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
