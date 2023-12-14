import BannerComponent from "@/components/common/banner.common";
import VideoListComponent from "@/components/tutorials.component/video-list.tutorial";
import { AspectRatio, Button, Overlay, Text, Title } from "@mantine/core";
import Image from "next/image";
import React from "react";

function TutorialPage() {
  return (
    <>
      <div className="h-24" />
      <section className="py-20 pt-0 grid grid-cols-1 lg:grid-cols-12 w-full px-5 md:px-10g gap-5">
        <div className="intro-video col-span-full lg:col-span-8">
          <div className="relative">
            <video
              className="w-full h-auto max-w-full border border-gray-200 rounded-lg"
              controls
            >
              <source src="/docs/videos/flowbite.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="overlay backdrop-blur-sm absolute top-0 right-0 bottom-0 left-0 rounded-lg flex items-center justify-center">
              <BannerComponent
                title={"Video Niet Beschikbaar"}
                body={
                  <div>
                    <p className="mb-1">
                      U moet betalen om deze video te bekijken
                    </p>
                    <Button
                      variant="light"
                      rightSection={
                        <div className="relative w-5 h-5">
                          <Image
                            fill
                            src={"/images/gwap-logo.png"}
                            alt="Gwap logo"
                          />
                        </div>
                      }
                    >
                      Betaal met Gwap
                    </Button>
                  </div>
                }
              />
            </div>
          </div>
          <div className="intro col-span-4 p-2 rounded-lg">
            <Title className="!font-cabin">Tutorial Intro</Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </div>
        </div>
        <div className="videos col-span-full lg:col-span-4">
          <VideoListComponent />
        </div>
      </section>
    </>
  );
}

export default TutorialPage;
