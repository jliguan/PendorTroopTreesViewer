import { ActionIcon, Center, Divider, Drawer, Grid, MediaQuery, Tabs, Title, UnstyledButton } from '@mantine/core';
import { useSetState, useViewportSize } from '@mantine/hooks';
import { IconArrowLeft } from '@tabler/icons'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AvatarTroop from '../AvatarTroop';
import PendorDrawer from '../PendorDrawer';
import PendorSidebar from '../PendorSidebar';

export default function SnakeCult() {

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

            <Grid.Col span={6}>
                <ActionIcon size="xl" variant="transparent" component={Link} to="/">
                    <IconArrowLeft />
                </ActionIcon>
            </Grid.Col>
            <Grid.Col span={12}>
                <Center>
                    <MediaQuery smallerThan={480} styles={{ display: 'none' }}>
                        <Title order={1}>Snake Cult</Title>
                    </MediaQuery>
                    <MediaQuery largerThan={480} styles={{ display: 'none' }}>
                        <Title order={3}>Snake Cult</Title>
                    </MediaQuery>
                </Center>

            </Grid.Col>
            <Grid.Col span={6}></Grid.Col>

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
                                    <UnstyledButton onClick={() => showStats('snake_cult', 'follower')}>
                                        <AvatarTroop faction={'snake_cult'} name={'follower'}></AvatarTroop>
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
                                    <UnstyledButton onClick={() => showStats('snake_cult', 'armsman')}>
                                        <AvatarTroop faction={'snake_cult'} name={'armsman'}></AvatarTroop>
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
                                    <UnstyledButton onClick={() => showStats('snake_cult', 'cobra_warrior')}>
                                        <AvatarTroop faction={'snake_cult'} name={'cobra_warrior'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>


                        </Grid>
                    </Tabs.Panel>
                    <Tabs.Panel value="second" pt="xs">
                        <Grid grow gutter="sm" justify="center" columns={24}>
                            <Grid.Col span={8}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('snake_cult', 'dread_legion_infantry')}>
                                        <AvatarTroop faction={'snake_cult'} name={'dread_legion_infantry'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={8}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('snake_cult', 'devoured')}>
                                        <AvatarTroop faction={'snake_cult'} name={'devoured'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={8}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('snake_cult', 'serpent_priestesses')}>
                                        <AvatarTroop faction={'snake_cult'} name={'serpent_priestesses'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={8}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('snake_cult', 'anaconda_knight')}>
                                        <AvatarTroop faction={'snake_cult'} name={'anaconda_knight'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={8}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('snake_cult', 'fallen_melitine_noble')}>
                                        <AvatarTroop faction={'snake_cult'} name={'fallen_melitine_noble'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={8}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('snake_cult', 'azi_dahaka_serpent_priestess')}>
                                        <AvatarTroop faction={'snake_cult'} name={'azi_dahaka_serpent_priestess'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={8}>
                                <Center>
                                    <UnstyledButton onClick={() => showStats('snake_cult', 'asp_vanguard')}>
                                        <AvatarTroop faction={'snake_cult'} name={'asp_vanguard'}></AvatarTroop>
                                    </UnstyledButton>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={16}></Grid.Col>
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