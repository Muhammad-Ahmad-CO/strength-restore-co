import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Dr. Ayesha Raees – Physiotherapy & Rehabilitation" },
      {
        name: "description",
        content:
          "Expert physiotherapy care by Dr. Ayesha Raees. Restore your strength and reclaim your movement.",
      },
    ],
  }),
});

function Logo() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 2c2.5 3 5 5.5 5 9a5 5 0 1 1-10 0c0-3.5 2.5-6 5-9z"
        fill="currentColor"
        className="text-blue-500"
      />
    </svg>
  );
}

function Index() {
  const links = [
    { label: "Story", href: "#story" },
    { label: "Services", href: "#services" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <main className="relative min-h-screen w-full overflow-hidden" style={{ backgroundColor: "#f0f0ee" }}>
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1920&q=80"
      >
        <source
          src="https://videos.pexels.com/video-files/4754030/4754030-uhd_2560_1440_25fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Gradient overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />

      {/* Foreground */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Navbar */}
        <header className="flex items-center justify-center gap-3 px-6 pt-6">
          {/* Logo pill */}
          <div
            className="flex items-center gap-2 rounded-full px-4 py-2 shadow-sm"
            style={{ backgroundColor: "#ededed" }}
          >
            <Logo />
            <span className="text-sm font-semibold text-gray-900">Dr. Ayesha Raees</span>
          </div>

          {/* Nav links pill */}
          <nav
            className="hidden items-center gap-1 rounded-full px-2 py-1 shadow-sm sm:flex"
            style={{ backgroundColor: "#ededed" }}
            aria-label="Primary"
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="rounded-full px-4 py-1.5 text-sm text-gray-700 transition-colors duration-200 hover:bg-white hover:text-gray-900"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </header>

        {/* Hero content — bottom-left */}
        <section className="mt-auto px-6 pb-12 sm:px-12 sm:pb-16 lg:px-20 lg:pb-20">
          <div className="max-w-2xl">
            {/* Badge */}
            <a
              href="#story"
              className="group inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-1.5 text-xs font-medium text-gray-900 shadow-sm backdrop-blur-sm transition-colors duration-200 hover:bg-white"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Trusted Physiotherapy by Dr. Ayesha Raees
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>

            {/* Headline */}
            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Expert physiotherapy care designed to restore your strength and mobility.
            </h1>

            {/* Subtext */}
            <p className="mt-5 max-w-xl text-base text-gray-200 sm:text-lg">
              Reclaim your movement. Start your healing journey with Dr. Ayesha Raees.
            </p>

            {/* CTA */}
            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full border border-white/80 bg-transparent px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-blue-500 hover:border-blue-500"
            >
              Book a consultation
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
