import { Grid, Indicator } from '@mantine/core';
import FactionCard from '../FactionCard';

export default function TroopTreeSarleon() {

    return (
        <Grid grow gutter="sm" justify="center" columns={24}>

            <Grid.Col span={9}></Grid.Col>
            <Grid.Col span={6} >
                <Indicator position="bottom-center" radius="xs" size={12} color="dark.2">
                    <FactionCard faction={'sarleon'} name={'recruit'}></FactionCard>
                </Indicator>
            </Grid.Col>
            <Grid.Col span={9}></Grid.Col>

            <Grid.Col span={9}></Grid.Col>
            <Grid.Col span={6}>
                <Indicator position="bottom-start" radius="xs" size={12} color="dark.2">
                    <Indicator position="bottom-end" radius="xs" size={12} color="dark.2">
                            <FactionCard faction={'sarleon'} name={'militia'}></FactionCard>
                    </Indicator>
                </Indicator>
            </Grid.Col>
            <Grid.Col span={9}></Grid.Col>

            <Grid.Col span={3}></Grid.Col>
            <Grid.Col span={6}>
                <Indicator position="bottom-center" radius="xs" size={12} color="dark.2">
                        <FactionCard faction={'sarleon'} name={'trained_militia'}></FactionCard>
                </Indicator>
            </Grid.Col>
            <Grid.Col span={3}></Grid.Col>

            <Grid.Col span={3}></Grid.Col>
            <Grid.Col span={6}>
                <Indicator position="bottom-center" radius="xs" size={12} color="dark.2">
                        <FactionCard faction={'sarleon'} name={'skirmisher'}></FactionCard>
                </Indicator>
            </Grid.Col>
            <Grid.Col span={3}></Grid.Col>

            <Grid.Col span={3}></Grid.Col>
            <Grid.Col span={6}>
                <Indicator position="bottom-center" radius="xs" size={12} color="dark.2">
                        <FactionCard faction={'sarleon'} name={'footman'}></FactionCard>
                </Indicator>
            </Grid.Col>
            <Grid.Col span={3}></Grid.Col>

            <Grid.Col span={3}></Grid.Col>
            <Grid.Col span={6}>
                <Indicator position="bottom-center" radius="xs" size={12} color="dark.2">
                        <FactionCard faction={'sarleon'} name={'longbowman'}></FactionCard>
                </Indicator>
            </Grid.Col>
            <Grid.Col span={3}></Grid.Col>

            <Grid.Col span={3}></Grid.Col>
            <Grid.Col span={6}>
                <Indicator position="bottom-start" radius="xs" size={12} color="dark.2">
                    <Indicator position="bottom-end" radius="xs" size={12} color="dark.2">
                            <FactionCard faction={'sarleon'} name={'armored_footman'}></FactionCard>
                    </Indicator>
                </Indicator>
            </Grid.Col>
            <Grid.Col span={3}></Grid.Col>

            <Grid.Col span={3}></Grid.Col>
            <Grid.Col span={6}>
                    <FactionCard faction={'sarleon'} name={'armored_longbowman'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={3}></Grid.Col>

            <Grid.Col span={6}>
                <Indicator position="bottom-center" radius="xs" size={12} color="dark.2">
                        <FactionCard faction={'sarleon'} name={'man_at_arms'}></FactionCard>
                </Indicator>
            </Grid.Col>
            <Grid.Col span={6}>
                    <FactionCard faction={'sarleon'} name={'cavalry'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={6}></Grid.Col>
            <Grid.Col span={6}></Grid.Col>

            <Grid.Col span={6}>
                    <FactionCard faction={'sarleon'} name={'halberdier'}></FactionCard>
            </Grid.Col>

            <Grid.Col span={6}></Grid.Col>
            <Grid.Col span={6}></Grid.Col>
            <Grid.Col span={6}></Grid.Col>

        </Grid>
    );
}