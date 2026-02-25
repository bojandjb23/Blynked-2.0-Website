import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Blynked's Terms of Service. The terms and conditions governing the use of our website and services.",
};

export default function TermsPage() {
  return (
    <Section>
      <Container className="max-w-3xl">
        <h1 className="text-display-lg text-text-primary mb-4">
          Terms of Service
        </h1>
        <p className="text-caption text-text-tertiary mb-12">
          Last updated: February 2026
        </p>

        <div className="space-y-10">
          <LegalSection title="1. Acceptance of Terms">
            <p>
              By accessing and using the website blynked.io (the
              &ldquo;Website&rdquo;) operated by Blynked B.V.
              (&ldquo;Blynked,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;), you accept and agree to be bound by these
              Terms of Service. If you do not agree with any part of these
              terms, you should not use our Website or services.
            </p>
          </LegalSection>

          <LegalSection title="2. Description of Services">
            <p>
              Blynked provides growth partnership services for technology
              companies, including but not limited to:
            </p>
            <ul>
              <li>Pipeline development and revenue growth strategies</li>
              <li>Positioning and market entry consulting</li>
              <li>Sales enablement and outreach execution</li>
              <li>Full-funnel growth system implementation</li>
            </ul>
            <p>
              Specific service terms, deliverables, and pricing are governed by
              individual service agreements between Blynked and its partners.
            </p>
          </LegalSection>

          <LegalSection title="3. Use of Website">
            <p>You agree to use our Website only for lawful purposes and in a manner that does not:</p>
            <ul>
              <li>Infringe the rights of, restrict, or inhibit anyone else&rsquo;s use of the Website</li>
              <li>Breach any applicable local, national, or international law or regulation</li>
              <li>Transmit any harmful, threatening, or objectionable material</li>
              <li>Attempt to gain unauthorized access to any part of the Website or its systems</li>
            </ul>
          </LegalSection>

          <LegalSection title="4. Intellectual Property">
            <p>
              All content on this Website, including but not limited to text,
              graphics, logos, icons, images, audio clips, and software, is the
              property of Blynked B.V. or its content suppliers and is protected
              by Dutch and international copyright laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, create derivative
              works of, publicly display, or exploit any content from this
              Website without our prior written consent.
            </p>
            <p>
              The Traction Framework and associated methodologies are
              proprietary to Blynked B.V.
            </p>
          </LegalSection>

          <LegalSection title="5. Disclaimer of Warranties">
            <p>
              The Website and its content are provided &ldquo;as is&rdquo; and
              &ldquo;as available&rdquo; without warranties of any kind, either
              express or implied. Blynked does not warrant that:
            </p>
            <ul>
              <li>The Website will be uninterrupted, timely, secure, or error-free</li>
              <li>The results obtained from using the Website will be accurate or reliable</li>
              <li>Any defects in the Website will be corrected</li>
            </ul>
          </LegalSection>

          <LegalSection title="6. Limitation of Liability">
            <p>
              To the fullest extent permitted by Dutch law, Blynked B.V., its
              directors, employees, partners, and affiliates shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages, including but not limited to loss of profits,
              data, or business opportunities, arising out of or relating to
              your use of the Website or services.
            </p>
            <p>
              Our total liability for any claim arising from or related to these
              Terms shall not exceed the amount paid by you, if any, for
              accessing the Website.
            </p>
          </LegalSection>

          <LegalSection title="7. Third-Party Links">
            <p>
              Our Website may contain links to third-party websites or services.
              We have no control over, and assume no responsibility for, the
              content, privacy policies, or practices of any third-party
              websites or services. You access third-party links at your own
              risk.
            </p>
          </LegalSection>

          <LegalSection title="8. Modifications">
            <p>
              We reserve the right to modify these Terms of Service at any time.
              Changes will be posted on this page with an updated &ldquo;Last
              updated&rdquo; date. Your continued use of the Website after any
              changes constitutes acceptance of the modified terms.
            </p>
          </LegalSection>

          <LegalSection title="9. Governing Law">
            <p>
              These Terms of Service are governed by and construed in accordance
              with the laws of the Netherlands. Any disputes arising from or
              relating to these terms shall be subject to the exclusive
              jurisdiction of the courts of the Netherlands.
            </p>
          </LegalSection>

          <LegalSection title="10. Contact">
            <p>
              If you have any questions about these Terms of Service, please
              contact us:
            </p>
            <div className="glass p-6 mt-4">
              <p className="text-text-primary font-semibold">Blynked B.V.</p>
              <p>The Netherlands</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:info@blynked.nl"
                  className="text-accent hover:text-accent-hover transition-colors"
                >
                  info@blynked.nl
                </a>
              </p>
            </div>
          </LegalSection>
        </div>
      </Container>
    </Section>
  );
}

function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-heading-sm text-text-primary mb-4">{title}</h2>
      <div className="space-y-4 text-body-sm text-text-secondary [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_strong]:text-text-primary [&_strong]:font-medium">
        {children}
      </div>
    </div>
  );
}
