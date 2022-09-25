import { ActionIcon, Center, Divider, Grid, MediaQuery, Tabs, Title, UnstyledButton } from '@mantine/core';
import { useSetState } from '@mantine/hooks';
import { IconArrowLeft } from '@tabler/icons'
import { Link } from 'react-router-dom';
import AvatarTroop from '../AvatarTroop';
import PendorSidebar from '../PendorSidebar';

export default function TroopTreePendor() {

    const [state, setState] = useSetState({ faction: '', name: '' });

    return (
        <Grid grow gutter="sm" justify="center" columns={24} >

            <Grid.Col span={8}>
                <ActionIcon size="xl" variant="transparent" component={Link} to="/">
                    <IconArrowLeft />
                </ActionIcon>
            </Grid.Col>
            <Grid.Col span={8}>
                <Center>
                    <MediaQuery smallerThan={480} styles={{ display: 'none' }}>
                        <Title order={1}>Pendor</Title>
                    </MediaQuery>
                    <MediaQuery largerThan={480} styles={{ display: 'none' }}>
                        <Title order={2}>Pendor</Title>
                    </MediaQuery>
                </Center>

            </Grid.Col>
            <Grid.Col span={8}></Grid.Col>

            <Grid.Col span={24} p={0}>
                <Divider my="sm" mb={0} mt={0} />
            </Grid.Col>

            <Grid.Col span={24}>
                <Tabs defaultValue="first">
                    <Tabs.List>
                        <Tabs.Tab value="first">Commoners</Tabs.Tab>
                        <Tabs.Tab value="second">Nobles</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="first" pt="xs">

                        <Grid grow gutter="sm" justify="center" columns={24} >
                            <Grid.Col span={9}></Grid.Col>
                            <Grid.Col span={6}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'pendor', name: 'recruit' })}>
                                        <AvatarTroop faction={'pendor'} name={'recruit'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={9}></Grid.Col>

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
                                    <UnstyledButton onClick={() => setState({ faction: 'pendor', name: 'militia' })}>
                                        <AvatarTroop faction={'pendor'} name={'militia'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={12}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'pendor', name: 'light_bowman' })}>
                                        <AvatarTroop faction={'pendor'} name={'light_bowman'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={12} pt={0} pb={0}>
                                <Center>
                                    <Divider orientation="vertical" size="xl" sx={{ height: '20px' }} />
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={12} pt={0} pb={0}>
                                <Center>
                                    <Divider orientation="vertical" size="xl" sx={{ height: '20px' }} />
                                </Center>
                            </Grid.Col>


                            <Grid.Col span={12}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'pendor', name: 'footman' })}>
                                        <AvatarTroop faction={'pendor'} name={'footman'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={12}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'pendor', name: 'heavy_bowman' })}>
                                        <AvatarTroop faction={'pendor'} name={'heavy_bowman'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>


                            <Grid.Col span={12} pt={0} pb={0}>
                                <Center>
                                    <Divider orientation="vertical" size="xl" sx={{ height: '10px' }} />
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={12} pt={0} pb={0}>
                                <Center>
                                    <Divider orientation="vertical" size="xl" sx={{ height: '10px' }} />
                                </Center>
                            </Grid.Col>


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

                            <Grid.Col span={12} pt={0} pb={0} mt={-5}>
                                <Center>
                                    <Divider orientation="vertical" size="xl" sx={{ height: '10px' }} />
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'pendor', name: 'swordsman' })}>
                                        <AvatarTroop faction={'pendor'} name={'swordsman'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={6}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'pendor', name: 'spearman' })}>
                                        <AvatarTroop faction={'pendor'} name={'spearman'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={12}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'pendor', name: 'armored_bowman' })}>
                                        <AvatarTroop faction={'pendor'} name={'armored_bowman'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={6} pt={0} pb={0}>
                                <Center>
                                    <Divider orientation="vertical" size="xl" sx={{ height: '10px' }} />
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={6} pt={0} pb={0}>
                                <Center>
                                    <Divider orientation="vertical" size="xl" sx={{ height: '10px' }} />
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={12}></Grid.Col>

                            <Grid.Col span={9} p={0}></Grid.Col>
                            <Grid.Col span={6} p={0} mt={-5}>
                                <Divider size={5} />
                            </Grid.Col>
                            <Grid.Col span={9} p={0}></Grid.Col>

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

                            <Grid.Col span={6} pt={0} pb={0} mt={-5}>
                                <Center>
                                    <Divider orientation="vertical" size="xl" sx={{ height: '10px' }} />
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={6} p={0}></Grid.Col>

                            <Grid.Col span={6}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'pendor', name: 'man_at_arms' })}>
                                        <AvatarTroop faction={'pendor'} name={'man_at_arms'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={6}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'pendor', name: 'heavy_spearman' })}>
                                        <AvatarTroop faction={'pendor'} name={'heavy_spearman'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={6}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'pendor', name: 'cavalry' })}>
                                        <AvatarTroop faction={'pendor'} name={'cavalry'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={6}></Grid.Col>
                            <Grid.Col span={6} pt={0} pb={0}>
                                <Center>
                                    <Divider orientation="vertical" size="xl" sx={{ height: '20px' }} />
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={6}></Grid.Col>
                            <Grid.Col span={6} pt={0} pb={0}>
                                <Center>
                                    <Divider orientation="vertical" size="xl" sx={{ height: '20px' }} />
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={6}></Grid.Col>


                            <Grid.Col span={6}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'pendor', name: 'bladesman' })}>
                                        <AvatarTroop faction={'pendor'} name={'bladesman'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={6}></Grid.Col>

                            <Grid.Col span={6}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'pendor', name: 'mtd_man_at_arms' })}>
                                        <AvatarTroop faction={'pendor'} name={'mtd_man_at_arms'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={6}></Grid.Col>
                        </Grid>
                    </Tabs.Panel>

                    <Tabs.Panel value="second" pt="xs">
                        <Grid grow gutter="sm" justify="center" columns={24} >
                            <Grid.Col span={9}></Grid.Col>
                            <Grid.Col span={6}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'pendor', name: 'nobleman' })}>
                                        <AvatarTroop faction={'pendor'} name={'nobleman'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={9}></Grid.Col>

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
                                    <UnstyledButton onClick={() => setState({ faction: 'pendor', name: 'squire' })}>
                                        <AvatarTroop faction={'pendor'} name={'squire'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={12}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'pendor', name: 'noble_bowman' })}>
                                        <AvatarTroop faction={'pendor'} name={'noble_bowman'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={12} pt={0} pb={0}>
                                <Center>
                                    <Divider orientation="vertical" size="xl" sx={{ height: '10px' }} />
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={12} pt={0} pb={0}>
                                <Center>
                                    <Divider orientation="vertical" size="xl" sx={{ height: '10px' }} />
                                </Center>
                            </Grid.Col>


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

                            <Grid.Col span={12} pt={0} pb={0} mt={-5}>
                                <Center>
                                    <Divider orientation="vertical" size="xl" sx={{ height: '10px' }} />
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={6}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'pendor', name: 'knight' })}>
                                        <AvatarTroop faction={'pendor'} name={'knight'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={6}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'pendor', name: 'foot_knight' })}>
                                        <AvatarTroop faction={'pendor'} name={'foot_knight'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={12}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'pendor', name: 'black_archer' })}>
                                        <AvatarTroop faction={'pendor'} name={'black_archer'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                        </Grid>
                    </Tabs.Panel>
                </Tabs>
            </Grid.Col>

            <PendorSidebar faction={state.faction} name={state.name} />

        </Grid>
    );
}