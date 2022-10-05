import { ActionIcon, Center, Divider, Drawer, Grid, MediaQuery, Tabs, Title, UnstyledButton } from '@mantine/core';
import { useSetState, useViewportSize } from '@mantine/hooks';
import { IconArrowLeft } from '@tabler/icons'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AvatarTroop from '../AvatarTroop';
import PendorDrawer from '../PendorDrawer';
import PendorSidebar from '../PendorSidebar';

export default function Clarion() {

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
                        <Title order={1} align="center">Order of the Clarion Call</Title>
                    </MediaQuery>
                    <MediaQuery largerThan={480} styles={{ display: 'none' }}>
                        <Title order={3} align="center">Order of the Clarion Call</Title>
                    </MediaQuery>
                </Center>

            </Grid.Col>
            <Grid.Col span={4}></Grid.Col>

            <Grid.Col span={24} p={0}>
                <Divider my="sm" mb={0} mt={0} />
            </Grid.Col>

            <Grid.Col span={24} mt={10}>
                <Grid grow gutter="sm" justify="center" columns={24}>

                    <Grid.Col span={12}>
                        <Center>
                            <UnstyledButton onClick={() => showStats('clarion_call', 'larian_sentinel')}>
                                <AvatarTroop faction={'clarion_call'} name={'larian_sentinel'}></AvatarTroop>
                            </UnstyledButton>
                        </Center>
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <Center>
                            <UnstyledButton onClick={() => showStats('clarion_call', 'ranger_of_the_clarion_call')}>
                                <AvatarTroop faction={'clarion_call'} name={'ranger_of_the_clarion_call'}></AvatarTroop>
                            </UnstyledButton>
                        </Center>
                    </Grid.Col>
                </Grid>

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