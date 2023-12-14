import React from "react";
import { Card, Text, Image, Button, Group } from "@mantine/core";
import Link from "next/link";
type Props = {
  video: any;
};

const VideoCardComponent = ({ video }: Props) => {
  return (
    <Card
      className="col-span-full sm:col-span-1 lg:col-span-full"
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      mb="lg"
    >
      <Card.Section component={Link} href={`/tutorials/${video.uri}`}>
        <Image src={video.pictures.base_link} height={160} alt="Norway" />
      </Card.Section>

      <Group justify="space-between" mt="md">
        <Text fw={500}>{video.name}</Text>
        <Button
          component={Link}
          href={`/tutorials/${video.uri}`}
          color="yellow"
          variant="light"
        >
          Bekijk
        </Button>
      </Group>
    </Card>
  );
};

export default VideoCardComponent;
