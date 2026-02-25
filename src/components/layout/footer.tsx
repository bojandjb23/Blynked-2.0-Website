import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { footerColumns } from "@/data/navigation";
import { siteConfig } from "@/data/site-config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-secondary border-t border-border-glass" role="contentinfo">
      {/* Mini CTA */}
      <div className="bg-bg-tertiary py-12">
        <Container className="text-center">
          <h2 className="text-heading-md text-text-primary mb-4">
            Ready to build a predictable pipeline?
          </h2>
          <p className="text-body-md text-text-secondary mb-6">Let&apos;s talk.</p>
          <Button href="/book-a-call">Book Your Strategy Call</Button>
        </Container>
      </div>

      <Container className="py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-heading-sm text-text-primary mb-4">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-body-sm text-text-tertiary hover:text-text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Connect column */}
          <div>
            <h3 className="text-heading-sm text-text-primary mb-4">Connect</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/book-a-call"
                  className="text-body-sm text-accent hover:text-accent-hover transition-colors"
                >
                  Book a Call
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.links.email}`}
                  className="text-body-sm text-text-tertiary hover:text-text-primary transition-colors"
                >
                  {siteConfig.links.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-sm text-text-tertiary hover:text-text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social proof */}
        <p className="text-caption text-text-tertiary mt-12 text-center">
          Trusted by 20+ software companies across Europe
        </p>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-border-glass flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-caption text-text-tertiary">
            <Link href="/privacy" className="hover:text-text-primary transition-colors">Privacy</Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-text-primary transition-colors">Terms</Link>
          </div>
          <p className="text-caption text-text-tertiary">
            &copy; {currentYear} {siteConfig.company.legalName} | {siteConfig.company.country}
          </p>
        </div>
      </Container>
    </footer>
  );
}
