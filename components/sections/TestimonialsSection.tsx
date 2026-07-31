import Link from "next/link";
import ReviewCard from "@/components/ui/ReviewCard";
import { reviews } from "@/data/reviews";

const trustPoints = [
  "Clear Quotes",
  "Locally Owned",
  "Careful Crews",
  "Fast Scheduling",
  "Homes & Businesses",
] as const;

const TestimonialsSection = () => {
  return (
    <div>
      <div className="mb-5 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-(--accent)">
            Customer reviews
          </p>
          <h2 className="mt-3 max-w-xl font-heading text-4xl font-black uppercase leading-none text-[#202020] md:text-6xl">
            What our customers have to say
          </h2>
        </div>

        <Link
          href="/reviews"
          className="inline-flex border-2 border-[#202020] px-6 py-3 font-heading text-base font-extrabold uppercase tracking-wide text-[#202020] transition-colors hover:bg-[#202020] hover:text-white"
        >
          View All Google Reviews
        </Link>
      </div>

      <ul className="mb-9 grid grid-cols-1 gap-x-5 border-y border-[#202020] py-5 sm:grid-cols-2 md:grid-cols-6 xl:grid-cols-5 pt-2 pb-2">
        {trustPoints.map((point, index) => (
          <li
            key={point}
            className={`flex items-center justify-start gap-2 py-2 text-left text-sm font-semibold text-[#202020] sm:last:col-span-2 sm:last:justify-center md:col-span-2 md:last:col-span-2 xl:col-span-1 xl:justify-center xl:last:col-span-1 ${index === 3 ? "md:col-start-2 xl:col-start-auto" : ""}`}
          >
            <span aria-hidden="true" className="font-black text-(--accent)">
              &#10003;
            </span>
            {point}
          </li>
        ))}
      </ul>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {reviews.slice(0, 3).map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
