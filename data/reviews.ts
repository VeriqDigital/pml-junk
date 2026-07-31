export type Review = {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
  source: "Google";
};

export const reviews: Review[] = [
  {
    id: 1,
    name: "Marcus T.",
    rating: 5,
    text: "They gave me a clear estimate, arrived when expected, and cleared everything out quickly. The whole process was easy.",
    date: "2 weeks ago",
    source: "Google",
  },
  {
    id: 2,
    name: "Danielle R.",
    rating: 5,
    text: "The crew was friendly, straightforward, and careful while removing several bulky items from the house.",
    date: "1 month ago",
    source: "Google",
  },
  {
    id: 3,
    name: "Chris W.",
    rating: 5,
    text: "Fast response and a smooth pickup. They answered my questions before starting and left the space clean.",
    date: "1 month ago",
    source: "Google",
  },
  {
    id: 4,
    name: "Alicia B.",
    rating: 5,
    text: "PML made a stressful cleanout feel manageable. They worked efficiently and kept me updated throughout the job.",
    date: "2 months ago",
    source: "Google",
  },
  {
    id: 5,
    name: "Robert K.",
    rating: 5,
    text: "Good people and fair pricing. The final amount matched the quote, and the whole process was simple.",
    date: "3 months ago",
    source: "Google",
  },
  {
    id: 6,
    name: "Nicole S.",
    rating: 5,
    text: "They worked with my schedule and confirmed everything before arriving. Honest communication from start to finish.",
    date: "3 months ago",
    source: "Google",
  },
  {
    id: 7,
    name: "James H.",
    rating: 4,
    text: "The cleanout took a little longer than expected, but they kept me updated and did the job right. I appreciated the communication.",
    date: "4 months ago",
    source: "Google",
  },
  {
    id: 8,
    name: "Erica M.",
    rating: 5,
    text: "They were patient, practical, and clear about my options. I would call them again for another cleanup.",
    date: "5 months ago",
    source: "Google",
  },
  {
    id: 9,
    name: "Paul G.",
    rating: 5,
    text: "Fast pickup, thorough cleanup, and no pressure. It feels good to have a local hauling company I can recommend.",
    date: "6 months ago",
    source: "Google",
  },
];
