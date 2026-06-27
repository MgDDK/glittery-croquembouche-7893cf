import { createFileRoute, Link } from '@tanstack/react-router'
import { allBlogs, allProjects } from 'content-collections'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Calendar,
  Mail,
  PenLine,
  Sparkles,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: PortfolioHome,
})

const metrics = [
  ['8+', 'launches shipped'],
  ['14', 'systems clarified'],
  ['3', 'product domains'],
]

const focusAreas = [
  'Frontend systems',
  'Content architecture',
  'Accessible interfaces',
  'Netlify delivery',
]

function PortfolioHome() {
  const posts = [...allBlogs]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)
  const projects = allProjects.slice(0, 2)

  return (
    <main className="min-h-screen overflow-hidden bg-stone-50 text-zinc-950">
      <section className="relative min-h-[88vh] px-5 py-6 sm:px-8 lg:px-12">
        <div className="absolute inset-0 -z-10 portfolio-grid" />
        <nav className="mx-auto flex max-w-7xl items-center justify-between border-b border-zinc-950/10 pb-5">
          <Link to="/" className="font-serif text-2xl tracking-tight">
            Avery Stone
          </Link>
          <div className="flex items-center gap-2 text-sm">
            <Link className="nav-link" to="/projects">
              Projects
            </Link>
            <Link className="nav-link" to="/resume">
              Resume
            </Link>
            <Link className="nav-link hidden sm:inline-flex" to="/contact">
              Contact
            </Link>
          </div>
        </nav>

        <div className="mx-auto grid max-w-7xl gap-12 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:pt-24">
          <div className="space-y-9">
            <div className="inline-flex items-center gap-2 border border-zinc-950/15 bg-white/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-700 shadow-sm">
              <Sparkles size={14} />
              Independent product engineer
            </div>
            <div className="max-w-4xl space-y-6">
              <h1 className="font-serif text-6xl leading-[0.92] tracking-tight text-zinc-950 sm:text-7xl lg:text-8xl">
                Useful software with an editorial eye.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-zinc-700 sm:text-xl">
                I design and build fast web experiences for teams that need
                clear product thinking, durable frontend systems, and launches
                that survive real traffic.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/projects" className="button-primary">
                View work
                <ArrowUpRight size={18} />
              </Link>
              <Link to="/contact" className="button-secondary">
                Start a conversation
                <Mail size={18} />
              </Link>
            </div>
          </div>

          <aside className="relative">
            <div className="portfolio-panel rotate-1">
              <img
                src="/headshot-on-white.jpg"
                alt="Avery Stone portrait"
                className="h-72 w-full object-cover grayscale sm:h-96"
              />
              <div className="grid grid-cols-3 border-t border-zinc-950/10">
                {metrics.map(([value, label]) => (
                  <div key={label} className="p-4">
                    <p className="font-serif text-3xl">{value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-zinc-500">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-8 -left-4 hidden max-w-xs -rotate-3 border border-zinc-950 bg-amber-200 p-5 shadow-xl md:block">
              <p className="text-sm font-medium leading-6">
                Currently available for portfolio reviews, design system
                audits, and product rebuilds.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-zinc-950 bg-zinc-950 px-5 py-5 text-stone-50">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3">
          {focusAreas.map((area) => (
            <span key={area} className="marquee-pill">
              {area}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
        <div>
          <p className="section-kicker">Selected work</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
            Projects shaped for messy, real-world constraints.
          </h2>
          <Link to="/projects" className="mt-8 inline-flex items-center gap-2 font-semibold">
            See all projects
            <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="grid gap-5">
          {projects.map((project) => (
            <article key={project._meta.path} className="work-card">
              <div>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-serif text-3xl">{project.title}</h3>
                <p className="mt-3 max-w-2xl leading-7 text-zinc-600">
                  {project.description}
                </p>
              </div>
              <ArrowUpRight className="shrink-0" size={24} />
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="section-kicker">Writing</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
              Notes on making digital products easier to operate.
            </h2>
          </div>
          <div className="divide-y divide-zinc-950/10 border-y border-zinc-950/10">
            {posts.map((post) => (
              <Link
                key={post._meta.path}
                to="/blog/$slug"
                params={{ slug: post._meta.path }}
                className="group flex items-start gap-5 py-6"
              >
                <PenLine className="mt-1 shrink-0 text-emerald-700" size={20} />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold group-hover:underline">
                    {post.title}
                  </h3>
                  <p className="mt-2 leading-7 text-zinc-600">{post.summary}</p>
                  <p className="mt-3 inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-zinc-500">
                    <Calendar size={14} />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 border-t border-zinc-950 pt-8 sm:flex-row sm:items-center">
          <div>
            <p className="section-kicker">Next engagement</p>
            <h2 className="mt-2 font-serif text-4xl">
              Have a thorny interface to fix?
            </h2>
          </div>
          <Link to="/contact" className="button-primary">
            Tell me about it
            <BriefcaseBusiness size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}
