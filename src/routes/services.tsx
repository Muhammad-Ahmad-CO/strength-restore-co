import { createFileRoute } from "@tanstack/react-router";
import { HeroPage } from "@/components/HeroPage";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services – Elbow, Joint & Upper Limb Rehab" },
      {
        name: "description",
        content:
          "Targeted physiotherapy services for elbow pain, tennis elbow, and upper limb rehabilitation.",
      },
    ],
  }),
});

function ServicesPage() {
  return (
    <HeroPage
      videoSrc="https://videos.pexels.com/video-files/6111780/6111780-uhd_2560_1440_25fps.mp4"
      badge="Elbow & upper limb rehab"
      headline="Restore precision and strength to every reach, lift, and grip."
      subtext="From tennis elbow to post-surgical recovery — a tailored plan for your joints."
      ctaLabel="Explore all services"
      ctaTo="/contact"
    />
  );
}
