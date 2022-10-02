import { ActionIcon, Center, Divider, Drawer, Grid, MediaQuery, Tabs, Title, UnstyledButton } from '@mantine/core';
import { useSetState, useViewportSize } from '@mantine/hooks';
import { IconArrowLeft } from '@tabler/icons'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AvatarTroop from '../AvatarTroop';
import PendorDrawer from '../PendorDrawer';
import PendorSidebar from '../PendorSidebar';

export default function Jatu() {

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
                        <Title order={1} align="center">Jatu</Title>
                    </MediaQuery>
                    <MediaQuery largerThan={480} styles={{ display: 'none' }}>
                        <Title order={3} align="center">Jatu</Title>
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
                        <Grid grow gutter="sm" justify="center" columns={24}>

                            <Grid.Col span={24}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('jatu', 'outcast_rider')}>
                                        <AvatarTroop faction={'jatu'} name={'outcast_rider'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={24} pt={0} pb={0}>
                                <Center>
                                    <Divider orientation="vertical" size="xl" sx={{ height: '20px' }} />
                                </Center>
                            </Grid.Col>
                            
                            <Grid.Col span={24}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('jatu', 'raider')}>
                                        <AvatarTroop faction={'jatu'} name={'raider'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={24} pt={0} pb={0}>
                                <Center>
                                    <Divider orientation="vertical" size="xl" sx={{ height: '20px' }} />
                                </Center>
                            </Grid.Col>
                            
                            <Grid.Col span={24}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('jatu', 'lancer')}>
                                        <AvatarTroop faction={'jatu'} name={'lancer'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={24} pt={0} pb={0}>
                                <Center>
                                    <Divider orientation="vertical" size="xl" sx={{ height: '20px' }} />
                                </Center>
                            </Grid.Col>
                            
                            <Grid.Col span={24}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('jatu', 'battle_rider')}>
                                        <AvatarTroop faction={'jatu'} name={'battle_rider'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                        </Grid>
                    </Tabs.Panel>
                    <Tabs.Panel value="second" pt="xs">
                        <Grid grow gutter="sm" justify="center" columns={24}>
                            <Grid.Col span={8}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('jatu', 'kjudas_kajahar')}>
                                        <AvatarTroop faction={'jatu'} name={'kjudas_kajahar'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={8}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('jatu', 'zulkars_grim_rider')}>
                                        <AvatarTroop faction={'jatu'} name={'zulkars_grim_rider'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={8}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('jatu', 'warlord')}>
                                        <AvatarTroop faction={'jatu'} name={'warlord'}></AvatarTroop>
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