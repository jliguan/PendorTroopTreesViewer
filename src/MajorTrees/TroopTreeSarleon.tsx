import { Text, Paper, Center, Card, Image, Group, Box } from '@mantine/core';

export default function TroopTreeSarleon() {

    return (


        <Paper shadow="xs" p="sm" withBorder>
            <Box sx={{ maxWidth: 300 }} mx="auto">
                {/* <BackgroundImage
                    src="/assets/coat_sarleon.png"
                    radius="sm"
                > */}
                    <Center p="md">
                        {/* <Text
                                variant="gradient"
                                gradient={{ from: 'yellow', to: 'darkred', deg: 45 }}
                                size="xl"
                                weight={700}
                            > */}
                            <Text color={'darkred'} size='xl'>
                                Sarleon
                            </Text>
                    </Center>
                {/* </BackgroundImage> */}
            </Box>
            <Center>
                <Card shadow="sm" p="lg" radius="md" withBorder>
                    <Card.Section>
                        <Center>
                            <Image
                                src="/assets/SarleonPNG/Sarleon_Recruit.png"
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