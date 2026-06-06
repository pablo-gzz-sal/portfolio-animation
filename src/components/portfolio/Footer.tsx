import { useT } from "@/i18n";

export function Footer() {
  const t = useT();
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground font-display text-sm">
            PS
          </span>
          <span className="text-sm text-muted-foreground">{t.footer.tagline}</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a
            href="https://www.linkedin.com/in/pablo-gonzalez-salcido-bb1a491a9/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/pablo-gzz-sal"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:pablo.gzz.sal@gmail.com"
            className="hover:text-foreground transition-colors"
          >
            Email
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-5 sm:px-8 mt-8 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Pablo Salcido. {t.footer.rights}
      </div>
    </footer>
  );
}
