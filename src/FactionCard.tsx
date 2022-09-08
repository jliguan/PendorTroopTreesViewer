import { Card, Center, Text } from '@mantine/core';

export default function FactionCard(props: { name: string }) {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      {/* <Card.Section>
        <Image
          src="src/assets/coat_sarleon.png"
          height={160}
          alt="Sarleon"
        />
      </Card.Section> */}

      {/* <Group position="apart" mt="md" mb="xs"> */}
      <Center>
        <Text weight={500}>{props.name}</Text>
      </Center>
      {/* </Group> */}

      {/* <Text size="sm" color="dimmed">
        Body Text
      </Text> */}

    </Card>
  );
}