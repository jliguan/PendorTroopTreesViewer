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

export default function TroopTreeEmpire() {

    const { classes } = useStyles();

    return (
        <Grid grow gutter="sm" justify="center" columns={24}>

            <Grid.Col span={24}>
                <Center sx={{ backgroundColor: '#F0E68C' }}>
                    <Title order={1}>Commoners</Title>
                </Center>
            </Grid.Col>

            <Grid.Col span={9}></Grid.Col>
            <Grid.Col span={6} sx={{ position: 'relative' }}>
                <ThemeIcon className={classes.arrowDown} size="xl">
                    <IconArrowDown size={34} stroke={2} />
                </ThemeIcon>
                <FactionCard faction={'empire'} name={'citizen'}></FactionCard>
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
                <FactionCard faction={'empire'} name={'levy_recruit'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={9}></Grid.Col>

            <Grid.Col span={3}></Grid.Col>
            <Grid.Col span={6} sx={{ position: 'relative' }}>
                <ThemeIcon className={classes.arrowDown} size="xl">
                    <IconArrowDown size={34} stroke={2} />
                </ThemeIcon>
                <FactionCard faction={'empire'} name={'levy_militia'}></FactionCard>
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
                <FactionCard faction={'empire'} name={'levy_hunter'}></FactionCard>
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
                <FactionCard faction={'empire'} name={'light_infantry'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={3}></Grid.Col>

            <Grid.Col span={6} sx={{ position: 'relative' }}>
                <ThemeIcon className={classes.arrowDown} size="xl">
                    <IconArrowDown size={34} stroke={2} />
                </ThemeIcon>
                <FactionCard faction={'empire'} name={'levy_skirmisher'}></FactionCard>
            </Grid.Col>

            <Grid.Col span={6} sx={{ position: 'relative' }}>
                <ThemeIcon className={classes.arrowDown} size="xl">
                    <IconArrowDown size={34} stroke={2} />
                </ThemeIcon>
                <FactionCard faction={'empire'} name={'levy_horseman'}></FactionCard>
            </Grid.Col>

            <Grid.Col span={6} sx={{ position: 'relative' }}>
                <ThemeIcon className={classes.arrowDown} size="xl">
                    <IconArrowDown size={34} stroke={2} />
                </ThemeIcon>
                <FactionCard faction={'empire'} name={'pikeman'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={6} sx={{ position: 'relative' }}>
                <ThemeIcon className={classes.arrowDown} size="xl">
                    <IconArrowDown size={34} stroke={2} />
                </ThemeIcon>
                <FactionCard faction={'empire'} name={'heavy_infantry'}></FactionCard>
            </Grid.Col>

            <Grid.Col span={6} sx={{ position: 'relative' }}>
                <ThemeIcon className={classes.arrowDown} size="xl">
                    <IconArrowDown size={34} stroke={2} />
                </ThemeIcon>
                <FactionCard faction={'empire'} name={'crossbowman'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={6}>
                <FactionCard faction={'empire'} name={'cavalry'}></FactionCard>
            </Grid.Col>

            <Grid.Col span={6} sx={{ position: 'relative' }}>
                <ThemeIcon className={classes.arrowDown} size="xl">
                    <IconArrowDown size={34} stroke={2} />
                </ThemeIcon>
                <FactionCard faction={'empire'} name={'armored_pikeman'}></FactionCard>
            </Grid.Col>

            <Grid.Col span={6}>
                <FactionCard faction={'empire'} name={'legionnaire'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={6}>
                <FactionCard faction={'empire'} name={'armored_crossbowman'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={6}></Grid.Col>

            <Grid.Col span={6}>
                <FactionCard faction={'empire'} name={'gladiator'}></FactionCard>
            </Grid.Col>

            <Grid.Col span={18}></Grid.Col>


            <Grid.Col span={24}>
                <Center sx={{ backgroundColor: '#F0E68C' }}>
                    <Title order={1}>Nobles</Title>
                </Center>
            </Grid.Col>

            <Grid.Col span={9}></Grid.Col>
            <Grid.Col span={6} sx={{ position: 'relative' }}>
                <ThemeIcon className={classes.arrowDown} size="xl">
                    <IconArrowDown size={34} stroke={2} />
                </ThemeIcon>
                <FactionCard faction={'empire'} name={'nobleman'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={9}></Grid.Col>
            <Grid.Col span={9}></Grid.Col>
            <Grid.Col span={6} sx={{ position: 'relative' }}>
                <ThemeIcon className={classes.arrowDown} size="xl">
                    <IconArrowDown size={34} stroke={2} />
                </ThemeIcon>
                <FactionCard faction={'empire'} name={'noble_legionnaire_recruit'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={9}></Grid.Col>
            <Grid.Col span={9}></Grid.Col>
            <Grid.Col span={6}>
                <FactionCard faction={'empire'} name={'knight'}></FactionCard>
            </Grid.Col>
            <Grid.Col span={9}></Grid.Col>

        </Grid>
    );
}