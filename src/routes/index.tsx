import { createFileRoute } from "@tanstack/react-router";
import { HeroPage } from "@/components/HeroPage";

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

function Index() {
  return (
    <HeroPage
      videoSrc="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_215831_c6a8989c-d716-4d8d-8745-e972a2eec711.mp4"
      posterSrc="https://images.pexels.com/videos/4754030/free-video-4754030.jpg?auto=compress&cs=tinysrgb&w=1600"
      variant="default"
      badge="Trusted Physiotherapy by Dr. Ayesha Raees"
      headline="Expert physiotherapy care designed to restore your strength and mobility."
      subtext="Reclaim your movement. Start your healing journey with Dr. Ayesha Raees."
      ctaLabel="Book a consultation"
      ctaTo="/contact"
    />
  );
}
