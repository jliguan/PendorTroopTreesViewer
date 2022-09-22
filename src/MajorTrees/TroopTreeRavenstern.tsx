import { Center, createStyles, Grid, ThemeIcon, Title } from '@mantine/core';
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

export default function TroopTreeRavenstern() {

    const { classes } = useStyles();

    return (
        <Grid grow gutter="sm" justify="center" columns={24}>

            <Grid.Col span={24}>
                <Center sx={{ backgroundColor: '#4169E1' }}>
                    <Title order={1}>Commoners</Title>
                </Center>
            </Grid.Col>

            <Grid.Col span={9}></Grid.Col>
            <Grid.Col span={6} sx={{ position: 'relative' }}>
                <ThemeIcon className={classes.arrowDown} size="xl">
                    <IconArrowDown size={34} stroke={2} />
                </ThemeIcon>
                <FactionCard faction={'ravenstern'} name={'recruit'}></FactionCard>
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
                <FactionCard faction={'ravenstern'} name={'militia'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={9}></Grid.Col>

            <Grid.Col span={3}></Grid.Col>
            <Grid.Col span={6} sx={{ position: 'relative' }}>
                <ThemeIcon className={classes.arrowDown} size="xl">
                    <IconArrowDown size={34} stroke={2} />
                </ThemeIcon>
                <FactionCard faction={'ravenstern'} name={'trained_militia'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={3}></Grid.Col>

            <Grid.Col span={3}></Grid.Col>
            <Grid.Col span={6} sx={{ position: 'relative' }}>
                <ThemeIcon className={classes.arrowDown} size="xl">
                    <IconArrowDown size={34} stroke={2} />
                </ThemeIcon>
                <FactionCard faction={'ravenstern'} name={'skirmisher'}></FactionCard>
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
                <FactionCard faction={'ravenstern'} name={'footman'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={3}></Grid.Col>

            <Grid.Col span={3}></Grid.Col>
            <Grid.Col span={6} sx={{ position: 'relative' }}>
                <ThemeIcon className={classes.arrowDown} size="xl">
                    <IconArrowDown size={34} stroke={2} />
                </ThemeIcon>
                <FactionCard faction={'ravenstern'} name={'archer'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={3}></Grid.Col>


            <Grid.Col span={6} sx={{ position: 'relative' }}>
                <ThemeIcon className={classes.arrowDown} size="xl">
                    <IconArrowDown size={34} stroke={2} />
                </ThemeIcon>
                <FactionCard faction={'ravenstern'} name={'man_at_arms'}></FactionCard>
            </Grid.Col>

            <Grid.Col span={6}>
                <FactionCard faction={'ravenstern'} name={'horseman'}></FactionCard>
            </Grid.Col>

            <Grid.Col span={3}></Grid.Col>
            <Grid.Col span={6} sx={{ position: 'relative' }}>
                <ThemeIcon className={classes.arrowDownLeft} size="xl">
                    <IconArrowDownLeft size={34} stroke={2} />
                </ThemeIcon>
                <ThemeIcon className={classes.arrowDownRight} size="xl">
                    <IconArrowDownRight size={34} stroke={2} />
                </ThemeIcon>
                <FactionCard faction={'ravenstern'} name={'warden'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={3}></Grid.Col>

            <Grid.Col span={6}>
                <FactionCard faction={'ravenstern'} name={'kierguard'}></FactionCard>
            </Grid.Col>

            <Grid.Col span={6}></Grid.Col>
            <Grid.Col span={6}>
                <FactionCard faction={'ravenstern'} name={'mtd_ranger'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={6}>
                <FactionCard faction={'ravenstern'} name={'ranger'}></FactionCard>
            </Grid.Col>



            <Grid.Col span={24}>
                <Center sx={{ backgroundColor: '#4169E1' }}>
                    <Title order={1}>Nobles</Title>
                </Center>
            </Grid.Col>

            <Grid.Col span={9}></Grid.Col>
            <Grid.Col span={6} sx={{ position: 'relative' }}>
                <ThemeIcon className={classes.arrowDown} size="xl">
                    <IconArrowDown size={34} stroke={2} />
                </ThemeIcon>
                <FactionCard faction={'ravenstern'} name={'nobleman'}></FactionCard>
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
                <FactionCard faction={'ravenstern'} name={'squire_at_arms'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={9}></Grid.Col>
            <Grid.Col span={6}></Grid.Col>
            <Grid.Col span={6}>
                <FactionCard faction={'ravenstern'} name={'knight'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={6}>
                <FactionCard faction={'ravenstern'} name={'highlander'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={6}></Grid.Col>

        </Grid>
    );
}