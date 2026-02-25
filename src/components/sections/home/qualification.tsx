import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

const forYou = [
  "You run a software dev, SaaS, or tech company",
  "Revenue between $1.5M and $12M",
  "You want to stop relying on word-of-mouth",
  "You are ready to invest in a real growth system",
];

const notForYou = [
  "You want a quick-fix magic bullet",
  "You are not willing to invest in the process",
  "You expect results without collaboration",
  "Your revenue is under $1M",
];

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="flex-shrink-0 mt-0.5"
    >
      <path
        d="M5 10l3 3 7-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="flex-shrink-0 mt-0.5"
    >
      <path
        d="M6 6l8 8M14 6l-8 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Qualification() {
  return (
    <Section background="secondary" id="qualification">
      <Container>
        <div className="grid md:grid-cols-2 gap-6">
          <ScrollReveal>
            <div className="glass p-8 md:p-10 h-full">
              <h3 className="text-heading-sm text-text-primary mb-6">
                This is for you if&hellip;
              </h3>
              <ul className="space-y-4">
                {forYou.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-body-sm text-text-secondary"
                  >
                    <span className="text-success">
                      <CheckIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="glass p-8 md:p-10 h-full">
              <h3 className="text-heading-sm text-text-primary mb-6">
                This is NOT for you if&hellip;
              </h3>
              <ul className="space-y-4">
                {notForYou.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-body-sm text-text-tertiary"
                  >
                    <XIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}
