import AboutSection from "./components/AboutSection";
import Slider from "./components/slider";
import VideoSection from "./components/VideoSection";
import FeatureCard from "./components/Features";
import { AppleCardsCarouselDemo } from "./components/AppleCardsCarouselDemo";

export default function Home() {
  return (
   <section>
    <Slider />
    <FeatureCard />
    <AboutSection />
    <VideoSection />
    <AppleCardsCarouselDemo />
   </section>
  );
}
