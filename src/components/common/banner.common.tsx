import { Paper, Text, Group, CloseButton } from "@mantine/core";

type Props = {
  title: React.ReactNode;
  body: React.ReactNode;
};

export default function BannerComponent({ title, body }: Props) {
  return (
    <Paper withBorder p="lg" radius="md" shadow="md">
      <Group justify="space-between" mb="xs">
        <Text fz="md" fw={500}>
          {title}
        </Text>
        {/* <CloseButton mr={-9} mt={-9} /> */}
      </Group>
      <Text c="dimmed" fz="xs">
        {body}
      </Text>
      {/* <Group justify="flex-end" mt="md">
        <Button variant="default" size="xs">
          Cancel
        </Button>
        <Button variant="outline" size="xs">
          Proceed
        </Button>
      </Group> */}
    </Paper>
  );
}
