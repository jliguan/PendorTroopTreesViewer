import { Center, Divider, Grid, Title } from '@mantine/core';
import AvatarTroop from '../AvatarTroop';

export default function TroopTreeEmpire() {
    return (
        <Grid grow gutter="sm" justify="center" columns={24} >

            <Grid.Col span={24}>
                <Title order={1} pl="lg">Empire</Title>
                <Divider my="sm" mb={0} />
            </Grid.Col>

            <Grid.Col span={24}>
                <Center sx={{ backgroundColor: '#F0E68C' }}>
                    <Title order={2}>Commoners</Title>
                </Center>
            </Grid.Col>

            <Grid.Col span={9}></Grid.Col>
            <Grid.Col span={6}>
                <Center>
                    <AvatarTroop faction={'empire'} name={'citizen'}></AvatarTroop>
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
                    <AvatarTroop faction={'empire'} name={'levy_recruit'}></AvatarTroop>
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
                    <AvatarTroop faction={'empire'} name={'levy_militia'}></AvatarTroop>
                </Center>
            </Grid.Col>



            <Grid.Col span={12}>
                <Center>
                    <AvatarTroop faction={'empire'} name={'levy_hunter'}></AvatarTroop>
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
                    <AvatarTroop faction={'empire'} name={'light_infantry'}></AvatarTroop>
                </Center>
            </Grid.Col>

            <Grid.Col span={6}>
                <Center>
                    <AvatarTroop faction={'empire'} name={'levy_skirmisher'}></AvatarTroop>
                </Center>
            </Grid.Col>

            <Grid.Col span={6}>
                <Center>
                    <AvatarTroop faction={'empire'} name={'levy_horseman'}></AvatarTroop>
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
                    <AvatarTroop faction={'empire'} name={'pikeman'}></AvatarTroop>
                </Center>
            </Grid.Col>

            <Grid.Col span={6}>
                <Center>
                    <AvatarTroop faction={'empire'} name={'heavy_infantry'}></AvatarTroop>
                </Center>
            </Grid.Col>

            <Grid.Col span={6}>
                <Center>
                    <AvatarTroop faction={'empire'} name={'crossbowman'}></AvatarTroop>
                </Center>
            </Grid.Col>

            <Grid.Col span={6}>
                <Center>
                    <AvatarTroop faction={'empire'} name={'cavalry'}></AvatarTroop>
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

            <Grid.Col span={6} pt={0} pb={0}>
                <Center>
                    <Divider orientation="vertical" size="xl" sx={{ height: '20px' }} />
                </Center>
            </Grid.Col>
            <Grid.Col span={6} pt={0} pb={0}></Grid.Col>

            <Grid.Col span={6}>
                <Center>
                    <AvatarTroop faction={'empire'} name={'armored_pikeman'}></AvatarTroop>
                </Center>
            </Grid.Col>

            <Grid.Col span={6}>
                <Center>
                    <AvatarTroop faction={'empire'} name={'legionnaire'}></AvatarTroop>
                </Center>
            </Grid.Col>

            <Grid.Col span={6}>
                <Center>
                    <AvatarTroop faction={'empire'} name={'armored_crossbowman'}></AvatarTroop>
                </Center>
            </Grid.Col>

            <Grid.Col span={6}></Grid.Col>

            <Grid.Col span={6} pt={0} pb={0}>
                <Center>
                    <Divider orientation="vertical" size="xl" sx={{ height: '20px' }} />
                </Center>
            </Grid.Col>

            <Grid.Col span={18}></Grid.Col>

            <Grid.Col span={6}>
                <Center>
                    <AvatarTroop faction={'empire'} name={'gladiator'}></AvatarTroop>
                </Center>
            </Grid.Col>

            <Grid.Col span={18}></Grid.Col>

            <Grid.Col span={24}>
                <Center sx={{ backgroundColor: '#F0E68C' }}>
                    <Title order={2}>Nobles</Title>
                </Center>
            </Grid.Col>

            <Grid.Col span={9}></Grid.Col>
            <Grid.Col span={6}>
                <Center>
                    <AvatarTroop faction={'empire'} name={'nobleman'}></AvatarTroop>
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
                    <AvatarTroop faction={'empire'} name={'noble_legionnaire_recruit'}></AvatarTroop>
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
                    <AvatarTroop faction={'empire'} name={'knight'}></AvatarTroop>
                </Center>
            </Grid.Col>
            <Grid.Col span={9}></Grid.Col>

        </Grid>
    );
}