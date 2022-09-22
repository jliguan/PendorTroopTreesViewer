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

export default function TroopTreeDShar() {

    const { classes } = useStyles();

    return (
        <Grid grow gutter="sm" justify="center" columns={24}>

            <Grid.Col span={24}>
                <Center sx={{ backgroundColor: '#8B4513' }}>
                    <Title order={1}>Commoners</Title>
                </Center>
            </Grid.Col>

            <Grid.Col span={9}></Grid.Col>
            <Grid.Col span={6} sx={{ position: 'relative' }}>
                <ThemeIcon className={classes.arrowDown} size="xl">
                    <IconArrowDown size={34} stroke={2} />
                </ThemeIcon>
                <FactionCard faction={'dshar'} name={'tribesman'}></FactionCard>
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
                <FactionCard faction={'dshar'} name={'hunter'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={9}></Grid.Col>

            <Grid.Col span={3}></Grid.Col>
            <Grid.Col span={6} sx={{ position: 'relative' }}>
                <ThemeIcon className={classes.arrowDown} size="xl">
                    <IconArrowDown size={34} stroke={2} />
                </ThemeIcon>
                <FactionCard faction={'dshar'} name={'conscript'}></FactionCard>
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
                <FactionCard faction={'dshar'} name={'horseman'}></FactionCard>
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
                <FactionCard faction={'dshar'} name={'desert_fighter'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={3}></Grid.Col>

            <Grid.Col span={6} sx={{ position: 'relative' }}>
                <ThemeIcon className={classes.arrowDown} size="xl">
                    <IconArrowDown size={34} stroke={2} />
                </ThemeIcon>
                <FactionCard faction={'dshar'} name={'raider'}></FactionCard>
            </Grid.Col>

            <Grid.Col span={6} sx={{ position: 'relative' }}>
                <ThemeIcon className={classes.arrowDown} size="xl">
                    <IconArrowDown size={34} stroke={2} />
                </ThemeIcon>
                <FactionCard faction={'dshar'} name={'reaver'}></FactionCard>
            </Grid.Col>

            <Grid.Col span={6} sx={{ position: 'relative' }}>
                <ThemeIcon className={classes.arrowDown} size="xl">
                    <IconArrowDown size={34} stroke={2} />
                </ThemeIcon>
                <ThemeIcon className={classes.arrowDownRight} size="xl">
                    <IconArrowDownRight size={34} stroke={2} />
                </ThemeIcon>
                <FactionCard faction={'dshar'} name={'warrior'}></FactionCard>
            </Grid.Col>

            <Grid.Col span={6} sx={{ position: 'relative' }}>
                <ThemeIcon className={classes.arrowDownRight} size="xl">
                    <IconArrowDownRight size={34} stroke={2} />
                </ThemeIcon>
                <FactionCard faction={'dshar'} name={'desert_hunter'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={6}>
                <FactionCard faction={'dshar'} name={'ghazi_stalker'}></FactionCard>
            </Grid.Col>

            <Grid.Col span={6}>
                <FactionCard faction={'dshar'} name={'ghazi_reaver'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={6}>
                <FactionCard faction={'dshar'} name={'ghazi_dervish'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={6}>
                <FactionCard faction={'dshar'} name={'ghazi_spearman'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={6}>
                <FactionCard faction={'dshar'} name={'ghazi_marksman'}></FactionCard>
            </Grid.Col>

            <Grid.Col span={6}></Grid.Col>
            <Grid.Col span={6}></Grid.Col>
            <Grid.Col span={6}></Grid.Col>

            <Grid.Col span={24}>
                <Center sx={{ backgroundColor: '#8B4513' }}>
                    <Title order={1}>Nobles</Title>
                </Center>
            </Grid.Col>

            <Grid.Col span={9}></Grid.Col>
            <Grid.Col span={6} sx={{ position: 'relative' }}>
                <ThemeIcon className={classes.arrowDown} size="xl">
                    <IconArrowDown size={34} stroke={2} />
                </ThemeIcon>
                <FactionCard faction={'dshar'} name={'nobleman'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={9}></Grid.Col>
            <Grid.Col span={9}></Grid.Col>
            <Grid.Col span={6} sx={{ position: 'relative' }}>
                <ThemeIcon className={classes.arrowDown} size="xl">
                    <IconArrowDown size={34} stroke={2} />
                </ThemeIcon>
                <FactionCard faction={'dshar'} name={'noble_rider'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={9}></Grid.Col>
            <Grid.Col span={9}></Grid.Col>
            <Grid.Col span={6}>
                <FactionCard faction={'dshar'} name={'noble_cavalry'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={9}></Grid.Col>

        </Grid>
    );
}