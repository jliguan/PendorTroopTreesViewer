import { ActionIcon, Center, Divider, Grid, MediaQuery, Tabs, Title, UnstyledButton } from '@mantine/core';
import { useSetState } from '@mantine/hooks';
import { IconArrowLeft } from '@tabler/icons'
import { Link } from 'react-router-dom';
import AvatarTroop from '../AvatarTroop';
import PendorSidebar from '../PendorSidebar';

export default function TroopTreeFierdsvain() {

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
                        <Title order={1}>Fierdsvain</Title>
                    </MediaQuery>
                    <MediaQuery largerThan={480} styles={{ display: 'none' }}>
                        <Title order={2}>Fierdsvain</Title>
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
                                    <UnstyledButton onClick={() => setState({ faction: 'fierdsvain', name: 'recruit' })}>
                                        <AvatarTroop faction={'fierdsvain'} name={'recruit'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={9}></Grid.Col>

                            <Grid.Col span={24} pt={0} pb={0}>
                                <Center>
                                    <Divider orientation="vertical" size="xl" sx={{ height: '20px' }} />
                                </Center>
                            </Grid.Col>


                            <Grid.Col span={9}></Grid.Col>

                            <Grid.Col span={6}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'fierdsvain', name: 'militia' })}>
                                        <AvatarTroop faction={'fierdsvain'} name={'militia'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={9}></Grid.Col>

                            <Grid.Col span={24} pt={0} pb={0}>
                                <Center>
                                    <Divider orientation="vertical" size="xl" sx={{ height: '20px' }} />
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={9}></Grid.Col>
                            <Grid.Col span={6}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'fierdsvain', name: 'trained_militia' })}>
                                        <AvatarTroop faction={'fierdsvain'} name={'trained_militia'}></AvatarTroop>
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
                                    <UnstyledButton onClick={() => setState({ faction: 'fierdsvain', name: 'light_infantry' })}>
                                        <AvatarTroop faction={'fierdsvain'} name={'light_infantry'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={12}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'fierdsvain', name: 'light_skirmisher' })}>
                                        <AvatarTroop faction={'fierdsvain'} name={'light_skirmisher'}></AvatarTroop>
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
                                    <UnstyledButton onClick={() => setState({ faction: 'fierdsvain', name: 'axeman' })}>
                                        <AvatarTroop faction={'fierdsvain'} name={'axeman'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={6}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'fierdsvain', name: 'spear_maiden' })}>
                                        <AvatarTroop faction={'fierdsvain'} name={'spear_maiden'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={12}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'fierdsvain', name: 'skirmisher' })}>
                                        <AvatarTroop faction={'fierdsvain'} name={'skirmisher'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={6} pt={0} pb={0}>
                                <Center>
                                    <Divider orientation="vertical" size="xl" sx={{ height: '20px' }} />
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={6} pt={0} pb={0}>
                                <Center>
                                    <Divider orientation="vertical" size="xl" sx={{ height: '20px' }} />
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={12} pt={0} pb={0}>
                                <Center>
                                    <Divider orientation="vertical" size="xl" sx={{ height: '20px' }} />
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={6}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'fierdsvain', name: 'heavy_axeman' })}>
                                        <AvatarTroop faction={'fierdsvain'} name={'heavy_axeman'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={6}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'fierdsvain', name: 'huntress' })}>
                                        <AvatarTroop faction={'fierdsvain'} name={'huntress'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={12}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'fierdsvain', name: 'heavy_skirmisher' })}>
                                        <AvatarTroop faction={'fierdsvain'} name={'heavy_skirmisher'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={6} pt={0} pb={0}>
                                <Center>
                                    <Divider orientation="vertical" size="xl" sx={{ height: '20px' }} />
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={6} pt={0} pb={0}>
                            </Grid.Col>

                            <Grid.Col span={12} pt={0} pb={0}></Grid.Col>

                            <Grid.Col span={3} pt={0} pb={0}></Grid.Col>
                            <Grid.Col span={6} p={0} mt={-5}>
                                <Divider size={5} />
                            </Grid.Col>
                            <Grid.Col span={3} pt={0} pb={0}></Grid.Col>

                            <Grid.Col span={12} pt={0} pb={0}></Grid.Col>

                            <Grid.Col span={6} pt={0} pb={0} mt={-5}>
                                <Center>
                                    <Divider orientation="vertical" size="xl" sx={{ height: '20px' }} />
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={6} pt={0} pb={0} mt={-5}>
                                <Center>
                                    <Divider orientation="vertical" size="xl" sx={{ height: '20px' }} />
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={12} pt={0} pb={0}></Grid.Col>

                            <Grid.Col span={6}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'fierdsvain', name: 'huscarl' })}>
                                        <AvatarTroop faction={'fierdsvain'} name={'huscarl'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={6}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'fierdsvain', name: 'berserker' })}>
                                        <AvatarTroop faction={'fierdsvain'} name={'berserker'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={12}></Grid.Col>
                        </Grid>
                    </Tabs.Panel>

                    <Tabs.Panel value="second" pt="xs">
                        <Grid grow gutter="sm" justify="center" columns={24}>
                            <Grid.Col span={9}></Grid.Col>
                            <Grid.Col span={6}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'fierdsvain', name: 'noble' })}>
                                        <AvatarTroop faction={'fierdsvain'} name={'noble'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={9}></Grid.Col>

                            <Grid.Col span={24} pt={0} pb={0}>
                                <Center>
                                    <Divider orientation="vertical" size="xl" sx={{ height: '20px' }} />
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={9}></Grid.Col>
                            <Grid.Col span={6}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'fierdsvain', name: 'noble_warrior' })}>
                                        <AvatarTroop faction={'fierdsvain'} name={'noble_warrior'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={9}></Grid.Col>

                            <Grid.Col span={24} pt={0} pb={0}>
                                <Center>
                                    <Divider orientation="vertical" size="xl" sx={{ height: '20px' }} />
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={9}></Grid.Col>
                            <Grid.Col span={6}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'fierdsvain', name: 'hersir' })}>
                                        <AvatarTroop faction={'fierdsvain'} name={'hersir'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={9}></Grid.Col>
                        </Grid>
                    </Tabs.Panel>
                </Tabs>
            </Grid.Col>

            <PendorSidebar faction={state.faction} name={state.name} />

        </Grid>
    );
}