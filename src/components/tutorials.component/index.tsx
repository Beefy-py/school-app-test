"use client";

import { tutorialsComponent } from "@/utils/content";
import TutorialCardComponent from "./tutorial-card.tutorial";

const TutorialsComponent = () => {
  return (
    <>
      <section
        id="tutorials"
        className="bg-transparent py-16 lg:py-40 relative"
      >
        <h2
          data-aos="zoom-in"
          className="mb-6 font-bold text-xl lg:text-2xl text-center lg:text-left text-primary-700"
        >
          Tutorials
        </h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4">
          {tutorialsComponent.tutorials.map((tutorial, index) => (
            <TutorialCardComponent
              key={index + tutorial.title}
              tutorial={tutorial}
              tutorialIndex={index}
            />
          ))}
        </div>
        <div
          data-aos="zoom-in-left"
          data-aos-duration="6000"
          className="absolute -z-10 h-[60rem] w-[60rem] rotate-45 -left-72 -top-20"
          style={{
            backgroundImage: `url('/images/blob2.png')`,
            backgroundSize: "cover", // You can adjust this to 'contain' or other values
            backgroundPosition: "center", // You can adjust this if needed
          }}
        ></div>
      </section>
    </>
  );
};

export default TutorialsComponent;
