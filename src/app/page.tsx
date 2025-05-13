import FeaturesSection from "@/components/features-section";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import StoriesSection from "@/components/stories-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <StoriesSection/>
    </main>
  )
}
