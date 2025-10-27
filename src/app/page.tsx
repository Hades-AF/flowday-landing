"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// --- Utility components ---
function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
  );
}

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-8 text-center">
      {eyebrow && (
        <p className="mx-auto mb-2 inline-block rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium tracking-wide text-zinc-700 ring-1 ring-inset ring-zinc-200 dark:bg-zinc-900/60 dark:text-zinc-300 dark:ring-zinc-800">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}

function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 dark:bg-white dark:text-zinc-900 dark:border-zinc-800"
    >
      {children}
    </Link>
  );
}

function GhostButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-zinc-50 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 dark:bg-zinc-900 dark:text-white dark:border-zinc-800 dark:hover:bg-zinc-800"
    >
      {children}
    </Link>
  );
}

// --- Hero ---
function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <Container>
        <div className="flex flex-col items-center pt-16 pb-12 sm:pt-24 sm:pb-16">
          <h1 className="text-center text-4xl font-black tracking-tight sm:text-6xl">
            Buy Back Your Time,
            <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 bg-clip-text text-transparent"> Optimize Life</span>
          </h1>
          <p className="mt-5 max-w-2xl text-center text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            Creating an AI powered solution to give you time back for the things that really matter.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <PrimaryButton href="#waitlist">Join the Waitlist</PrimaryButton>
            <GhostButton href="#community">Join Community</GhostButton>
            <GhostButton href="#feedback">Give Feedback</GhostButton>
          </div>

          {/* Button Carousel (auto-rotating highlight) */}
          <CarouselButtons />
        </div>
      </Container>

      {/* background accents */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[35rem] bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent blur-2xl dark:from-indigo-400/10" />
    </section>
  );
}

function CarouselButtons() {
  const items = [
    { label: "Feedback / Suggestions", href: "#feedback" },
    { label: "Community", href: "#community" },
    { label: "Waitlist", href: "#waitlist" },
  ];
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % items.length), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="mt-8 w-full">
      <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex w-full">
          {items.map((it, i) => (
            <Link
              key={it.label}
              href={it.href}
              className={`flex-1 p-4 text-center text-sm font-semibold transition-colors ${
                i === active
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                  : "text-zinc-700 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-800"
              }`}
            >
              {it.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- Update Roadmap ---
function Roadmap() {
  const rows = [
    {
      version: "v0.1",
      goLive: "Early Access",
      features: ["Landing + Waitlist", "Feedback intake", "Discord community"],
    },
    {
      version: "v0.2",
      goLive: "Private Beta",
      features: ["Auth & profiles", "Task ingestion (calendar/email)", "Time-saved dashboard"],
    },
    {
      version: "v0.3",
      goLive: "Public Beta",
      features: ["Automations", "Smart recommendations", "Mobile-friendly UI"],
    },
  ];

  return (
    <section id="roadmap" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="What we\'re building"
          subtitle="Track our progress from Early Access to a polished public release."
        />

        <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="grid grid-cols-12 bg-zinc-50/60 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:bg-zinc-900/60 dark:text-zinc-400">
            <div className="col-span-3 sm:col-span-2">Version</div>
            <div className="col-span-3 sm:col-span-3">Early Access Go Live</div>
            <div className="col-span-6 sm:col-span-7">New Features</div>
          </div>

          <ul className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {rows.map((r) => (
              <li key={r.version} className="grid grid-cols-12 items-start px-4 py-4 text-sm">
                <div className="col-span-3 sm:col-span-2 font-semibold">{r.version}</div>
                <div className="col-span-3 sm:col-span-3 text-zinc-700 dark:text-zinc-300">{r.goLive}</div>
                <div className="col-span-12 mt-2 text-zinc-600 dark:text-zinc-400 sm:col-span-7 sm:mt-0">
                  <ul className="list-disc pl-5">
                    {r.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

// --- FAQ ---
function FAQ() {
  const faqs = [
    {
      q: "What is Flowday?",
      a: "An AI-powered assistant that helps you automate routines, prioritize work, and reclaim time for what matters.",
    },
    {
      q: "When can I try it?",
      a: "Join the waitlist to get access during Early Access and help shape the roadmap.",
    },
    {
      q: "How do I share feedback?",
      a: "Head to the Feedback section or post in the Discord community—both are actively monitored.",
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="Frequently asked questions"
          subtitle="If you can\'t find your question/answer please reach out in the Discord community."
        />

        <div className="mx-auto max-w-3xl divide-y divide-zinc-200 rounded-2xl border border-zinc-200 bg-white shadow-sm dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-900">
          {faqs.map((f) => (
            <details key={f.q} className="group p-6 open:bg-zinc-50/60 dark:open:bg-zinc-900/60">
              <summary className="cursor-pointer block text-left text-base font-semibold [&::-webkit-details-marker]:hidden">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-900 dark:text-zinc-100">{f.q}</span>
                  <span className="ml-3 select-none rounded-full border border-zinc-200 px-2 py-0.5 text-xs text-zinc-600 transition group-open:rotate-180 dark:border-zinc-800 dark:text-zinc-300">
                    ▼
                  </span>
                </div>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{f.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-6 text-center text-sm text-zinc-600 dark:text-zinc-400">
          Can&apos;t find it? Join the <Link href="#community" className="underline underline-offset-4">Discord community</Link>.
        </div>
      </Container>
    </section>
  );
}

// --- Footer ---
function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-10 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p>© {new Date().getFullYear()} Flowday. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <GhostButton href="#feedback">Feedback</GhostButton>
            <GhostButton href="#community">Discord</GhostButton>
            <PrimaryButton href="#waitlist">Waitlist</PrimaryButton>
          </div>
        </div>
      </Container>
    </footer>
  );
}

// --- Sections for anchors ---
function Anchors() {
  return (
    <>
      <section id="feedback" className="scroll-mt-24 py-16 sm:py-24">
        <Container>
          <SectionHeading title="Feedback & Suggestions" subtitle="Tell us what would save you the most time. We prioritize based on real workflows." />
          <div className="mx-auto max-w-3xl rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Drop ideas in Discord or email us: <a className="underline underline-offset-4" href="mailto:team@flowday.app">team@flowday.app</a></p>
          </div>
        </Container>
      </section>

      <section id="community" className="scroll-mt-24 py-16 sm:py-24">
        <Container>
          <SectionHeading title="Community" subtitle="Builders, power users, and curious minds. Come hang out." />
          <div className="mx-auto max-w-3xl rounded-2xl border border-zinc-200 bg-white p-6 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <PrimaryButton href="https://discord.gg/placeholder">Join Discord</PrimaryButton>
          </div>
        </Container>
      </section>

      <section id="waitlist" className="scroll-mt-24 py-16 sm:py-24">
        <Container>
          <SectionHeading title="Waitlist" subtitle="Get early access invites, release notes, and perks." />
          <div className="mx-auto max-w-3xl rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <form className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="flex-1 rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none ring-zinc-500 placeholder:text-zinc-400 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-950"
              />
              <button
                type="submit"
                className="rounded-xl border border-zinc-200 bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 dark:border-zinc-800 dark:bg-white dark:text-zinc-900"
              >
                Request Access
              </button>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Roadmap />
      <FAQ />
      <Anchors />
      <Footer />
    </main>
  );
}
