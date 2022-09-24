import { Center, Divider, Grid, Title } from '@mantine/core';
import AvatarTroop from '../AvatarTroop';

export default function TroopTreeRavenstern() {
    return (
        <Grid grow gutter="sm" justify="center" columns={24} >

            <Grid.Col span={24}>
                <Title order={1} pl="lg">Raventern</Title>
                <Divider my="sm" mb={0} />
            </Grid.Col>

            <Grid.Col span={24}>
                <Center sx={{ backgroundColor: '#4169E1' }}>
                    <Title order={2}>Commoners</Title>
                </Center>
            </Grid.Col>

            <Grid.Col span={9}></Grid.Col>
            <Grid.Col span={6}>
                <Center>
                    <AvatarTroop faction={'ravenstern'} name={'recruit'}></AvatarTroop>
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
                    <AvatarTroop faction={'ravenstern'} name={'militia'}></AvatarTroop>
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
                    <AvatarTroop faction={'ravenstern'} name={'trained_militia'}></AvatarTroop>
                </Center>
            </Grid.Col>



            <Grid.Col span={12}>
                <Center>
                    <AvatarTroop faction={'ravenstern'} name={'skirmisher'}></AvatarTroop>
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
                    <AvatarTroop faction={'ravenstern'} name={'footman'}></AvatarTroop>
                </Center>
            </Grid.Col>

            <Grid.Col span={12}>
                <Center>
                    <AvatarTroop faction={'ravenstern'} name={'archer'}></AvatarTroop>
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
                    <AvatarTroop faction={'ravenstern'} name={'man_at_arms'}></AvatarTroop>
                </Center>
            </Grid.Col>

            <Grid.Col span={6}>
                <Center>
                    <AvatarTroop faction={'ravenstern'} name={'horseman'}></AvatarTroop>
                </Center>
            </Grid.Col>

            <Grid.Col span={12}>
                <Center>
                    <AvatarTroop faction={'ravenstern'} name={'warden'}></AvatarTroop>
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
                    <AvatarTroop faction={'ravenstern'} name={'kierguard'}></AvatarTroop>
                </Center>
            </Grid.Col>

            <Grid.Col span={6}></Grid.Col>

            <Grid.Col span={6}>
                <Center>
                    <AvatarTroop faction={'ravenstern'} name={'ranger'}></AvatarTroop>
                </Center>
            </Grid.Col>

            <Grid.Col span={6}>
                <Center>
                    <AvatarTroop faction={'ravenstern'} name={'mtd_ranger'}></AvatarTroop>
                </Center>
            </Grid.Col>


            <Grid.Col span={24}>
                <Center sx={{ backgroundColor: '#4169E1' }}>
                    <Title order={2}>Nobles</Title>
                </Center>
            </Grid.Col>

            <Grid.Col span={9}></Grid.Col>
            <Grid.Col span={6}>
                <Center>
                    <AvatarTroop faction={'ravenstern'} name={'nobleman'}></AvatarTroop>
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
                    <AvatarTroop faction={'ravenstern'} name={'squire_at_arms'}></AvatarTroop>
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
                    <AvatarTroop faction={'ravenstern'} name={'knight'}></AvatarTroop>
                </Center>
            </Grid.Col>
            <Grid.Col span={12}>
                <Center>
                    <AvatarTroop faction={'ravenstern'} name={'highlander'}></AvatarTroop>
                </Center>
            </Grid.Col>

        </Grid>
    );
}