import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";

function Logo() {
  return (
    <svg width="18" height="18" viewBox="0 0 256 256" fill="none" aria-hidden="true">
      <path
        fill="rgb(84, 84, 84)"
        d="M 160 88 L 194 34 L 216 0 L 256 0 L 256 40 L 221.5 93.5 L 200 128 L 256 128 L 256 256 L 96 256 L 96 168 L 64.246 220 L 40 256 L 0 256 L 0 216 L 34 162 L 56 128 L 0 128 L 0 0 L 160 0 Z"
      />
    </svg>
  );
}

const navLinks = [
  { label: "Story", to: "/story" },
  { label: "Services", to: "/services" },
  { label: "FAQs", to: "/faqs" },
  { label: "Contact", to: "/contact" },
] as const;

export type HeroVariant = "default" | "elbow" | "leg" | "neck" | "story";

const variantClasses: Record<HeroVariant, { overlay: string; enter: string }> = {
  default: {
    overlay: "bg-gradient-to-tr from-black/30 via-transparent to-transparent",
    enter: "animate-fade-in",
  },
  story: {
    overlay: "bg-gradient-to-b from-black/10 via-transparent to-black/20",
    enter: "animate-fade-in",
  },
  elbow: {
    overlay: "bg-gradient-to-r from-black/40 via-transparent to-blue-900/20",
    enter: "animate-slide-in-right",
  },
  leg: {
    overlay: "bg-gradient-to-t from-black/40 via-transparent to-transparent",
    enter: "animate-scale-in",
  },
  neck: {
    overlay: "bg-gradient-to-bl from-blue-900/20 via-transparent to-black/30",
    enter: "animate-fade-in",
  },
};

export type HeroPageProps = {
  videoSrc: string;
  posterSrc?: string;
  variant?: HeroVariant;
  badge: string;
  badgeHref?: string;
  headline: ReactNode;
  subtext: ReactNode;
  ctaLabel: string;
  ctaTo: string;
};

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);
  return reduced;
}

export function HeroPage({
  videoSrc,
  posterSrc,
  variant = "default",
  badge,
  badgeHref = "/story",
  headline,
  subtext,
  ctaLabel,
  ctaTo,
}: HeroPageProps) {
  const reducedMotion = usePrefersReducedMotion();
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const v = variantClasses[variant];

  useEffect(() => {
    setLoaded(false);
    const el = videoRef.current;
    if (!el) return;
    if (reducedMotion) {
      el.pause();
    } else {
      el.play().catch(() => {});
    }
  }, [videoSrc, reducedMotion]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f0f0ee]">
      {/* Poster / loading fallback */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 transition-opacity duration-700 ${loaded && !reducedMotion ? "opacity-0" : "opacity-100"}`}
        style={
          posterSrc
            ? {
                backgroundImage: `url(${posterSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : { background: "linear-gradient(135deg,#e7eaf0,#f0f0ee 60%,#dbe4ee)" }
        }
      >
        {!posterSrc && !loaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-8 w-8 rounded-full border-2 border-blue-400/40 border-t-blue-500 animate-spin" />
          </div>
        )}
      </div>

      {!reducedMotion && (
        <video
          ref={videoRef}
          key={videoSrc}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={posterSrc}
          src={videoSrc}
          onLoadedData={() => setLoaded(true)}
          onCanPlay={() => setLoaded(true)}
        />
      )}

      <div className={`absolute inset-0 pointer-events-none ${v.overlay}`} aria-hidden="true" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <nav className="flex items-center justify-center pt-4 sm:pt-6 px-4 sm:px-8 gap-2 sm:gap-3">
          <Link
            to="/"
            className="flex items-center justify-center rounded-full w-10 h-10 sm:w-11 sm:h-11 shrink-0"
            style={{ backgroundColor: "#EDEDED" }}
            aria-label="Home"
          >
            <Logo />
          </Link>
          <div
            className="flex items-center gap-4 sm:gap-10 rounded-xl px-4 sm:px-8 py-2.5 sm:py-3"
            style={{ backgroundColor: "#EDEDED" }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-[12px] sm:text-[14px] font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
                activeProps={{ className: "text-gray-900" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        <div className="flex-1 flex items-end pb-10 sm:pb-16 lg:pb-20 px-6 sm:px-12 md:px-20 lg:px-28">
          <div className={`max-w-xs ${reducedMotion ? "" : v.enter}`}>
            <Link
              to={badgeHref}
              className="inline-flex items-center gap-1.5 text-[11.5px] font-medium text-blue-500 hover:text-blue-600 transition-colors mb-3 group"
            >
              {badge}
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </Link>

            <h1 className="text-[1.5rem] sm:text-[1.75rem] leading-[1.15] font-medium text-gray-900 tracking-tight mb-3">
              {headline}
            </h1>

            <p className="text-[13px] text-gray-400 font-normal mb-3">{subtext}</p>

            <Link
              to={ctaTo}
              className="inline-flex items-center gap-2 text-[13px] font-medium text-blue-500 border border-blue-400 rounded-full px-5 py-2.5 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-200 group"
            >
              {ctaLabel}
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
