import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  heroFacts,
  principles,
  profile,
  projects,
  socials,
  type Project,
} from "@/data/portfolio";
import { getCurrentYear } from "@/lib/site";

function ArrowRight() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1"
    >
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}

/** The finished, flagship piece — given the full width of the section. */
function FeaturedProject({ project, index }: { project: Project; index: number }) {
  return (
    <article className="mt-16 grid gap-12 border border-white/10 bg-ink-raised p-8 shadow-[0_8px_30px_rgb(255,255,255,0.04)] transition-[border-color,background-color] duration-500 hover:border-white/20 hover:bg-ink-hover sm:p-12 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <div className="flex flex-wrap items-center gap-4">
          <span className="font-display text-[11px] tracking-[0.22em] text-paper/30">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span aria-hidden="true" className="h-px w-8 bg-white/15" />
          <span className="text-[11px] uppercase tracking-[0.18em] text-paper/40">
            {project.category}
          </span>
          <span className="text-[11px] tracking-[0.14em] text-paper/40">
            {project.year}
          </span>
        </div>

        <h3 className="mt-10 font-display text-[clamp(2.25rem,5vw,3.75rem)] font-medium leading-[0.95] tracking-[-0.045em] text-paper">
          {project.title}
        </h3>
        <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-paper/55">
          {project.summary}
        </p>
      </div>

      <div className="lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-12">
        <p className="text-[10px] uppercase tracking-[0.2em] text-paper/35">
          Built with
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tool) => (
            <li
              key={tool}
              className="rounded-full border border-white/10 px-3 py-1 text-[11px] tracking-[-0.01em] text-paper/50"
            >
              {tool}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 text-[13px] tracking-[-0.01em] text-ink transition-colors duration-300 hover:bg-white"
            >
              {link.label}
              <ArrowRight />
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}

/** Work still in progress — deliberately quieter than the shipped piece. */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="flex flex-col justify-between border border-white/10 bg-ink-raised p-8 shadow-[0_8px_30px_rgb(255,255,255,0.04)] transition-[border-color,background-color,transform] duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-ink-hover">
      <div>
        <div className="flex items-start justify-between gap-4">
          <span className="font-display text-[11px] tracking-[0.22em] text-paper/30">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-paper/40">
            In progress
          </span>
        </div>

        <h3 className="mt-20 font-display text-[2rem] leading-none tracking-[-0.035em] text-paper">
          {project.title}
        </h3>
        <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-paper/40">
          {project.category}
        </p>
        <p className="mt-7 text-sm leading-relaxed text-paper/55">{project.summary}</p>
      </div>

      <div className="mt-12">
        <ul className="flex flex-wrap gap-2">
          {project.stack.map((tool) => (
            <li
              key={tool}
              className="rounded-full border border-white/10 px-3 py-1 text-[11px] tracking-[-0.01em] text-paper/50"
            >
              {tool}
            </li>
          ))}
        </ul>
        <p className="mt-9 text-[13px] tracking-[-0.01em] text-paper/30">
          Currently building — check back soon.
        </p>
      </div>
    </article>
  );
}

