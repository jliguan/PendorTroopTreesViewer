import { Text, Center, Card, Image, Group, Container } from '@mantine/core';

export default function TroopTreeSarleon() {

    return (
            <Container p={0}>
                    {/* <Text color={'darkred'} size='xl'>
                        Sarleon
                    </Text> */}
                    
                    {/* <Anchor component={Link} to="/"> Major Factions </Anchor> */}
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
                </Card>
            </Center>
        </Container>

    );
}