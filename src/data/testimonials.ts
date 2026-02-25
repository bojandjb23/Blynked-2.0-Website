import type { Testimonial } from "@/types/testimonial";

export const testimonials: Testimonial[] = [
  {
    quote: "Shut up. Listen and give it a go. That was my approach and it paid off massively. Blynked completely transformed how we think about business development. For the first time in 27 years, we have a system that fills our pipeline without me being in every conversation.",
    pullQuote: "Shut up. Listen and give it a go.",
    authorName: "Craig Lamb",
    authorTitle: "CEO",
    authorCompany: "Envative",
    authorPhoto: "/images/team/craig-lamb.jpg",
    featured: true,
    metric: "10x",
    metricLabel: "Lead quality improvement in 9 months",
  },
  {
    quote: "Blynked understood our niche immediately and built a pipeline that actually filled itself. We went from zero outbound meetings to 7 qualified calls in just 2.5 weeks. The speed was incredible.",
    pullQuote: "Blynked understood our niche immediately and built a pipeline that actually filled itself.",
    authorName: "Nate McGuire",
    authorTitle: "Founder",
    authorCompany: "Mayven Studios",
    featured: true,
    metric: "7",
    metricLabel: "Calls booked in 2.5 weeks",
  },
  {
    quote: "The Traction Framework fundamentally changed how we think about business development. This wasn't a campaign — it was a transformation. The ROI speaks for itself.",
    pullQuote: "This wasn't a campaign — it was a transformation.",
    authorName: "Managing Director",
    authorTitle: "Leadership",
    authorCompany: "Amsterdam Standard",
    featured: false,
    metric: "20x",
    metricLabel: "Return on investment",
  },
];

export const featuredTestimonial = testimonials.find((t) => t.authorCompany === "Envative")!;
