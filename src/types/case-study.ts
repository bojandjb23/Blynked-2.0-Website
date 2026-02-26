export interface CaseStudy {
  slug: string;
  clientName: string;
  industry: string;
  industryTag: "Software Dev" | "SaaS" | "Tech" | "Digital Agency" | "Creative Agency" | "Consultancy";
  heroMetric: string;
  heroMetricLabel: string;
  resultSummary: string;
  quote: string;
  quoteAuthor: string;
  quoteTitle: string;
  companySize?: string;
  revenueRange?: string;
  pillarsUsed: string[];
  challenge: string[];
  trigger: string;
  solution: string[];
  beforeAfter: { metric: string; before: string; after: string }[];
  results: { value: string; label: string }[];
  takeaways: string[];
  outcomeTag: "Pipeline Growth" | "Revenue" | "Speed to Results" | "Market Entry" | "Deal Size";
  stageTag: "Startup" | "Scale-up";
  youtubeVideoId?: string;
  videoTitle?: string;
}
