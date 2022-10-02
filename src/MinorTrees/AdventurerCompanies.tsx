import { ActionIcon, Center, Divider, Drawer, Grid, MediaQuery, Tabs, Title, UnstyledButton } from '@mantine/core';
import { useSetState, useViewportSize } from '@mantine/hooks';
import { IconArrowLeft } from '@tabler/icons'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AvatarTroop from '../AvatarTroop';
import PendorDrawer from '../PendorDrawer';
import PendorSidebar from '../PendorSidebar';

export default function AdventurerCompanies() {

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
                        <Title order={1} align="center">Adventurer Companies</Title>
                    </MediaQuery>
                    <MediaQuery largerThan={480} styles={{ display: 'none' }}>
                        <Title order={3} align="center">Adventurer Companies</Title>
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
                        <Tabs.Tab value="third">Oswald de Fleur</Tabs.Tab>
                        <Tabs.Tab value="fourth">Griffonsword Adventure Company</Tabs.Tab>
                        <Tabs.Tab value="fifth">Kodan Ironsword</Tabs.Tab>
                    </Tabs.List>
                    {/* TODO: IMPLEMENT RADIO OR SEGMENTED CONTROL FOR MALE TAB */}

                    <Tabs.Panel value="first" pt="xs">
                        <Grid grow gutter="sm" justify="center" columns={24}>

                            <Grid.Col span={24}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('adventurer_companies', 'peasant_woman')}>
                                        <AvatarTroop faction={'adventurer_companies'} name={'peasant_woman'}></AvatarTroop>
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
                                    <UnstyledButton onClick={() => showStats('adventurer_companies', 'maiden_scout')}>
                                        <AvatarTroop faction={'adventurer_companies'} name={'maiden_scout'}></AvatarTroop>
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
                                    <UnstyledButton onClick={() => showStats('adventurer_companies', 'maiden_warder')}>
                                        <AvatarTroop faction={'adventurer_companies'} name={'maiden_warder'}></AvatarTroop>
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
                                    <UnstyledButton onClick={() => showStats('adventurer_companies', 'maiden_warrior')}>
                                        <AvatarTroop faction={'adventurer_companies'} name={'maiden_warrior'}></AvatarTroop>
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
                                    <UnstyledButton onClick={() => showStats('adventurer_companies', 'maiden_ranger')}>
                                        <AvatarTroop faction={'adventurer_companies'} name={'maiden_ranger'}></AvatarTroop>
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
                                    <UnstyledButton onClick={() => showStats('adventurer_companies', 'maiden_cavalry')}>
                                        <AvatarTroop faction={'adventurer_companies'} name={'maiden_cavalry'}></AvatarTroop>
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
                                    <UnstyledButton onClick={() => showStats('adventurer_companies', 'maiden_adventurer')}>
                                        <AvatarTroop faction={'adventurer_companies'} name={'maiden_adventurer'}></AvatarTroop>
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
                                    <UnstyledButton onClick={() => showStats('adventurer_companies', 'maiden_noble')}>
                                        <AvatarTroop faction={'adventurer_companies'} name={'maiden_noble'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={12}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('adventurer_companies', 'heroine_adventurer')}>
                                        <AvatarTroop faction={'adventurer_companies'} name={'heroine_adventurer'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                        </Grid>
                    </Tabs.Panel>
                    <Tabs.Panel value="second" pt="xs">
                        <Grid grow gutter="sm" justify="center" columns={24}>
                            <Grid.Col span={24}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('adventurer_companies', 'young_mercenary_sarleon')}>
                                        <AvatarTroop faction={'adventurer_companies'} name={'young_mercenary_sarleon'}></AvatarTroop>
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
                                    <UnstyledButton onClick={() => showStats('adventurer_companies', 'young_adventurer_sarleon')}>
                                        <AvatarTroop faction={'adventurer_companies'} name={'young_adventurer_sarleon'}></AvatarTroop>
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
                                    <UnstyledButton onClick={() => showStats('adventurer_companies', 'rogue_sarleon_squire')}>
                                        <AvatarTroop faction={'adventurer_companies'} name={'rogue_sarleon_squire'}></AvatarTroop>
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
                                    <UnstyledButton onClick={() => showStats('adventurer_companies', 'adventurer')}>
                                        <AvatarTroop faction={'adventurer_companies'} name={'adventurer'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={12}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('adventurer_companies', 'rogue_sarleon_knight')}>
                                        <AvatarTroop faction={'adventurer_companies'} name={'rogue_sarleon_knight'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={12} pt={0} pb={0} mt={-5}>
                                <Center>
                                    <Divider orientation="vertical" size="xl" sx={{ height: '10px' }} />
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={12} pt={0} pb={0} mt={-5}></Grid.Col>

                            <Grid.Col span={12}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('adventurer_companies', 'hero_adventurer')}>
                                        <AvatarTroop faction={'adventurer_companies'} name={'hero_adventurer'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={12}></Grid.Col>
                        </Grid>
                    </Tabs.Panel>
                    <Tabs.Panel value="third" pt="xs">
                        <Grid grow gutter="sm" justify="center" columns={24}>
                            <Grid.Col span={12}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('adventurer_companies', 'rogue_blackheart_squire')}>
                                        <AvatarTroop faction={'adventurer_companies'} name={'rogue_blackheart_squire'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={12}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('adventurer_companies', 'adventurer')}>
                                        <AvatarTroop faction={'adventurer_companies'} name={'adventurer'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={8} pt={0} pb={0}>
                                <Center>
                                    <Divider orientation="vertical" size="xl" sx={{ height: '20px' }} />
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={8} pt={0} pb={0}>
                                <Center>
                                    <Divider orientation="vertical" size="xl" sx={{ height: '20px' }} />
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={12}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('adventurer_companies', 'rogue_blackheart_knight')}>
                                        <AvatarTroop faction={'adventurer_companies'} name={'rogue_blackheart_knight'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={12}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('adventurer_companies', 'hero_adventurer')}>
                                        <AvatarTroop faction={'adventurer_companies'} name={'hero_adventurer'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                        </Grid>
                    </Tabs.Panel>
                    <Tabs.Panel value="fourth" pt="xs">
                        <Grid grow gutter="sm" justify="center" columns={24}>
                            <Grid.Col span={8}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('adventurer_companies', 'rogue_ravenstern_knight')}>
                                        <AvatarTroop faction={'adventurer_companies'} name={'rogue_ravenstern_knight'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={8}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('adventurer_companies', 'maiden_adventurer')}>
                                        <AvatarTroop faction={'adventurer_companies'} name={'maiden_adventurer'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={8}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('adventurer_companies', 'adventurer')}>
                                        <AvatarTroop faction={'adventurer_companies'} name={'adventurer'}></AvatarTroop>
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

                            <Grid.Col span={8}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('adventurer_companies', 'maiden_noble')}>
                                        <AvatarTroop faction={'adventurer_companies'} name={'maiden_noble'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={8}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('adventurer_companies', 'heroine_adventurer')}>
                                        <AvatarTroop faction={'adventurer_companies'} name={'heroine_adventurer'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                        </Grid>
                    </Tabs.Panel>
                    <Tabs.Panel value="fifth" pt="xs">
                        <Grid grow gutter="sm" justify="center" columns={24}>
                            <Grid.Col span={8}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('adventurer_companies', 'rogue_fierdsvain_squire')}>
                                        <AvatarTroop faction={'adventurer_companies'} name={'rogue_fierdsvain_squire'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={8}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('adventurer_companies', 'heavy_axeman')}>
                                        <AvatarTroop faction={'adventurer_companies'} name={'heavy_axeman'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={8}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('adventurer_companies', 'warrior')}>
                                        <AvatarTroop faction={'adventurer_companies'} name={'warrior'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={8} pt={0} pb={0}>
                                <Center>
                                    <Divider orientation="vertical" size="xl" sx={{ height: '20px' }} />
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={8} pt={0} pb={0}>
                                <Center>
                                    <Divider orientation="vertical" size="xl" sx={{ height: '20px' }} />
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={8}></Grid.Col>
                            <Grid.Col span={8}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('adventurer_companies', 'rogue_fierdsvain_knight')}>
                                        <AvatarTroop faction={'adventurer_companies'} name={'rogue_fierdsvain_knight'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            
                            <Grid.Col span={8}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('adventurer_companies', 'berserker')}>
                                        <AvatarTroop faction={'adventurer_companies'} name={'berserker'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            
                            <Grid.Col span={8}></Grid.Col>
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