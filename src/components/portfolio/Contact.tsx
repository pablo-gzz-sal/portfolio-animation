import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { ArrowUpRight, Mail, Linkedin, Github, Loader2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { useT } from "@/i18n";
import meImg from "@/assets/images/me.jpeg";

export function Contact() {
  const t = useT();
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      company: String(data.get("company") || "").trim() || undefined,
      message: String(data.get("message") || "").trim(),
    };
    if (!payload.name || !payload.email || !payload.message) {
      toast.error(t.contact.errors.required);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/public/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error || `Request failed (${res.status})`);
      }
      toast.success(t.contact.success);
      form.reset();
    } catch (err) {
      const message = err instanceof Error ? err.message : t.contact.errors.generic;
      toast.error(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 scroll-mt-24"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, color-mix(in oklab, var(--primary) 14%, transparent) 0%, transparent 60%)",
      }}
    >
      <div className="shell">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20">
          <Reveal>
            <p className="font-mono-eyebrow text-muted-foreground">{t.contact.eyebrow}</p>
            <h2 className="font-display mt-4 text-4xl sm:text-5xl text-foreground leading-[1.05]">
              {t.contact.title1} <span className="text-primary-glow">{t.contact.titleEm}</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-md">
              {t.contact.description}
            </p>

            <ul className="mt-8 space-y-3">
              <li>
                <a
                  href="mailto:pablo.gzz.sal@gmail.com"
                  className="inline-flex items-center gap-3 text-foreground hover:text-primary-glow transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  pablo.gzz.sal@gmail.com
                  <ArrowUpRight className="h-4 w-4 opacity-70" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/pablo-gonzalez-salcido-bb1a491a9/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 text-foreground hover:text-primary-glow transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                  <ArrowUpRight className="h-4 w-4 opacity-70" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/pablo-gzz-sal"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 text-foreground hover:text-primary-glow transition-colors"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                  <ArrowUpRight className="h-4 w-4 opacity-70" />
                </a>
              </li>
            </ul>

            {/* Portrait relocated from the hero — a face lands better at the
                point of contact than beside the headline. */}
            <div className="mt-10 grid gap-5 sm:grid-cols-[minmax(0,200px)_1fr] sm:items-end">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-hair">
                <img
                  src={meImg}
                  alt="Pablo Salcido"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
                {/* teal duotone wash so the portrait sits inside the palette */}
                <div
                  aria-hidden
                  className="absolute inset-0 mix-blend-soft-light"
                  style={{
                    background:
                      "linear-gradient(165deg, color-mix(in oklab, var(--primary) 55%, transparent), transparent 55%)",
                  }}
                />
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-1/3"
                  style={{
                    background:
                      "linear-gradient(to top, color-mix(in oklab, var(--background) 55%, transparent), transparent)",
                  }}
                />
              </div>

              <div className="rounded-2xl border border-hair bg-card/60 p-5 backdrop-blur-sm">
                <p className="font-mono-eyebrow text-ink-faint">{t.hero.currentSignal}</p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/90">
                  {t.hero.currentSignalBody}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-hair bg-card/50 backdrop-blur-sm p-6 sm:p-8"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field
                  label={t.contact.fields.name}
                  name="name"
                  required
                  placeholder={t.contact.fields.namePh}
                />
                <Field
                  label={t.contact.fields.email}
                  name="email"
                  type="email"
                  required
                  placeholder={t.contact.fields.emailPh}
                />
              </div>
              <div className="mt-5">
                <Field
                  label={t.contact.fields.company}
                  name="company"
                  placeholder={t.contact.fields.companyPh}
                />
              </div>
              <div className="mt-5">
                <label className="block">
                  <span className="font-mono-eyebrow text-muted-foreground">
                    {t.contact.fields.project}
                  </span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    maxLength={5000}
                    placeholder={t.contact.fields.projectPh}
                    className="mt-2 w-full rounded-lg border border-hair bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
                  />
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="pill pill-solid press mt-7 justify-center disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    {t.contact.sending}
                  </>
                ) : (
                  <>
                    {t.contact.send}
                    <ArrowUpRight className="h-4 w-4" />
                  </>
                )}
              </button>
              <p className="mt-3 text-xs text-muted-foreground">{t.contact.reply}</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="font-mono-eyebrow text-muted-foreground">{label}</span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        maxLength={320}
        className="mt-2 w-full rounded-lg border border-hair bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
      />
    </label>
  );
}
