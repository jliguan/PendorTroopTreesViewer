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
                                src="/assets/SarleonPNG/Sarleon_Man_at_Arms.png"
                                height={150}
                                width={70}
                                alt="Sarleon Man-at-Arms"
                            />
                        </Center>
                    </Card.Section>

                    <Group position="apart">
                        <Text weight={500}>Sarleon Man-at-Arms</Text>
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