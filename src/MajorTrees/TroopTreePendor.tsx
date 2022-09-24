import { Center, Divider, Grid, Title } from '@mantine/core';
import AvatarTroop from '../AvatarTroop';

export default function TroopTreePendor() {
    return (
        <Grid grow gutter="sm" justify="center" columns={24} >

            <Grid.Col span={24}>
                <Title order={1} pl="lg">Pendor</Title>
                <Divider my="sm" mb={0} />
            </Grid.Col>

            <Grid.Col span={24}>
                <Center sx={{ backgroundColor: '#A9A9A9' }}>
                    <Title order={2}>Commoners</Title>
                </Center>
            </Grid.Col>

            <Grid.Col span={9}></Grid.Col>
            <Grid.Col span={6}>
                <Center>
                    <AvatarTroop faction={'pendor'} name={'recruit'}></AvatarTroop>
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
                    <AvatarTroop faction={'pendor'} name={'militia'}></AvatarTroop>
                </Center>
            </Grid.Col>

            <Grid.Col span={12}>
                <Center>
                    <AvatarTroop faction={'pendor'} name={'light_bowman'}></AvatarTroop>
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
                    <AvatarTroop faction={'pendor'} name={'footman'}></AvatarTroop>
                </Center>
            </Grid.Col>

            <Grid.Col span={12}>
                <Center>
                    <AvatarTroop faction={'pendor'} name={'heavy_bowman'}></AvatarTroop>
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
                    <AvatarTroop faction={'pendor'} name={'swordsman'}></AvatarTroop>
                </Center>
            </Grid.Col>

            <Grid.Col span={6}>
                <Center>
                    <AvatarTroop faction={'pendor'} name={'spearman'}></AvatarTroop>
                </Center>
            </Grid.Col>

            <Grid.Col span={12}>
                <Center>
                    <AvatarTroop faction={'pendor'} name={'armored_bowman'}></AvatarTroop>
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
                    <AvatarTroop faction={'pendor'} name={'man_at_arms'}></AvatarTroop>
                </Center>
            </Grid.Col>

            <Grid.Col span={6}>
                <Center>
                    <AvatarTroop faction={'pendor'} name={'heavy_spearman'}></AvatarTroop>
                </Center>
            </Grid.Col>

            <Grid.Col span={6}>
                <Center>
                    <AvatarTroop faction={'pendor'} name={'cavalry'}></AvatarTroop>
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
                    <AvatarTroop faction={'pendor'} name={'bladesman'}></AvatarTroop>
                </Center>
            </Grid.Col>

            <Grid.Col span={6}></Grid.Col>

            <Grid.Col span={6}>
                <Center>
                    <AvatarTroop faction={'pendor'} name={'mtd_man_at_arms'}></AvatarTroop>
                </Center>
            </Grid.Col>

            <Grid.Col span={6}></Grid.Col>


            <Grid.Col span={24}>
                <Center sx={{ backgroundColor: '#A9A9A9' }}>
                    <Title order={2}>Nobles</Title>
                </Center>
            </Grid.Col>

            <Grid.Col span={9}></Grid.Col>
            <Grid.Col span={6}>
                <Center>
                    <AvatarTroop faction={'pendor'} name={'nobleman'}></AvatarTroop>
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
                    <AvatarTroop faction={'pendor'} name={'squire'}></AvatarTroop>
                </Center>
            </Grid.Col>

            <Grid.Col span={12}>
                <Center>
                    <AvatarTroop faction={'pendor'} name={'noble_bowman'}></AvatarTroop>
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
                    <AvatarTroop faction={'pendor'} name={'knight'}></AvatarTroop>
                </Center>
            </Grid.Col>

            <Grid.Col span={6}>
                <Center>
                    <AvatarTroop faction={'pendor'} name={'foot_knight'}></AvatarTroop>
                </Center>
            </Grid.Col>

            <Grid.Col span={12}>
                <Center>
                    <AvatarTroop faction={'pendor'} name={'black_archer'}></AvatarTroop>
                </Center>
            </Grid.Col>



        </Grid>
    );
}