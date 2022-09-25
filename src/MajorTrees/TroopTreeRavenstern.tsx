import { ActionIcon, Aside, Button, Center, Divider, Grid, Tabs, Title, UnstyledButton } from '@mantine/core';
import { useSetState } from '@mantine/hooks';
import { IconArrowLeft } from '@tabler/icons'
import { Link } from 'react-router-dom';
import AvatarTroop from '../AvatarTroop';
import PendorSidebar from '../PendorSidebar';

export default function TroopTreeRavenstern() {

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
                    <Title order={1}>Ravenstern</Title>
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
                                    <UnstyledButton onClick={() => setState({ faction: 'ravenstern', name: 'recruit' })}>
                                        <AvatarTroop faction={'ravenstern'} name={'recruit'}></AvatarTroop>
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
                                    <UnstyledButton onClick={() => setState({ faction: 'ravenstern', name: 'militia' })}>
                                        <AvatarTroop faction={'ravenstern'} name={'militia'}></AvatarTroop>
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
                                    <UnstyledButton onClick={() => setState({ faction: 'ravenstern', name: 'trained_militia' })}>
                                        <AvatarTroop faction={'ravenstern'} name={'trained_militia'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>



                            <Grid.Col span={12}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'ravenstern', name: 'skirmisher' })}>
                                        <AvatarTroop faction={'ravenstern'} name={'skirmisher'}></AvatarTroop>
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
                                    <UnstyledButton onClick={() => setState({ faction: 'ravenstern', name: 'footman' })}>
                                        <AvatarTroop faction={'ravenstern'} name={'footman'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={12}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'ravenstern', name: 'archer' })}>
                                        <AvatarTroop faction={'ravenstern'} name={'archer'}></AvatarTroop>
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
                                    <UnstyledButton onClick={() => setState({ faction: 'ravenstern', name: 'man_at_arms' })}>
                                        <AvatarTroop faction={'ravenstern'} name={'man_at_arms'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={6}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'ravenstern', name: 'horseman' })}>
                                        <AvatarTroop faction={'ravenstern'} name={'horseman'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={12}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'ravenstern', name: 'warden' })}>
                                        <AvatarTroop faction={'ravenstern'} name={'warden'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={6} pt={0} pb={0}>
                                <Center>
                                    <Divider orientation="vertical" size="xl" sx={{ height: '10px' }} />
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={6} pt={0} pb={0}></Grid.Col>
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

                            <Grid.Col span={6} pt={0} pb={0} mt={-5}>
                                <Center>
                                    <Divider orientation="vertical" size="xl" sx={{ height: '10px' }} />
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={6} pt={0} pb={0}> </Grid.Col>

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
                                    <UnstyledButton onClick={() => setState({ faction: 'ravenstern', name: 'kierguard' })}>
                                        <AvatarTroop faction={'ravenstern'} name={'kierguard'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={6}></Grid.Col>

                            <Grid.Col span={6}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'ravenstern', name: 'ranger' })}>
                                        <AvatarTroop faction={'ravenstern'} name={'ranger'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={6}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'ravenstern', name: 'mtd_ranger' })}>
                                        <AvatarTroop faction={'ravenstern'} name={'mtd_ranger'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                        </Grid>
                    </Tabs.Panel>

                    <Tabs.Panel value="second" pt="xs">
                        <Grid grow gutter="sm" justify="center" columns={24} >
                            <Grid.Col span={9}></Grid.Col>
                            <Grid.Col span={6}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'ravenstern', name: 'nobleman' })}>
                                        <AvatarTroop faction={'ravenstern'} name={'nobleman'}></AvatarTroop>
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
                                    <UnstyledButton onClick={() => setState({ faction: 'ravenstern', name: 'squire_at_arms' })}>
                                        <AvatarTroop faction={'ravenstern'} name={'squire_at_arms'}></AvatarTroop>
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
                                    <UnstyledButton onClick={() => setState({ faction: 'ravenstern', name: 'knight' })}>
                                        <AvatarTroop faction={'ravenstern'} name={'knight'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={12}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'ravenstern', name: 'highlander' })}>
                                        <AvatarTroop faction={'ravenstern'} name={'highlander'}></AvatarTroop>
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