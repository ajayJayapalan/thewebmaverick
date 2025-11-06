export const metadata = {
  title: "Privacy Policy | The Web Maverick",
  description:
    "Privacy Policy for The Web Maverick – learn how we handle data, cookies, and advertising information.",
};

export default function PrivacyPolicy() {
  return (
    <main className="prose max-w-3xl mx-auto py-10 px-4">
      <h1>Privacy Policy</h1>
      <p>Last updated: {new Date().getFullYear()}</p>

      <p>
        The Web Maverick (“we”, “our”, “us”) provides free tools for designers
        and developers. This Privacy Policy explains how we handle information
        when you use our website: https://thewebmaverick.com.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        We do not collect personal information such as your name, email, or
        contact details.
      </p>
      <p>However, we may collect non-personal data including:</p>
      <ul>
        <li>Browser type and version</li>
        <li>Pages visited on our site</li>
        <li>Time spent on each page</li>
        <li>Anonymous usage analytics</li>
      </ul>

      <h2>2. Cookies & Tracking Technologies</h2>
      <p>
        We use cookies to improve website performance and provide analytics.
        Third-party services such as Google Analytics and Google AdSense may use
        cookies to serve personalized or non-personalized ads.
      </p>

      <h2>3. Google AdSense</h2>
      <p>
        We use Google AdSense to display advertisements. Google may use cookies
        such as the DoubleClick cookie to show relevant ads based on your
        browsing behavior. You can opt out of personalized advertising by
        visiting:
      </p>
      <p>
        <a
          href="https://www.google.com/settings/ads"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.google.com/settings/ads
        </a>
      </p>

      <h2>4. Google Analytics</h2>
      <p>
        We use Google Analytics to understand how users interact with our site.
        Google Analytics collects anonymous usage data using cookies.
      </p>

      <h2>5. Third-Party Links</h2>
      <p>
        Our site may contain links to external websites. We are not responsible
        for the privacy practices of those third-party sites.
      </p>

      <h2>6. Children’s Privacy</h2>
      <p>
        Our website is not intended for children under the age of 13. We do not
        knowingly collect any information from children.
      </p>

      <h2>7. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy periodically. Any changes will be
        posted on this page.
      </p>

      <h2>8. Contact Us</h2>
      <p>
        If you have any questions, you can reach us at:
        <br />
        <strong>ajayjayapalan.dev@gmail.com</strong>
      </p>
    </main>
  );
}
