export interface Testimonial {
  quote: string;
  pullQuote: string;
  authorName: string;
  authorTitle: string;
  authorCompany: string;
  authorPhoto?: string;
  videoUrl?: string;
  featured: boolean;
  metric?: string;
  metricLabel?: string;
}
