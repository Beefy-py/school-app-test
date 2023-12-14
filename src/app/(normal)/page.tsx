import HeroComponent from "@/components/hero.component";
import FeaturesComponent from "@/components/features.component";
import TutorialsComponent from "@/components/tutorials.component";

export default function Home() {
  return (
    <div
      id="page-body"
      className="px-5 lg:px-10 xl:px-20 mx-auto overflow-hidden"
    >
      <HeroComponent />
      <FeaturesComponent />
      <TutorialsComponent />
    </div>
  );
}
