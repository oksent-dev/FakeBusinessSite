import Carousel from "./_components/carousel";
import Features from "./_components/features";
import Solutions from "./_components/solutions";
import Trial from "./_components/trial";
import Questions from "./_components/questions";
import Landing from "./_components/landing";

export default function Home() {
  return (
    <main>
      <Landing />
      <Features />
      <Carousel />
      <Solutions />
      <Trial />
      <Questions />
    </main>
  );
}
