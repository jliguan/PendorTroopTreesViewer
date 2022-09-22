import { Center, createStyles, Divider, Grid, Space, ThemeIcon, Title } from '@mantine/core';
import { IconArrowDown, IconArrowDownLeft, IconArrowDownRight } from '@tabler/icons';
import FactionCard from '../FactionCard';

const useStyles = createStyles(() => ({
    arrowDown: {
        position: 'absolute',
        bottom: '0',
        left: '50%',
        transform: 'translate(-50%, 50%)',
        backgroundColor: 'transparent',
        color: 'grey',
        padding: '0',
        zIndex: 100
    },
    arrowDownLeft: {
        position: 'absolute',
        bottom: '0',
        left: '0',
        transform: 'translate(-50%, 50%)',
        backgroundColor: 'transparent',
        color: 'grey',
        padding: '0',
        zIndex: 100
    },
    arrowDownRight: {
        position: 'absolute',
        bottom: '0',
        right: '0',
        transform: 'translate(50%, 50%)',
        backgroundColor: 'transparent',
        color: 'grey',
        padding: '0',
        zIndex: 100
    }
}));

export default function TroopTreeSarleon() {

    const { classes } = useStyles();

    return (
        <Grid grow gutter="sm" justify="center" columns={24} >

            <Grid.Col span={24}>
                <Title order={1} pl="lg">Sarleon</Title>
                <Divider my="sm" />
            </Grid.Col>


            <Grid.Col span={24}>
                <Center sx={{ backgroundColor: '#8B0000' }}>
                    <Title order={1}>Commoners</Title>
                </Center>
            </Grid.Col>

            <Grid.Col span={9}></Grid.Col>
            <Grid.Col span={6} sx={{ position: 'relative' }}>
                <ThemeIcon className={classes.arrowDown} size="xl">
                    <IconArrowDown size={34} stroke={2} />
                </ThemeIcon>
                <FactionCard faction={'sarleon'} name={'recruit'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={9}></Grid.Col>

            <Grid.Col span={9}></Grid.Col>
            <Grid.Col span={6} sx={{ position: 'relative' }}>
                <ThemeIcon className={classes.arrowDownLeft} size="xl">
                    <IconArrowDownLeft size={34} stroke={2} />
                </ThemeIcon>
                <ThemeIcon className={classes.arrowDownRight} size="xl">
                    <IconArrowDownRight size={34} stroke={2} />
                </ThemeIcon>
                <FactionCard faction={'sarleon'} name={'militia'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={9}></Grid.Col>

            <Grid.Col span={3}></Grid.Col>
            <Grid.Col span={6} sx={{ position: 'relative' }}>
                <ThemeIcon className={classes.arrowDown} size="xl">
                    <IconArrowDown size={34} stroke={2} />
                </ThemeIcon>
                <FactionCard faction={'sarleon'} name={'trained_militia'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={3}></Grid.Col>

            <Grid.Col span={3}></Grid.Col>
            <Grid.Col span={6} sx={{ position: 'relative' }}>
                <ThemeIcon className={classes.arrowDown} size="xl">
                    <IconArrowDown size={34} stroke={2} />
                </ThemeIcon>
                <FactionCard faction={'sarleon'} name={'skirmisher'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={3}></Grid.Col>

            <Grid.Col span={3}></Grid.Col>
            <Grid.Col span={6} sx={{ position: 'relative' }}>
                <ThemeIcon className={classes.arrowDown} size="xl">
                    <IconArrowDown size={34} stroke={2} />
                </ThemeIcon>
                <FactionCard faction={'sarleon'} name={'footman'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={3}></Grid.Col>

            <Grid.Col span={3}></Grid.Col>
            <Grid.Col span={6} sx={{ position: 'relative' }}>
                <ThemeIcon className={classes.arrowDown} size="xl">
                    <IconArrowDown size={34} stroke={2} />
                </ThemeIcon>
                <FactionCard faction={'sarleon'} name={'longbowman'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={3}></Grid.Col>

            <Grid.Col span={3}></Grid.Col>
            <Grid.Col span={6} sx={{ position: 'relative' }}>
                <ThemeIcon className={classes.arrowDownLeft} size="xl">
                    <IconArrowDownLeft size={34} stroke={2} />
                </ThemeIcon>
                <ThemeIcon className={classes.arrowDownRight} size="xl">
                    <IconArrowDownRight size={34} stroke={2} />
                </ThemeIcon>
                <FactionCard faction={'sarleon'} name={'armored_footman'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={3}></Grid.Col>

            <Grid.Col span={3}></Grid.Col>
            <Grid.Col span={6}>
                <FactionCard faction={'sarleon'} name={'armored_longbowman'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={3}></Grid.Col>

            <Grid.Col span={6} sx={{ position: 'relative' }}>
                <ThemeIcon className={classes.arrowDown} size="xl">
                    <IconArrowDown size={34} stroke={2} />
                </ThemeIcon>
                <FactionCard faction={'sarleon'} name={'man_at_arms'}></FactionCard>
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

            <Grid.Col span={24}>
                <Center sx={{ backgroundColor: '#8B0000' }}>
                    <Title order={1}>Nobles</Title>
                </Center>
            </Grid.Col>

            <Grid.Col span={9}></Grid.Col>
            <Grid.Col span={6} sx={{ position: 'relative' }}>
                <ThemeIcon className={classes.arrowDown} size="xl">
                    <IconArrowDown size={34} stroke={2} />
                </ThemeIcon>
                <FactionCard faction={'sarleon'} name={'nobleman'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={9}></Grid.Col>
            <Grid.Col span={9}></Grid.Col>
            <Grid.Col span={6} sx={{ position: 'relative' }}>
                <ThemeIcon className={classes.arrowDown} size="xl">
                    <IconArrowDown size={34} stroke={2} />
                </ThemeIcon>
                <FactionCard faction={'sarleon'} name={'squire_at_arms'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={9}></Grid.Col>
            <Grid.Col span={9}></Grid.Col>
            <Grid.Col span={6}>
                <FactionCard faction={'sarleon'} name={'knight'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={9}></Grid.Col>

        </Grid>
    );
}