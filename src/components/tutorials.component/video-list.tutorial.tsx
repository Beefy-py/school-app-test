"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { useGetTutorialLessonVideos } from "@/queries/video-lessons";
import { ScrollArea, Skeleton } from "@mantine/core";
import VideoCardComponent from "./video-card.tutorial";
import { useViewportSize } from "@mantine/hooks";

const VideoListComponent = () => {
  const { width } = useViewportSize();
  const pathname = usePathname();
  const tutorialSlug = pathname.split("/")[2];

  const { data: videosData, isLoading } =
    useGetTutorialLessonVideos(tutorialSlug);

  return (
    <div>
      {isLoading ? (
        <Skeleton
          styles={{
            root: {
              width: "100%",
              height: "100vh",
            },
          }}
        />
      ) : (
        <ScrollArea
          className="h-full lg:max-h-screen"
          type="auto"
          offsetScrollbars
          scrollHideDelay={0}
          h={width > 1023 ? 1000 : "auto"}
        >
          <div className="b grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-x-5">
            {videosData.data.map((video: any, index: number) => {
              return (
                <VideoCardComponent key={index + video.name} video={video} />
              );
            })}
          </div>
        </ScrollArea>
      )}
    </div>
  );
};

export default VideoListComponent;
