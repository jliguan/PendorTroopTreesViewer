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

export default function TroopTreePendor() {

    const { classes } = useStyles();

    return (
        <Grid grow gutter="sm" justify="center" columns={24}>

            <Grid.Col span={24}>
                <Center sx={{ backgroundColor: '#A9A9A9' }}>
                    <Title order={1}>Commoners</Title>
                </Center>
            </Grid.Col>

            <Grid.Col span={9}></Grid.Col>
            <Grid.Col span={6} sx={{ position: 'relative' }}>
                <ThemeIcon className={classes.arrowDownLeft} size="xl">
                    <IconArrowDownLeft size={34} stroke={2} />
                </ThemeIcon>
                <ThemeIcon className={classes.arrowDownRight} size="xl">
                    <IconArrowDownRight size={34} stroke={2} />
                </ThemeIcon>
                <FactionCard faction={'pendor'} name={'recruit'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={9}></Grid.Col>
            <Grid.Col span={3}></Grid.Col>

            <Grid.Col span={6} sx={{ position: 'relative' }}>
                <ThemeIcon className={classes.arrowDown} size="xl">
                    <IconArrowDown size={34} stroke={2} />
                </ThemeIcon>
                <FactionCard faction={'pendor'} name={'militia'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={6}></Grid.Col>
            <Grid.Col span={6} sx={{ position: 'relative' }}>
                <ThemeIcon className={classes.arrowDown} size="xl">
                    <IconArrowDown size={34} stroke={2} />
                </ThemeIcon>
                <FactionCard faction={'pendor'} name={'light_bowman'}></FactionCard>
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
                <FactionCard faction={'pendor'} name={'footman'}></FactionCard>
            </Grid.Col>

            <Grid.Col span={6}></Grid.Col>

            <Grid.Col span={6} sx={{ position: 'relative' }}>
                <ThemeIcon className={classes.arrowDown} size="xl">
                    <IconArrowDown size={34} stroke={2} />
                </ThemeIcon>
                <FactionCard faction={'pendor'} name={'heavy_bowman'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={3}></Grid.Col>
            <Grid.Col span={6} sx={{ position: 'relative' }}>
                <ThemeIcon className={classes.arrowDown} size="xl">
                    <IconArrowDown size={34} stroke={2} />
                </ThemeIcon>
                <FactionCard faction={'pendor'} name={'swordsman'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={6} sx={{ position: 'relative' }}>
                <ThemeIcon className={classes.arrowDown} size="xl">
                    <IconArrowDown size={34} stroke={2} />
                </ThemeIcon>
                <ThemeIcon className={classes.arrowDownRight} size="xl">
                    <IconArrowDownRight size={34} stroke={2} />
                </ThemeIcon>
                <FactionCard faction={'pendor'} name={'spearman'}></FactionCard>
            </Grid.Col>

            <Grid.Col span={3}></Grid.Col>

            <Grid.Col span={6}>
                <FactionCard faction={'pendor'} name={'armored_bowman'}></FactionCard>
            </Grid.Col>

            <Grid.Col span={3}></Grid.Col>

            <Grid.Col span={6} sx={{ position: 'relative' }}>
                <ThemeIcon className={classes.arrowDown} size="xl">
                    <IconArrowDown size={34} stroke={2} />
                </ThemeIcon>
                <FactionCard faction={'pendor'} name={'man_at_arms'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={6}>
                <FactionCard faction={'pendor'} name={'heavy_spearman'}></FactionCard>
            </Grid.Col>

            <Grid.Col span={6} sx={{ position: 'relative' }}>
                <ThemeIcon className={classes.arrowDown} size="xl">
                    <IconArrowDown size={34} stroke={2} />
                </ThemeIcon>
                <FactionCard faction={'pendor'} name={'cavalry'}></FactionCard>
            </Grid.Col>

            <Grid.Col span={6}></Grid.Col>

            <Grid.Col span={6}>
                <FactionCard faction={'pendor'} name={'bladesman'}></FactionCard>
            </Grid.Col>

            <Grid.Col span={6}></Grid.Col>

            <Grid.Col span={6}>
                <FactionCard faction={'pendor'} name={'mtd_man_at_arms'}></FactionCard>
            </Grid.Col>

            <Grid.Col span={6}></Grid.Col>
            <Grid.Col span={6}></Grid.Col>
            <Grid.Col span={6}></Grid.Col>

            <Grid.Col span={24}>
                <Center sx={{ backgroundColor: '#A9A9A9' }}>
                    <Title order={1}>Nobles</Title>
                </Center>
            </Grid.Col>

            <Grid.Col span={9}></Grid.Col>
            <Grid.Col span={6} sx={{ position: 'relative' }}>
                <ThemeIcon className={classes.arrowDownLeft} size="xl">
                    <IconArrowDownLeft size={34} stroke={2} />
                </ThemeIcon>
                <ThemeIcon className={classes.arrowDownRight} size="xl">
                    <IconArrowDownRight size={34} stroke={2} />
                </ThemeIcon>
                <FactionCard faction={'pendor'} name={'nobleman'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={9}></Grid.Col>
            <Grid.Col span={3}></Grid.Col>
            <Grid.Col span={6} sx={{ position: 'relative' }}>
                <ThemeIcon className={classes.arrowDownLeft} size="xl">
                    <IconArrowDownLeft size={34} stroke={2} />
                </ThemeIcon>
                <ThemeIcon className={classes.arrowDownRight} size="xl">
                    <IconArrowDownRight size={34} stroke={2} />
                </ThemeIcon>
                <FactionCard faction={'pendor'} name={'squire'}></FactionCard>
            </Grid.Col>

            <Grid.Col span={6}></Grid.Col>

            <Grid.Col span={6} sx={{ position: 'relative' }}>
                <ThemeIcon className={classes.arrowDown} size="xl">
                    <IconArrowDown size={34} stroke={2} />
                </ThemeIcon>
                <FactionCard faction={'pendor'} name={'noble_bowman'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={3}></Grid.Col>
            <Grid.Col span={6}>
                <FactionCard faction={'pendor'} name={'knight'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={6}>
                <FactionCard faction={'pendor'} name={'foot_knight'}></FactionCard>
            </Grid.Col>

            <Grid.Col span={3}></Grid.Col>

            <Grid.Col span={6}>
                <FactionCard faction={'pendor'} name={'black_archer'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={3}></Grid.Col>



        </Grid>
    );
}