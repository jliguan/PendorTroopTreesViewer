import { ActionIcon, Center, Divider, Drawer, Grid, MediaQuery, Tabs, Title, UnstyledButton } from '@mantine/core';
import { useSetState, useViewportSize } from '@mantine/hooks';
import { IconArrowLeft } from '@tabler/icons'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AvatarTroop from '../AvatarTroop';
import PendorDrawer from '../PendorDrawer';
import PendorSidebar from '../PendorSidebar';

export default function Veccavia() {

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
                        <Title order={1} align="center">Veccavia</Title>
                    </MediaQuery>
                    <MediaQuery largerThan={480} styles={{ display: 'none' }}>
                        <Title order={3} align="center">Veccavia</Title>
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
                        <Tabs.Tab value="first">Female</Tabs.Tab>
                        <Tabs.Tab value="second">Male</Tabs.Tab>
                        <Tabs.Tab value="third">Special</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="first" pt="xs">
                        <Grid grow gutter="sm" justify="center" columns={24}>

                            <Grid.Col span={24}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('veccavia', 'man_hunter')}>
                                        <AvatarTroop faction={'veccavia'} name={'man_hunter'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={24} pt={0} pb={0}>
                                <Center>
                                    <Divider orientation="vertical" size="xl" sx={{ height: '10px' }} />
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={6} pt={0} pb={0}></Grid.Col>
                            <Grid.Col span={12} p={0}>
                                <Divider size={5} />
                            </Grid.Col>
                            <Grid.Col span={6} pt={0} pb={0}></Grid.Col>

                            <Grid.Col span={12} pt={0} pb={0} mt={-5}>
                                <Center>
                                    <Divider orientation="vertical" size="xl" sx={{ height: '10px' }} />
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={12} pt={0} pb={0} mt={-5}>
                                <Center>
                                    <Divider orientation="vertical" size="xl" sx={{ height: '10px' }} />
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={12}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('veccavia', 'companion')}>
                                        <AvatarTroop faction={'veccavia'} name={'companion'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={12}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('veccavia', 'sentinel')}>
                                        <AvatarTroop faction={'veccavia'} name={'sentinel'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={12} pt={0} pb={0}>
                                <Center>
                                    <Divider orientation="vertical" size="xl" sx={{ height: '20px' }} />
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={12}></Grid.Col>
                            <Grid.Col span={12}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('veccavia', 'knight')}>
                                        <AvatarTroop faction={'veccavia'} name={'knight'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={12}></Grid.Col>

                        </Grid>
                    </Tabs.Panel>
                    <Tabs.Panel value="second" pt="xs">
                        <Grid grow gutter="sm" justify="center" columns={24}>
                            <Grid.Col span={24}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('veccavia', 'kral_guard')}>
                                        <AvatarTroop faction={'veccavia'} name={'kral_guard'}></AvatarTroop>
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
                                    <UnstyledButton onClick={() => showStats('veccavia', 'krom_guard')}>
                                        <AvatarTroop faction={'veccavia'} name={'krom_guard'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                        </Grid>
                    </Tabs.Panel>
                    <Tabs.Panel value="third" pt="xs">
                        <Grid grow gutter="sm" justify="center" columns={24}>
                            <Grid.Col span={12}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('veccavia', 'uncut')}>
                                        <AvatarTroop faction={'veccavia'} name={'uncut'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={12}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('veccavia', 'bloodsworn_guard')}>
                                        <AvatarTroop faction={'veccavia'} name={'bloodsworn_guard'}></AvatarTroop>
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