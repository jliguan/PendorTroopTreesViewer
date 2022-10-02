import { ActionIcon, Center, Divider, Drawer, Grid, MediaQuery, Tabs, Title, UnstyledButton } from '@mantine/core';
import { useSetState, useViewportSize } from '@mantine/hooks';
import { IconArrowLeft } from '@tabler/icons'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AvatarTroop from '../AvatarTroop';
import PendorDrawer from '../PendorDrawer';
import PendorSidebar from '../PendorSidebar';

export default function Outlaws() {

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
                        <Title order={1} align="center">Outlaws</Title>
                    </MediaQuery>
                    <MediaQuery largerThan={480} styles={{ display: 'none' }}>
                        <Title order={2} align="center">Outlaws</Title>
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
                        <Tabs.Tab value="first">Common</Tabs.Tab>
                        <Tabs.Tab value="second">Special</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="first" pt="xs">

                        <Grid grow gutter="sm" justify="center" columns={24} >
                            <Grid.Col span={12}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('outlaws', 'robber')}>
                                        <AvatarTroop faction={'outlaws'} name={'robber'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={12}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('outlaws', 'brigand')}>
                                        <AvatarTroop faction={'outlaws'} name={'brigand'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={12} pt={0} pb={0}>
                                <Center>
                                    <Divider orientation="vertical" size="xl" sx={{ height: '20px' }} />
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={12} pt={0} pb={0}></Grid.Col>

                            <Grid.Col span={12}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('outlaws', 'bandit')}>
                                        <AvatarTroop faction={'outlaws'} name={'bandit'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={12}></Grid.Col>


                            <Grid.Col span={12} pt={0} pb={0}>
                                <Center>
                                    <Divider orientation="vertical" size="xl" sx={{ height: '10px' }} />
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={12} pt={0} pb={0}></Grid.Col>


                            <Grid.Col span={3} pt={0} pb={0}></Grid.Col>
                            <Grid.Col span={6} p={0}>
                                <Divider size={5} />
                            </Grid.Col>
                            <Grid.Col span={3} pt={0} pb={0}></Grid.Col>
                            <Grid.Col span={12} pt={0} pb={0}></Grid.Col>

                            <Grid.Col span={6} pt={0} pb={0} mt={-5}>
                                <Center>
                                    <Divider orientation="vertical" size="xl" sx={{ height: '10px' }} />
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={6} pt={0} pb={0} mt={-5}>
                                <Center>
                                    <Divider orientation="vertical" size="xl" sx={{ height: '10px' }} />
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={12} pt={0} pb={0}></Grid.Col>


                            <Grid.Col span={6}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('outlaws', 'sellsword')}>
                                        <AvatarTroop faction={'outlaws'} name={'sellsword'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={6}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('outlaws', 'highwayman')}>
                                        <AvatarTroop faction={'outlaws'} name={'highwayman'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={12} pt={0} pb={0}></Grid.Col>
                        </Grid>
                    </Tabs.Panel>

                    <Tabs.Panel value="second" pt="xs">
                        <Grid grow gutter="sm" justify="center" columns={24} >
                            <Grid.Col span={12}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('outlaws', 'notorious_outlaw')}>
                                        <AvatarTroop faction={'outlaws'} name={'notorious_outlaw'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={12}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('outlaws', 'dshar_bandit')}>
                                        <AvatarTroop faction={'outlaws'} name={'dshar_bandit'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={12}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('outlaws', 'dshar_outlaw_chieftain')}>
                                        <AvatarTroop faction={'outlaws'} name={'dshar_outlaw_chieftain'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            
                            <Grid.Col span={12}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('outlaws', 'omen_seeker')}>
                                        <AvatarTroop faction={'outlaws'} name={'omen_seeker'}></AvatarTroop>
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

        </Grid >
    );
}