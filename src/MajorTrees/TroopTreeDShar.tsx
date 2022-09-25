import { ActionIcon, Center, Divider, Grid, MediaQuery, Tabs, Title, UnstyledButton } from '@mantine/core';
import { useSetState } from '@mantine/hooks';
import { IconArrowLeft } from '@tabler/icons'
import { Link } from 'react-router-dom';
import AvatarTroop from '../AvatarTroop';
import PendorSidebar from '../PendorSidebar';

export default function TroopTreeDShar() {

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
                        <Title order={1}>D'Shar</Title>
                    </MediaQuery>
                    <MediaQuery largerThan={480} styles={{ display: 'none' }}>
                        <Title order={2}>D'Shar</Title>
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
                        <Grid grow gutter="sm" justify="center" columns={24}>
                            <Grid.Col span={9}></Grid.Col>
                            <Grid.Col span={6}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'dshar', name: 'tribesman' })}>
                                        <AvatarTroop faction={'dshar'} name={'tribesman'}></AvatarTroop>
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
                                    <UnstyledButton onClick={() => setState({ faction: 'dshar', name: 'hunter' })}>
                                        <AvatarTroop faction={'dshar'} name={'hunter'}></AvatarTroop>
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
                                    <UnstyledButton onClick={() => setState({ faction: 'dshar', name: 'conscript' })}>
                                        <AvatarTroop faction={'dshar'} name={'conscript'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>



                            <Grid.Col span={12}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'dshar', name: 'horseman' })}>
                                        <AvatarTroop faction={'dshar'} name={'horseman'}></AvatarTroop>
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


                            <Grid.Col span={12} pt={0} pb={0}></Grid.Col>
                            <Grid.Col span={3} pt={0} pb={0}></Grid.Col>
                            <Grid.Col span={6} p={0}>
                                <Divider size={5} />
                            </Grid.Col>
                            <Grid.Col span={3} pt={0} pb={0}></Grid.Col>

                            <Grid.Col span={12} pt={0} pb={0} mt={-5}>
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

                            <Grid.Col span={12}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'dshar', name: 'desert_fighter' })}>
                                        <AvatarTroop faction={'dshar'} name={'desert_fighter'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={6}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'dshar', name: 'raider' })}>
                                        <AvatarTroop faction={'dshar'} name={'raider'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={6}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'dshar', name: 'reaver' })}>
                                        <AvatarTroop faction={'dshar'} name={'reaver'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={12} pt={0} pb={0}>
                                <Center>
                                    <Divider orientation="vertical" size="xl" sx={{ height: '10px' }} />
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


                            <Grid.Col span={6}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'dshar', name: 'warrior' })}>
                                        <AvatarTroop faction={'dshar'} name={'warrior'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={6}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'dshar', name: 'desert_hunter' })}>
                                        <AvatarTroop faction={'dshar'} name={'desert_hunter'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={6}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'dshar', name: 'ghazi_stalker' })}>
                                        <AvatarTroop faction={'dshar'} name={'ghazi_stalker'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>


                            <Grid.Col span={6}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'dshar', name: 'ghazi_reaver' })}>
                                        <AvatarTroop faction={'dshar'} name={'ghazi_reaver'}></AvatarTroop>
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
                            <Grid.Col span={12} pt={0} pb={0}></Grid.Col>

                            <Grid.Col span={9} pt={0} pb={0}></Grid.Col>
                            <Grid.Col span={6} p={0} mt={-5}>
                                <Divider size={5} />
                            </Grid.Col>
                            <Grid.Col span={9} pt={0} pb={0}></Grid.Col>


                            <Grid.Col span={6} pt={0} pb={0}>
                                <Center>
                                    <Divider orientation="vertical" size="xl" sx={{ height: '10px' }} />
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={6} pt={0} pb={0}></Grid.Col>

                            <Grid.Col span={6} pt={0} pb={0} mt={-5}>
                                <Center>
                                    <Divider orientation="vertical" size="xl" sx={{ height: '15px' }} />
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={6} pt={0} pb={0}></Grid.Col>


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
                            <Grid.Col span={6} pt={0} pb={0} mt={-5}>
                                <Center>
                                    <Divider orientation="vertical" size="xl" sx={{ height: '10px' }} />
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={6} pt={0} pb={0}></Grid.Col>




                            <Grid.Col span={6}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'dshar', name: 'ghazi_dervish' })}>
                                        <AvatarTroop faction={'dshar'} name={'ghazi_dervish'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={6}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'dshar', name: 'ghazi_spearman' })}>
                                        <AvatarTroop faction={'dshar'} name={'ghazi_spearman'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={6}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'dshar', name: 'ghazi_marksman' })}>
                                        <AvatarTroop faction={'dshar'} name={'ghazi_marksman'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={6}></Grid.Col>
                        </Grid>
                    </Tabs.Panel>
                    <Tabs.Panel value="second" pt="xs">
                        <Grid grow gutter="sm" justify="center" columns={24}>
                            <Grid.Col span={9}></Grid.Col>
                            <Grid.Col span={6}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'dshar', name: 'nobleman' })}>
                                        <AvatarTroop faction={'dshar'} name={'nobleman'}></AvatarTroop>
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
                                    <UnstyledButton onClick={() => setState({ faction: 'dshar', name: 'noble_rider' })}>
                                        <AvatarTroop faction={'dshar'} name={'noble_rider'}></AvatarTroop>
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
                                    <UnstyledButton onClick={() => setState({ faction: 'dshar', name: 'noble_cavalry' })}>
                                        <AvatarTroop faction={'dshar'} name={'noble_cavalry'}></AvatarTroop>
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