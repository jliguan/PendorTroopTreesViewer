import { Center, Divider, Grid, Title } from '@mantine/core';
import AvatarTroop from '../AvatarTroop';

export default function TroopTreeSarleon() {
    return (
        <Grid grow gutter="sm" justify="center" columns={24} >

            <Grid.Col span={24}>
                <Title order={1} pl="lg">Sarleon</Title>
                <Divider my="sm" mb={0} />
            </Grid.Col>

            <Grid.Col span={24}>
                <Center sx={{ backgroundColor: '#8B0000' }}>
                    <Title order={2}>Commoners</Title>
                </Center>
            </Grid.Col>

            <Grid.Col span={9}></Grid.Col>
            <Grid.Col span={6}>
                <Center>
                    <AvatarTroop faction={'sarleon'} name={'recruit'}></AvatarTroop>
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
                    <AvatarTroop faction={'sarleon'} name={'militia'}></AvatarTroop>
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
                    <AvatarTroop faction={'sarleon'} name={'trained_militia'}></AvatarTroop>
                </Center>
            </Grid.Col>



            <Grid.Col span={12}>
                <Center>
                    <AvatarTroop faction={'sarleon'} name={'skirmisher'}></AvatarTroop>
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
                    <AvatarTroop faction={'sarleon'} name={'footman'}></AvatarTroop>
                </Center>
            </Grid.Col>

            <Grid.Col span={12}>
                <Center>
                    <AvatarTroop faction={'sarleon'} name={'longbowman'}></AvatarTroop>
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
                    <AvatarTroop faction={'sarleon'} name={'armored_footman'}></AvatarTroop>
                </Center>
            </Grid.Col>

            <Grid.Col span={12}>
                <Center>
                    <AvatarTroop faction={'sarleon'} name={'armored_longbowman'}></AvatarTroop>
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
                    <AvatarTroop faction={'sarleon'} name={'man_at_arms'}></AvatarTroop>
                </Center>
            </Grid.Col>

            <Grid.Col span={6}>
                <Center>
                    <AvatarTroop faction={'sarleon'} name={'cavalry'}></AvatarTroop>
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
                    <AvatarTroop faction={'sarleon'} name={'halberdier'}></AvatarTroop>
                </Center>
            </Grid.Col>

            <Grid.Col span={18}>
            </Grid.Col>

            <Grid.Col span={24}>
                <Center sx={{ backgroundColor: '#8B0000' }}>
                    <Title order={2}>Nobles</Title>
                </Center>
            </Grid.Col>

            <Grid.Col span={9}></Grid.Col>
            <Grid.Col span={6}>
                <Center>
                    <AvatarTroop faction={'sarleon'} name={'nobleman'}></AvatarTroop>
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
                    <AvatarTroop faction={'sarleon'} name={'squire_at_arms'}></AvatarTroop>
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
                    <AvatarTroop faction={'sarleon'} name={'knight'}></AvatarTroop>
                </Center>
            </Grid.Col>
            <Grid.Col span={9}></Grid.Col>

        </Grid>
    );
}