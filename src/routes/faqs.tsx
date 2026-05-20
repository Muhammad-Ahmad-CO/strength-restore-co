import { createFileRoute } from "@tanstack/react-router";
import { HeroPage } from "@/components/HeroPage";

export const Route = createFileRoute("/faqs")({
  component: FaqsPage,
  head: () => ({
    meta: [
      { title: "FAQs – Leg, Knee & Lower Limb Recovery" },
      {
        name: "description",
        content:
          "Answers about leg rehabilitation, knee pain, and lower limb physiotherapy with Dr. Ayesha Raees.",
      },
    ],
  }),
});

function FaqsPage() {
  return (
    <HeroPage
      videoSrc="https://videos.pexels.com/video-files/4754030/4754030-uhd_2560_1440_25fps.mp4"
      badge="Leg & lower limb questions"
      headline="Walk, run, and stand without compromise — answers to your recovery."
      subtext="Common questions about knee, calf, and ankle rehab — answered with clarity."
      ctaLabel="Ask a question"
      ctaTo="/contact"
    />
  );
}
