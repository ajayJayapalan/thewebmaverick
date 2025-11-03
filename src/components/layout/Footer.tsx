import { Github, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-foreground/10 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-foreground/60">
              © 2025 The CSS Maverick — Built for Designers & Developers
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="mailto:contact@cssmaverick.com"
              className="text-foreground/60 hover:text-foreground transition-colors"
              aria-label="Contact"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Footer links */}
          <div className="flex items-center gap-6">
            <a
              href="#privacy"
              className="text-foreground/60 hover:text-foreground transition-colors text-sm"
            >
              Privacy
            </a>
            <a
              href="#contact"
              className="text-foreground/60 hover:text-foreground transition-colors text-sm"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