export default async function Home() {
  const year = await getCurrentYear();
  const [featured, ...inProgress] = projects;

  return (
    <>
      <Navbar />

      <main>
        {/* ---------------------------------------------------------------- HERO */}
        <section className="relative isolate flex min-h-screen flex-col overflow-hidden">
          {/* Future 3D canvas mount point. */}
          <div className="w-full h-screen absolute inset-0 -z-10" aria-hidden="true">
            <div className="absolute left-1/2 top-1/3 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.04] blur-[120px]" />
            <div className="absolute inset-8 border border-white/5" />
            <span className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-paper/20">
              3D canvas mount point
            </span>
          </div>

          <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-end px-6 pb-24 pt-32 sm:px-8">
            <div className="grid gap-14 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-paper/45">
                  <span className="h-1.5 w-1.5 rounded-full bg-paper" />
                  {profile.availability}
                </p>

                <h1 className="mt-10 font-display font-medium leading-[0.82] tracking-[-0.055em]">
                  <span className="block text-[clamp(4rem,15vw,14rem)] text-paper">
                    {profile.name}
                  </span>
                  <span className="mt-5 block text-[clamp(1.375rem,3.6vw,3.25rem)] font-normal leading-[1.05] tracking-[-0.03em] text-paper/25">
                    {profile.role}
                  </span>
                </h1>
              </div>

              <div className="lg:col-span-5 lg:pb-4">
                <p className="max-w-md text-[15px] leading-relaxed text-paper/60">
                  {profile.tagline}
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link
                    href="#work"
                    className="group inline-flex items-center gap-2 rounded-full bg-paper px-7 py-3 text-[13px] tracking-[-0.01em] text-ink transition-colors duration-300 hover:bg-white"
                  >
                    View selected work
                    <ArrowRight />
                  </Link>
                  <Link
                    href="#contact"
                    className="inline-flex items-center rounded-full border border-white/15 px-7 py-3 text-[13px] tracking-[-0.01em] text-paper transition-colors duration-300 hover:border-white/30 hover:bg-white/[0.03]"
                  >
                    Get in touch
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Hero status strip */}
          <div className="border-t border-white/10">
            <dl className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 px-6 py-8 sm:px-8 md:grid-cols-3">
              {heroFacts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-paper/35">
                    {fact.label}
                  </dt>
                  <dd className="mt-2 text-sm tracking-[-0.01em] text-paper/80">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ------------------------------------------------------------- PROJECTS */}
        <section id="work" className="scroll-mt-24 py-32">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
            <div className="flex flex-col gap-10 border-b border-white/10 pb-14 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-paper/40">
                  01 — Selected work
                </p>
                <h2 className="mt-7 font-display text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[0.92] tracking-[-0.045em] text-paper">
                  Projects
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-paper/45">
                One project shipped, two in progress. This is the current state of
                the work, not a highlight reel.
              </p>
            </div>

            {featured ? (
              <FeaturedProject project={featured} index={0} />
            ) : null}

            {inProgress.length > 0 ? (
              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                {inProgress.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index + 1}
                  />
                ))}
              </div>
            ) : null}
          </div>
        </section>

        {/* ---------------------------------------------------------------- ABOUT */}
        <section id="about" className="scroll-mt-24 py-32">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
            <p className="text-[11px] uppercase tracking-[0.22em] text-paper/40">
              02 — About
            </p>

            <div className="mt-12 grid gap-16 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <h2 className="font-display text-[clamp(2.25rem,5vw,4.25rem)] font-medium leading-[0.95] tracking-[-0.04em] text-paper">
                  Still learning.
                  <br />
                  <span className="text-paper/25">Already shipping.</span>
                </h2>
                <p className="mt-10 max-w-lg text-[15px] leading-relaxed text-paper/55">
                  I&apos;m a BSc Data Science student at Atharva University in
                  Ahmedabad. Most of what I know about programming I learned by
                  building things I wanted to use — starting with Python notebooks,
                  then a blood availability web app that people in my own family
                  could actually open.
                </p>
                <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-paper/55">
                  I&apos;m early in this, and that&apos;s the point. What&apos;s on
                  this page is the honest current state — a portfolio that grows as
                  the work does.
                </p>
              </div>

              <ul className="lg:col-span-6">
                {principles.map((principle) => (
                  <li
                    key={principle.title}
                    className="border-t border-white/10 py-8 last:border-b last:border-white/10"
                  >
                    <h3 className="font-display text-lg tracking-[-0.02em] text-paper">
                      {principle.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-paper/45">
                      {principle.body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------------- CONTACT */}
        <section id="contact" className="scroll-mt-24 py-32">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
            <p className="text-[11px] uppercase tracking-[0.22em] text-paper/40">
              03 — Contact
            </p>

            <h2 className="mt-12 max-w-4xl font-display text-[clamp(2.5rem,7vw,6rem)] font-medium leading-[0.92] tracking-[-0.045em] text-paper">
              Let&apos;s build
              <br />
              something useful.
            </h2>

            <Link
              href="https://github.com/abdullahbirajdar3-wq"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-16 inline-flex items-center gap-3 border-b border-white/15 pb-3 text-[clamp(1.125rem,2.6vw,1.75rem)] tracking-[-0.03em] text-paper transition-colors duration-300 hover:border-white/40"
            >
              github.com/abdullahbirajdar3-wq
              <ArrowRight />
            </Link>

            <p className="mt-8 max-w-md text-sm leading-relaxed text-paper/40">
              GitHub is the fastest way to reach me — open an issue, send a
              message, or point me at something worth building.
            </p>
          </div>
        </section>
      </main>

      {/* ---------------------------------------------------------------- FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-6 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p className="text-[13px] text-paper/40">
            © {year} {profile.name}. All rights reserved.
          </p>

          <ul className="flex items-center gap-8">
            {socials.map((social) => (
              <li key={social.label}>
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-paper/40 transition-colors duration-300 hover:text-paper"
                >
                  {social.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
}
