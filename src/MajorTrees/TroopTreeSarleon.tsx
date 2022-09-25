import { ActionIcon, Center, Divider, Grid, MediaQuery, Tabs, Title, UnstyledButton } from '@mantine/core';
import { useSetState } from '@mantine/hooks';
import { IconArrowLeft } from '@tabler/icons'
import { Link } from 'react-router-dom';
import AvatarTroop from '../AvatarTroop';
import PendorSidebar from '../PendorSidebar';

export default function TroopTreeSarleon() {

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
                        <Title order={1}>Sarleon</Title>
                    </MediaQuery>
                    <MediaQuery largerThan={480} styles={{ display: 'none' }}>
                        <Title order={2}>Sarleon</Title>
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
                                    <UnstyledButton onClick={() => setState({ faction: 'sarleon', name: 'recruit' })}>
                                        <AvatarTroop faction={'sarleon'} name={'recruit'}></AvatarTroop>
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
                                    <UnstyledButton onClick={() => setState({ faction: 'sarleon', name: 'militia' })}>
                                        <AvatarTroop faction={'sarleon'} name={'militia'}></AvatarTroop>
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
                                    <UnstyledButton onClick={() => setState({ faction: 'sarleon', name: 'trained_militia' })}>
                                        <AvatarTroop faction={'sarleon'} name={'trained_militia'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>



                            <Grid.Col span={12}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'sarleon', name: 'skirmisher' })}>
                                        <AvatarTroop faction={'sarleon'} name={'skirmisher'}></AvatarTroop>
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
                                    <UnstyledButton onClick={() => setState({ faction: 'sarleon', name: 'footman' })}>
                                        <AvatarTroop faction={'sarleon'} name={'footman'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={12}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'sarleon', name: 'longbowman' })}>
                                        <AvatarTroop faction={'sarleon'} name={'longbowman'}></AvatarTroop>
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
                                    <UnstyledButton onClick={() => setState({ faction: 'sarleon', name: 'armored_footman' })}>
                                        <AvatarTroop faction={'sarleon'} name={'armored_footman'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={12}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'sarleon', name: 'armored_longbowman' })}>
                                        <AvatarTroop faction={'sarleon'} name={'armored_longbowman'}></AvatarTroop>
                                    </UnstyledButton>
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
                            <Grid.Col span={12} pt={0} pb={0}> </Grid.Col>

                            <Grid.Col span={6}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'sarleon', name: 'man_at_arms' })}>
                                        <AvatarTroop faction={'sarleon'} name={'man_at_arms'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={6}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'sarleon', name: 'cavalry' })}>
                                        <AvatarTroop faction={'sarleon'} name={'cavalry'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={12}>
                            </Grid.Col>

                            <Grid.Col span={6} pt={0} pb={0}>
                                <Center>
                                    <Divider orientation="vertical" size="xl" sx={{ height: '20px' }} />
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={18} ></Grid.Col>


                            <Grid.Col span={6}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'sarleon', name: 'halberdier' })}>
                                        <AvatarTroop faction={'sarleon'} name={'halberdier'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>

                            <Grid.Col span={18}>
                            </Grid.Col>
                        </Grid>
                    </Tabs.Panel>

                    <Tabs.Panel value="second" pt="xs">
                        <Grid grow gutter="sm" justify="center" columns={24} >
                            <Grid.Col span={9}></Grid.Col>
                            <Grid.Col span={6}>
                                <Center>
                                    <UnstyledButton onClick={() => setState({ faction: 'sarleon', name: 'nobleman' })}>
                                        <AvatarTroop faction={'sarleon'} name={'nobleman'}></AvatarTroop>
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
                                    <UnstyledButton onClick={() => setState({ faction: 'sarleon', name: 'squire_at_arms' })}>
                                        <AvatarTroop faction={'sarleon'} name={'squire_at_arms'}></AvatarTroop>
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
                                    <UnstyledButton onClick={() => setState({ faction: 'sarleon', name: 'knight' })}>
                                        <AvatarTroop faction={'sarleon'} name={'knight'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={9}></Grid.Col>
                        </Grid>
                    </Tabs.Panel>
                </Tabs>
            </Grid.Col>

            <PendorSidebar faction={state.faction} name={state.name} />

        </Grid >
    );
}