import { Grid } from '@mantine/core';
import FactionCard from './FactionCard';

export default function MinorGrid() {
    return (
        <Grid>
            <Grid.Col md={4}>
                <FactionCard name="Heretics" />
            </Grid.Col>
            <Grid.Col md={4}>
                <FactionCard name="Jatu" />
            </Grid.Col>
            <Grid.Col md={4}>
                <FactionCard name="Mystmountain Raiders" />
            </Grid.Col>
            <Grid.Col md={4}>
                <FactionCard name="Snake Cult" />
            </Grid.Col>
            <Grid.Col md={4}>
                <FactionCard name="Noldor" />
            </Grid.Col>
            <Grid.Col md={4}>
                <FactionCard name="Vanskerries" />
            </Grid.Col>
            <Grid.Col md={4}>
                <FactionCard name="Red Brotherhood" />
            </Grid.Col>
            <Grid.Col md={4}>
                <FactionCard name="Forest Bandits" />
            </Grid.Col>
            <Grid.Col md={4}>
                <FactionCard name="Outlaws" />
            </Grid.Col>
            <Grid.Col md={4}>
                <FactionCard name="Rogue Knights" />
            </Grid.Col>
            <Grid.Col md={4}>
                <FactionCard name="Barclay" />
            </Grid.Col>
            <Grid.Col md={4}>
                <FactionCard name="Mettenheim" />
            </Grid.Col>
            <Grid.Col md={4}>
                <FactionCard name="Veccavia" />
            </Grid.Col>
            <Grid.Col md={4}>
                <FactionCard name="Melitine Empire" />
            </Grid.Col>
            <Grid.Col md={4}>
                <FactionCard name="Mercenaries" />
            </Grid.Col>
            <Grid.Col md={4}>
                <FactionCard name="Rebel Peasants" />
            </Grid.Col>
            <Grid.Col md={4}>
                <FactionCard name="Inquisition" />
            </Grid.Col>
        </Grid>
    );
}