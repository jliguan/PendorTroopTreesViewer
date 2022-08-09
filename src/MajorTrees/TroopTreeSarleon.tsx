import { Text, Paper, Center, Card, Image, Group } from '@mantine/core';


export default function TroopTreeSarleon() {
    return (
        <Paper shadow="xs" p="sm" withBorder>
            <Center>

                <Card shadow="sm" p="lg" radius="md" withBorder>
                    <Card.Section>

                        <Center>


                            <Image
                                src="/src/assets/SarleonPNG/Sarleon_Recruit.png"
                                height={200}
                                width={100}
                                alt="Sarleon Recruit"
                            />
                        </Center>
                    </Card.Section>

                    <Group position="apart">
                        <Text weight={500}>Sarleon Recruit</Text>
                    </Group>

                    {/* <Text size="sm" color="dimmed">
                        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                        activities on and around the fjords of Norway
                    </Text> */}
                </Card>

            </Center>
        </Paper>
    );
}