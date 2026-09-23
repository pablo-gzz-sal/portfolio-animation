import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { useT } from "@/i18n";
import { sfx } from "@/lib/sound";
import { cn } from "@/lib/utils";
import meImg from "@/assets/images/me.jpeg";

/**
 * Contact as a sentence you complete (The Digital Panda's footer form):
 * "Hi Pablo, my name is ___ and I'm reaching out from ___. I need help
 * with [chips]. You can reach me at ___. A bit more about it: ___".
 *
 * Every blank is a real, labelled input, so it's still an ordinary form to
 * assistive tech. The payload is unchanged — name / email / company /
 * message — with the chosen topics prefixed onto the message, so the API
 * route and its zod schema stay as they are.
 */
export function Contact() {
  const t = useT();
  const s = t.ui.sentence;
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [topics, setTopics] = useState<string[]>([]);

  const toggle = (topic: string) => {
    sfx.click();
    setTopics((cur) => (cur.includes(topic) ? cur.filter((x) => x !== topic) : [...cur, topic]));
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const details = String(new FormData(form).get("message") || "").trim();
    const message = [topics.length ? `[${s.topicsLabel}: ${topics.join(", ")}]` : "", details]
      .filter(Boolean)
      .join("\n\n");
    const payload = {
      name: name.trim(),
      email: email.trim(),
      company: company.trim() || undefined,
      message,
    };
    if (!payload.name || !payload.email || !details) {
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
      setName("");
      setCompany("");
      setEmail("");
      setTopics([]);
    } catch (err) {
      const message = err instanceof Error ? err.message : t.contact.errors.generic;
      toast.error(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" data-nav="contact" className="relative scroll-mt-24 py-28 sm:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, color-mix(in oklab, var(--primary) 12%, transparent) 0%, transparent 60%)",
        }}
      />
      <div className="shell relative">
        <SectionHeader
          index="04"
          eyebrow={t.contact.eyebrow}
          title={
            <>
              {t.contact.title1} <span className="text-primary-glow">{t.contact.titleEm}</span>
            </>
          }
          description={t.contact.description}
        />

        <Reveal className="mt-16 lg:ml-[240px] sm:mt-20">
          <form onSubmit={onSubmit} className="font-display text-[clamp(1.6rem,3.2vw,3rem)] leading-[1.45] tracking-[-0.03em] text-foreground/60">
            {s.hi}{" "}
            <Blank name="name" label={t.contact.fields.name} value={name} onChange={setName} placeholder={s.name} required autoComplete="name" />{" "}
            {s.from}{" "}
            <Blank name="company" label={t.contact.fields.company} value={company} onChange={setCompany} placeholder={s.company} autoComplete="organization" />
            {s.need}{" "}
            <span className="inline-flex flex-wrap gap-2 align-middle" role="group" aria-label={s.topicsLabel}>
              {s.topics.map((topic) => {
                const on = topics.includes(topic);
                return (
                  <button
                    key={topic}
                    type="button"
                    aria-pressed={on}
                    onClick={() => toggle(topic)}
                    onMouseEnter={sfx.hover}
                    className={cn(
                      "press rounded-full border px-4 py-1.5 font-sans text-sm tracking-normal transition-colors duration-300 sm:text-base",
                      on
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-hair-2 text-foreground/80 hover:border-foreground/50 hover:text-foreground",
                    )}
                  >
                    {topic}
                  </button>
                );
              })}
            </span>
            {s.reach}{" "}
            <Blank name="email" label={t.contact.fields.email} value={email} onChange={setEmail} placeholder={s.email} type="email" required autoComplete="email" />
            {s.more}
            <label className="mt-6 block">
              <span className="sr-only">{t.contact.fields.project}</span>
              <textarea
                name="message"
                required
                rows={3}
                maxLength={5000}
                placeholder={s.messagePh}
                className="w-full resize-none border-b border-hair-2 bg-transparent py-3 font-sans text-lg leading-relaxed tracking-normal text-foreground placeholder:text-ink-faint focus:border-primary-glow focus:outline-none sm:text-xl"
              />
            </label>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <button
                type="submit"
                disabled={loading}
                onMouseEnter={sfx.hover}
                className="pill pill-solid press tracking-[0.12em] disabled:opacity-60"
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
              <p className="font-sans text-sm tracking-normal text-muted-foreground">{t.contact.reply}</p>
            </div>
          </form>
        </Reveal>

        {/* who you're writing to */}
        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-hair bg-hair sm:mt-28 lg:ml-[240px] lg:grid-cols-[240px_1fr]">
          <Reveal className="bg-background">
            <div className="relative aspect-[4/5] h-full overflow-hidden lg:aspect-auto">
              <img
                src={meImg}
                alt="Pablo Salcido"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-top grayscale-[35%]"
              />
              <div
                aria-hidden
                className="absolute inset-0 mix-blend-soft-light"
                style={{
                  background:
                    "linear-gradient(165deg, color-mix(in oklab, var(--primary) 55%, transparent), transparent 55%)",
                }}
              />
            </div>
          </Reveal>
          <Reveal delay={90} className="bg-background">
            <div className="flex h-full flex-col justify-between gap-10 p-7 sm:p-9">
              <div>
                <p className="font-mono-eyebrow text-ink-faint">{t.hero.currentSignal}</p>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-foreground/90">{t.hero.currentSignalBody}</p>
              </div>
              <div className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-[0.14em]">
                <a href="mailto:pablo.gzz.sal@gmail.com" className="nav-link text-foreground">
                  pablo.gzz.sal@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/pablo-gonzalez-salcido-bb1a491a9/" target="_blank" rel="noreferrer" className="nav-link text-ink-dim hover:text-foreground">
                  LinkedIn ↗
                </a>
                <a href="https://github.com/pablo-gzz-sal" target="_blank" rel="noreferrer" className="nav-link text-ink-dim hover:text-foreground">
                  GitHub ↗
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** An inline blank: underline input that grows with what's typed. */
function Blank({
  name,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
  autoComplete,
}: {
  name: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  const ch = Math.max(placeholder.length, value.length) + 1;
  return (
    <label className="inline-block align-baseline">
      <span className="sr-only">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        required={required}
        autoComplete={autoComplete}
        maxLength={320}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        style={{ width: `min(${ch}ch, 80vw)` }}
        className="border-b border-hair-2 bg-transparent px-1 text-foreground placeholder:text-ink-faint/70 transition-colors focus:border-primary-glow focus:outline-none"
      />
    </label>
  );
}
