import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Blynked's Privacy Policy. How we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <Section>
      <Container className="max-w-3xl">
        <h1 className="text-display-lg text-text-primary mb-4">
          Privacy Policy
        </h1>
        <p className="text-caption text-text-tertiary mb-12">
          Last updated: February 2026
        </p>

        <div className="space-y-10">
          <LegalSection title="1. Introduction">
            <p>
              Blynked B.V. (&ldquo;Blynked,&rdquo; &ldquo;we,&rdquo;
              &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to
              protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website blynked.io and use our services.
            </p>
            <p>
              We are based in the Netherlands and comply with the General Data
              Protection Regulation (GDPR) and applicable Dutch data protection
              laws.
            </p>
          </LegalSection>

          <LegalSection title="2. Information We Collect">
            <p>We may collect the following types of information:</p>
            <ul>
              <li>
                <strong>Contact information:</strong> Name, email address, phone
                number, and company name when you fill out a contact form or
                book a call.
              </li>
              <li>
                <strong>Usage data:</strong> Information about how you interact
                with our website, including pages visited, time spent, and
                referral sources.
              </li>
              <li>
                <strong>Technical data:</strong> IP address, browser type,
                device information, and operating system.
              </li>
              <li>
                <strong>Communication data:</strong> Records of correspondence
                when you contact us via email or other channels.
              </li>
            </ul>
          </LegalSection>

          <LegalSection title="3. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Respond to your inquiries and schedule consultations</li>
              <li>
                Send you relevant communications about our services (with your
                consent)
              </li>
              <li>Analyze website usage to improve user experience</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p>
              We process your data based on legitimate business interests,
              contractual necessity, or your explicit consent, in accordance
              with GDPR Article 6.
            </p>
          </LegalSection>

          <LegalSection title="4. Cookies">
            <p>
              Our website uses cookies and similar technologies to enhance your
              browsing experience. These include:
            </p>
            <ul>
              <li>
                <strong>Essential cookies:</strong> Required for the website to
                function properly.
              </li>
              <li>
                <strong>Analytics cookies:</strong> Help us understand how
                visitors interact with our website.
              </li>
              <li>
                <strong>Functional cookies:</strong> Remember your preferences
                and settings.
              </li>
            </ul>
            <p>
              You can manage your cookie preferences through your browser
              settings. Disabling certain cookies may affect website
              functionality.
            </p>
          </LegalSection>

          <LegalSection title="5. Data Sharing">
            <p>
              We do not sell your personal information. We may share data with:
            </p>
            <ul>
              <li>
                <strong>Service providers:</strong> Third-party tools that help
                us operate our website and deliver services (e.g., hosting,
                analytics, scheduling).
              </li>
              <li>
                <strong>Legal requirements:</strong> When required by law or to
                protect our rights and safety.
              </li>
            </ul>
            <p>
              All service providers are contractually obligated to handle your
              data in compliance with GDPR.
            </p>
          </LegalSection>

          <LegalSection title="6. Your Rights">
            <p>
              Under the GDPR, you have the following rights regarding your
              personal data:
            </p>
            <ul>
              <li>
                <strong>Access:</strong> Request a copy of the personal data we
                hold about you.
              </li>
              <li>
                <strong>Rectification:</strong> Request correction of inaccurate
                data.
              </li>
              <li>
                <strong>Erasure:</strong> Request deletion of your personal data
                (&ldquo;right to be forgotten&rdquo;).
              </li>
              <li>
                <strong>Restriction:</strong> Request restriction of processing
                in certain circumstances.
              </li>
              <li>
                <strong>Portability:</strong> Receive your data in a structured,
                machine-readable format.
              </li>
              <li>
                <strong>Objection:</strong> Object to processing based on
                legitimate interests.
              </li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{" "}
              <a
                href="mailto:privacy@blynked.nl"
                className="text-accent hover:text-accent-hover transition-colors"
              >
                privacy@blynked.nl
              </a>
              .
            </p>
          </LegalSection>

          <LegalSection title="7. Data Retention">
            <p>
              We retain your personal data only for as long as necessary to
              fulfil the purposes outlined in this policy, or as required by
              law. When data is no longer needed, we securely delete or
              anonymize it.
            </p>
          </LegalSection>

          <LegalSection title="8. Data Security">
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal data against unauthorized access, alteration,
              disclosure, or destruction. However, no method of transmission
              over the Internet is 100% secure.
            </p>
          </LegalSection>

          <LegalSection title="9. Contact">
            <p>
              If you have questions about this Privacy Policy or wish to
              exercise your rights, contact us at:
            </p>
            <div className="glass p-6 mt-4">
              <p className="text-text-primary font-semibold">Blynked B.V.</p>
              <p>The Netherlands</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:privacy@blynked.nl"
                  className="text-accent hover:text-accent-hover transition-colors"
                >
                  privacy@blynked.nl
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
