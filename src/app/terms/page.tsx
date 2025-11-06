export const metadata = {
  title: "Terms of Service | The Web Maverick",
  description:
    "Terms of Service for using The Web Maverick free CSS and web tools.",
};

export default function TermsPage() {
  return (
    <main className="prose max-w-3xl mx-auto py-10 px-4">
      <h1>Terms of Service</h1>
      <p>Last updated: {new Date().getFullYear()}</p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using The Web Maverick (https://thewebmaverick.com), you
        agree to be bound by these Terms of Service.
      </p>

      <h2>2. Use of Our Tools</h2>
      <p>
        All tools provided on our website are free to use. You may use the
        generated code, colors, and assets in personal or commercial projects.
      </p>

      <h2>3. No Warranties</h2>
      <p>
        The tools are provided “as is” without any warranties, express or
        implied. We do not guarantee accuracy, performance, or availability.
      </p>

      <h2>4. Limitation of Liability</h2>
      <p>
        We are not liable for any direct, indirect, or incidental damages
        resulting from the use of our tools or website.
      </p>

      <h2>5. Third-Party Services</h2>
      <p>
        Our site uses Google Analytics and Google AdSense. Your interactions
        with these services are governed by their respective policies.
      </p>

      <h2>6. Prohibited Activities</h2>
      <ul>
        <li>Using our site for illegal or harmful activities</li>
        <li>Attempting to hack, damage, or disrupt our services</li>
        <li>Scraping or replicating our tools without permission</li>
      </ul>

      <h2>7. Changes to These Terms</h2>
      <p>
        We may modify these Terms at any time. Continued use of the website
        after changes indicates acceptance.
      </p>

      <h2>8. Contact</h2>
      <p>
        For questions regarding these Terms, please contact:
        <br />
        <strong>ajayjayapalan.dev@gmail.com</strong>
      </p>
    </main>
  );
}
