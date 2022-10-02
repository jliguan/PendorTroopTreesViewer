import { ActionIcon, Center, Divider, Drawer, Grid, MediaQuery, Tabs, Title, UnstyledButton } from '@mantine/core';
import { useSetState, useViewportSize } from '@mantine/hooks';
import { IconArrowLeft } from '@tabler/icons'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AvatarTroop from '../AvatarTroop';
import PendorDrawer from '../PendorDrawer';
import PendorSidebar from '../PendorSidebar';

export default function RebelPeasants() {

    const [state, setState] = useSetState({ faction: '', name: '' });
    const [opened, setOpened] = useState(false);
    const { width } = useViewportSize();

    function showStats(f: string, n: string) {
        setState({ faction: f, name: n });
        if (width <= 1000) {
            setOpened(true);
        }
    }

    return (
        <Grid grow gutter="sm" justify="center" columns={24} >

            <Grid.Col span={4}>
                <ActionIcon size="xl" variant="transparent" component={Link} to="/">
                    <IconArrowLeft />
                </ActionIcon>
            </Grid.Col>
            <Grid.Col span={16}>
                <Center>
                    <MediaQuery smallerThan={480} styles={{ display: 'none' }}>
                        <Title order={1} align="center">Rebel Peasants</Title>
                    </MediaQuery>
                    <MediaQuery largerThan={480} styles={{ display: 'none' }}>
                        <Title order={3} align="center">Rebel Peasants</Title>
                    </MediaQuery>
                </Center>

            </Grid.Col>
            <Grid.Col span={4}></Grid.Col>

            <Grid.Col span={24} p={0}>
                <Divider my="sm" mb={0} mt={0} />
            </Grid.Col>

            <Grid.Col span={24}>

                <Tabs defaultValue="first">
                    <Tabs.List>
                        <Tabs.Tab value="first">Peasant Revolt Army</Tabs.Tab>
                        <Tabs.Tab value="second">Alaric von Brouhaha</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="first" pt="xs">
                        <Grid grow gutter="sm" justify="center" columns={24}>

                            <Grid.Col span={8}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('rebel_peasants', 'hero_adventurer')}>
                                        <AvatarTroop faction={'rebel_peasants'} name={'hero_adventurer'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={8}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('rebel_peasants', 'sarleon_deserter')}>
                                        <AvatarTroop faction={'rebel_peasants'} name={'sarleon_deserter'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={8}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('rebel_peasants', 'ravenstern_deserter')}>
                                        <AvatarTroop faction={'rebel_peasants'} name={'ravenstern_deserter'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={8}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('rebel_peasants', 'fierdsvain_deserter')}>
                                        <AvatarTroop faction={'rebel_peasants'} name={'fierdsvain_deserter'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={8}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('rebel_peasants', 'empire_deserter')}>
                                        <AvatarTroop faction={'rebel_peasants'} name={'empire_deserter'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={8}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('rebel_peasants', 'militia_recruit')}>
                                        <AvatarTroop faction={'rebel_peasants'} name={'militia_recruit'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={8}></Grid.Col>
                    
                        </Grid>
                    </Tabs.Panel>

                    <Tabs.Panel value="second" pt="xs">
                        <Grid grow gutter="sm" justify="center" columns={24}>

                            <Grid.Col span={8}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('rebel_peasants', 'young_adventurer_sarleon')}>
                                        <AvatarTroop faction={'rebel_peasants'} name={'young_adventurer_sarleon'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={8}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('rebel_peasants', 'militia_recruit')}>
                                        <AvatarTroop faction={'rebel_peasants'} name={'militia_recruit'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={8}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('rebel_peasants', 'sarleon_deserter')}>
                                        <AvatarTroop faction={'rebel_peasants'} name={'sarleon_deserter'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                        </Grid>
                    </Tabs.Panel>
                </Tabs>

            </Grid.Col>

            <PendorSidebar faction={state.faction} name={state.name} />

            <Drawer
                opened={opened}
                onClose={() => setOpened(false)}
                padding="md"
                size={300}
                position="right"
                withCloseButton={false}
            >
                {/* Drawer content */}
                <PendorDrawer faction={state.faction} name={state.name} />
            </Drawer>

        </Grid>
    );
}