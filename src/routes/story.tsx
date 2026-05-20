import { createFileRoute } from "@tanstack/react-router";
import { HeroPage } from "@/components/HeroPage";

export const Route = createFileRoute("/story")({
  component: StoryPage,
  head: () => ({
    meta: [
      { title: "Our Story – Dr. Ayesha Raees Physiotherapy" },
      {
        name: "description",
        content:
          "Meet Dr. Ayesha Raees — a physiotherapist dedicated to compassionate, evidence-based recovery.",
      },
    ],
  }),
});

function StoryPage() {
  return (
    <HeroPage
      videoSrc="https://videos.pexels.com/video-files/4506108/4506108-uhd_2732_1440_25fps.mp4"
      posterSrc="https://images.pexels.com/videos/4506108/free-video-4506108.jpg?auto=compress&cs=tinysrgb&w=1600"
      variant="story"
      badge="A decade of healing hands"
      badgeHref="/story"
      headline="Years of dedicated practice, built on trust and visible recovery."
      subtext="Dr. Ayesha Raees blends clinical precision with genuine care for every patient."
      ctaLabel="Read the full story"
      ctaTo="/services"
    />
  );
}
