"use client";

import React from "react";
import {
  Group,
  Modal,
  Rating,
  Card,
  Text,
  Button,
  Title,
  Loader,
} from "@mantine/core";
import { IconSchool } from "@tabler/icons-react";
import Link from "next/link";
import { theme } from "@tailwindConfig";
import { useDisclosure } from "@mantine/hooks";
import slugify from "slugify";
import { useGetTutorialIntroVideo } from "@/queries/video-lessons";
import ReactPlayer from "react-player/vimeo";
import { useRouter } from "next/navigation";

type Props = {
  tutorial: any;
  tutorialIndex: number;
};

const TutorialCardComponent = ({ tutorial, tutorialIndex }: Props) => {
  const router = useRouter();
  const { colors } = theme as any;
  const [opened, { open, close }] = useDisclosure(false);

  const slugifiedTutorialTitle = slugify(tutorial.title, { lower: true });

  const { data: videoData, isLoading: videoLoading } = useGetTutorialIntroVideo(
    slugifiedTutorialTitle,
    {
      enabled: opened,
    }
  );

  return (
    <>
      <Card
        withBorder
        data-aos="fade-up"
        data-aos-delay={tutorialIndex * 200}
        radius="md"
        className="w-full cursor-pointer hover:!border-secondary-800 !border transition group"
        onClick={() => router.push(`/tutorials/${slugifiedTutorialTitle}`)}
      >
        {/* <TutorialCardImageTutorialComponent /> */}
        <Title className="group-hover:!text-secondary-800 transition !font-cabin">
          {tutorial.title}
        </Title>

        <Group justify="space-between" mt="md" mb="xs">
          <Group>
            <div>Beoordeling:</div>
            <Rating fractions={4} value={tutorial.rating} readOnly />
          </Group>
          <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
            <IconSchool className="w-4 h-4 mr-1" />
            {tutorial.durationInHours} uren
          </span>
        </Group>

        <Text size="sm" c="dimmed">
          {tutorial.summary}
        </Text>

        <Group mt="md" gap="sm" grow>
          <Button
            onClick={open}
            variant="default"
            color={colors.tertiary.DEFAULT}
          >
            Bekijk Intro
          </Button>
          <Button
            component={Link}
            href={`/tutorials/${slugifiedTutorialTitle}`}
            variant="light"
            color={colors.tertiary.DEFAULT}
            className="hover:bg-tertiary-100 transition"
          >
            Meer Info
          </Button>
        </Group>
      </Card>
      <Modal
        opened={opened}
        onClose={close}
        title="Tutorial Intro Video"
        centered
        size="xl"
      >
        <div className="max-h-screen h-full w-full">
          {videoLoading ? (
            <div className="h-96 flex items-center justify-center">
              <Loader color={colors.primary.DEFAULT} size="xl" type="bars" />
            </div>
          ) : (
            <ReactPlayer
              className="react-player h-screen"
              url={videoData.link}
              controls={true}
              playing={true}
              loop={true}
              width={"100%"}
            />
          )}
        </div>
      </Modal>
    </>
  );
};

export default TutorialCardComponent;
