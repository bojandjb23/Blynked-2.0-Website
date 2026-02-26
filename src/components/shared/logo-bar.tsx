import Image from "next/image";
import { ScrollReveal } from "./scroll-reveal";

/* ─── Company logos our clients booked meetings with ─── */

const logos = [
  { name: "BMW", src: "/images/logos/companies/bmw.svg", width: 60, height: 60 },
  { name: "Walmart", src: "/images/logos/companies/walmart.svg", width: 120, height: 32 },
  { name: "Starbucks", src: "/images/logos/companies/starbucks.svg", width: 60, height: 60 },
  { name: "Target", src: "/images/logos/companies/target.svg", width: 60, height: 60 },
  { name: "Van Mossel", src: "/images/logos/companies/vanmossel.svg", width: 130, height: 36 },
  { name: "KPN", src: "/images/logos/companies/kpn.svg", width: 80, height: 36 },
  { name: "Dura Vermeer", src: "/images/logos/companies/duravermeer.svg", width: 130, height: 36 },
  { name: "DHL", src: "/images/logos/companies/dhl.svg", width: 90, height: 36 },
  { name: "Van den Udenhout", src: "/images/logos/companies/vandenudenhout.svg", width: 150, height: 36 },
  { name: "Heijmans", src: "/images/logos/companies/heijmans.svg", width: 120, height: 36 },
];

function LogoItem({ logo }: { logo: (typeof logos)[number] }) {
  return (
    <div
      className="inline-flex items-center justify-center flex-shrink-0 px-6 md:px-10 opacity-50 hover:opacity-80 transition-opacity duration-500"
      title={logo.name}
    >
      <Image
        src={logo.src}
        alt={logo.name}
        width={logo.width}
        height={logo.height}
        className="h-8 md:h-10 w-auto brightness-0 invert"
        draggable={false}
      />
    </div>
  );
}

export function LogoBar() {
  /* Duplicate the array for seamless infinite scroll */
  const doubledLogos = [...logos, ...logos];

  return (
    <ScrollReveal>
      <div className="glass-elevated py-8 px-6">
        <p className="text-caption text-text-secondary text-center mb-6 font-medium italic">
          Businesses our clients booked meetings with
        </p>

        {/* Scrolling logo strip with CSS marquee + edge fade */}
        <div
          className="overflow-hidden marquee-mask"
          aria-label="Company logos"
          role="marquee"
        >
          <div className="inline-flex items-center animate-marquee whitespace-nowrap">
            {doubledLogos.map((logo, i) => (
              <LogoItem key={`${logo.name}-${i}`} logo={logo} />
            ))}
          </div>
        </div>

        <p className="text-caption text-text-secondary text-center mt-6">
          <span className="text-accent font-semibold">10x</span> lead quality{" "}
          <span className="mx-2 text-text-tertiary">|</span>
          <span className="text-accent font-semibold">20x</span> ROI{" "}
          <span className="mx-2 text-text-tertiary">|</span>
          <span className="text-accent font-semibold">$139K</span> closed in 90 days
        </p>
      </div>
    </ScrollReveal>
  );
}
