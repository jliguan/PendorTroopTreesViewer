import { ActionIcon, Center, Divider, Drawer, Grid, MediaQuery, Tabs, Title, UnstyledButton } from '@mantine/core';
import { useSetState, useViewportSize } from '@mantine/hooks';
import { IconArrowLeft } from '@tabler/icons'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AvatarTroop from '../AvatarTroop';
import PendorDrawer from '../PendorDrawer';
import PendorSidebar from '../PendorSidebar';

export default function RogueKnights() {

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
                        <Title order={1} align="center">Rogue Knights</Title>
                    </MediaQuery>
                    <MediaQuery largerThan={480} styles={{ display: 'none' }}>
                        <Title order={3} align="center">Rogue Knights</Title>
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
                        <Tabs.Tab value="first">Syla Uzas</Tabs.Tab>
                        <Tabs.Tab value="second">Sheik Shalavan</Tabs.Tab>
                        <Tabs.Tab value="third">Sir Boris the Raven</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="first" pt="xs">
                        <Grid grow gutter="sm" justify="center" columns={24}>

                            <Grid.Col span={12}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('rogue_knights', 'empire_mortal')}>
                                        <AvatarTroop faction={'rogue_knights'} name={'empire_mortal'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={12}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('rogue_knights', 'empire_immortal')}>
                                        <AvatarTroop faction={'rogue_knights'} name={'empire_immortal'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={12}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('rogue_knights', 'marinus')}>
                                        <AvatarTroop faction={'rogue_knights'} name={'marinus'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={12}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('rogue_knights', 'shadow_legion_centurion')}>
                                        <AvatarTroop faction={'rogue_knights'} name={'shadow_legion_centurion'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={12}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('rogue_knights', 'empire_knight')}>
                                        <AvatarTroop faction={'rogue_knights'} name={'empire_knight'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={12}></Grid.Col>


                        </Grid>
                    </Tabs.Panel>
                    <Tabs.Panel value="second" pt="xs">
                        <Grid grow gutter="sm" justify="center" columns={24}>
                            <Grid.Col span={8}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('rogue_knights', 'rogue_dshar_squire')}>
                                        <AvatarTroop faction={'rogue_knights'} name={'rogue_dshar_squire'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={8}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('rogue_knights', 'ghazi_reaver')}>
                                        <AvatarTroop faction={'rogue_knights'} name={'ghazi_reaver'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={8}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('rogue_knights', 'ghazi_dervish')}>
                                        <AvatarTroop faction={'rogue_knights'} name={'ghazi_dervish'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={8} pt={0} pb={0}>
                                <Center>
                                    <Divider orientation="vertical" size="xl" sx={{ height: '20px' }} />
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={8} pt={0} pb={0}></Grid.Col>
                            <Grid.Col span={8} pt={0} pb={0}></Grid.Col>
                            
                            <Grid.Col span={8}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('rogue_knights', 'dshar_rogue_knight')}>
                                        <AvatarTroop faction={'rogue_knights'} name={'dshar_rogue_knight'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={8}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('rogue_knights', 'windrider')}>
                                        <AvatarTroop faction={'rogue_knights'} name={'windrider'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={8}></Grid.Col>
                        </Grid>
                    </Tabs.Panel>
                    <Tabs.Panel value="third" pt="xs">
                        <Grid grow gutter="sm" justify="center" columns={24}>
                            <Grid.Col span={12}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('rogue_knights', 'rogue_ravenstern_squire')}>
                                        <AvatarTroop faction={'rogue_knights'} name={'rogue_ravenstern_squire'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={12}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('rogue_knights', 'raven_spear_mercenary')}>
                                        <AvatarTroop faction={'rogue_knights'} name={'raven_spear_mercenary'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={8} pt={0} pb={0}>
                                <Center>
                                    <Divider orientation="vertical" size="xl" sx={{ height: '20px' }} />
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={8} pt={0} pb={0}></Grid.Col>
                            <Grid.Col span={12}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('rogue_knights', 'ravenstern_rogue_knight')}>
                                        <AvatarTroop faction={'rogue_knights'} name={'ravenstern_rogue_knight'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={12}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('rogue_knights', 'knight_of_the_raven_spear')}>
                                        <AvatarTroop faction={'rogue_knights'} name={'knight_of_the_raven_spear'}></AvatarTroop>
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