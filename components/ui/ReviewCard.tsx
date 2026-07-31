import type { Review } from "@/data/reviews";

type ReviewCardProps = {
  review: Review;
};

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <article className="flex min-h-64 flex-col border border-[#d8d5ce] bg-white p-6">
      <div
        className="flex gap-0.5 text-lg leading-none text-[#f5a400]"
        aria-label={`${review.rating} out of 5 stars`}
      >
        {Array.from({ length: 5 }, (_, index) => (
          <span key={index} aria-hidden="true">
            {index < review.rating ? "★" : "☆"}
          </span>
        ))}
      </div>

      <p className="mt-5 text-[15px] leading-7 text-[#45423e]">
        &ldquo;{review.text}&rdquo;
      </p>

      <div className="mt-auto flex items-end justify-between gap-4 border-t border-[#ebe8e2] pt-5">
        <p className="font-heading text-lg font-extrabold uppercase text-[#202020]">
          {review.name}
        </p>
        <p className="text-right text-xs leading-5 text-[#77736c]">
          {review.source}
          <br />
          {review.date}
        </p>
      </div>
    </article>
  );
};

export default ReviewCard;
