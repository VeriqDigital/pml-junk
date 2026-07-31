import type { Metadata } from "next";
import ReviewCard from "@/components/ui/ReviewCard";
import Section from "@/components/ui/Section";
import { reviews } from "@/data/reviews";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description: "Read what customers have to say about PML Junk Removal.",
};

export default function ReviewsPage() {
  return (
    <Section>
      <div className="pb-4 pt-8">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-(--accent)">
          Customer reviews
        </p>
        <h1 className="mt-3 max-w-3xl font-heading text-5xl font-black uppercase leading-none text-[#202020] md:text-7xl">
          Reviews from our customers
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-[#625f59]">
          These are placeholder reviews for now. This page is ready to display
          the complete Google review feed when that integration is added.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </Section>
  );
}
