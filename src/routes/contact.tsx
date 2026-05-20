import { createFileRoute } from "@tanstack/react-router";
import { HeroPage } from "@/components/HeroPage";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact – Book a Neck & Spine Consultation" },
      {
        name: "description",
        content:
          "Book a physiotherapy consultation with Dr. Ayesha Raees for neck, spine and posture care.",
      },
    ],
  }),
});

function ContactPage() {
  return (
    <HeroPage
      videoSrc="https://videos.pexels.com/video-files/8534239/8534239-uhd_2732_1440_25fps.mp4"
      posterSrc="https://images.pexels.com/videos/8534239/free-video-8534239.jpg?auto=compress&cs=tinysrgb&w=1600"
      variant="neck"
      badge="Neck, spine & posture care"
      headline="Release tension. Realign posture. Reclaim a pain-free day."
      subtext="Book a focused neck and spine assessment with Dr. Ayesha Raees today."
      ctaLabel="Book a consultation"
      ctaTo="/contact"
    />
  );
}
