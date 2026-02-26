import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

interface VideoEmbedProps {
  youtubeVideoId: string;
  videoTitle?: string;
  clientName: string;
}

export function VideoEmbed({
  youtubeVideoId,
  videoTitle,
  clientName,
}: VideoEmbedProps) {
  return (
    <section className="relative py-20 sm:py-28 bg-bg-primary overflow-hidden">
      <div className="noise-overlay absolute inset-0 pointer-events-none" />

      <Container className="relative z-10">
        <ScrollReveal>
          <div className="text-center mb-10">
            <p className="text-eyebrow mb-4">Watch the Full Story</p>
            <h2 className="text-display-lg text-text-primary max-w-3xl mx-auto">
              {videoTitle ?? `${clientName}\u2019s Success Story`}
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <div
              className="relative rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.08)]"
              style={{
                boxShadow:
                  "0 0 0 1px rgba(244,121,32,0.08), 0 8px 60px rgba(0,0,0,0.4)",
              }}
            >
              {/* 16:9 aspect ratio container */}
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${youtubeVideoId}?rel=0&modestbranding=1`}
                  title={videoTitle ?? `${clientName} success story video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
