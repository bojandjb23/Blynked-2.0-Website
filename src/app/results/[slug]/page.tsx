import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/data/case-studies";
import { CaseStudyHero } from "@/components/sections/case-study/hero";
import { Challenge } from "@/components/sections/case-study/challenge";
import { Trigger } from "@/components/sections/case-study/trigger";
import { Solution } from "@/components/sections/case-study/solution";
import { ResultsSection } from "@/components/sections/case-study/results-section";
import { CaseStudyTestimonial } from "@/components/sections/case-study/testimonial";
import { Takeaways } from "@/components/sections/case-study/takeaways";
import { CaseStudyCTA } from "@/components/sections/case-study/cta";
import { VideoEmbed } from "@/components/sections/case-study/video-embed";
import { RelatedStudies } from "@/components/sections/case-study/related-studies";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({
    slug: cs.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${study.clientName} — ${study.heroMetric} ${study.heroMetricLabel}`,
    description: study.resultSummary,
    openGraph: {
      title: `${study.clientName} Case Study | Blynked`,
      description: study.resultSummary,
      url: `https://blynked.io/results/${study.slug}`,
    },
  };
}

function getNextStudy(currentSlug: string) {
  const currentIndex = caseStudies.findIndex((cs) => cs.slug === currentSlug);
  const nextIndex = (currentIndex + 1) % caseStudies.length;
  return caseStudies[nextIndex];
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  const nextStudy = getNextStudy(slug);

  return (
    <>
      <CaseStudyHero study={study} />
      <Challenge challenges={study.challenge} />
      <Trigger
        trigger={study.trigger}
        quote={study.quote}
        quoteAuthor={study.quoteAuthor}
        quoteTitle={study.quoteTitle}
      />
      <Solution solutions={study.solution} pillarsUsed={study.pillarsUsed} />
      <ResultsSection beforeAfter={study.beforeAfter} results={study.results} />
      <CaseStudyTestimonial
        quote={study.quote}
        authorName={study.quoteAuthor}
        authorTitle={study.quoteTitle}
        clientName={study.clientName}
      />
      {study.youtubeVideoId && (
        <VideoEmbed
          youtubeVideoId={study.youtubeVideoId}
          videoTitle={study.videoTitle}
          clientName={study.clientName}
        />
      )}
      <Takeaways takeaways={study.takeaways} />
      <RelatedStudies currentSlug={slug} />
      <CaseStudyCTA
        clientName={study.clientName}
        nextStudySlug={nextStudy.slug}
        nextStudyName={nextStudy.clientName}
      />
    </>
  );
}
