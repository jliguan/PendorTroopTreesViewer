import { Grid } from '@mantine/core';
import FactionCard from './FactionCard';

export default function KOGrid() {
    return (
        <Grid>
            <Grid.Col md={4}>
                <FactionCard name="Order of the Lion" />
            </Grid.Col>
            <Grid.Col md={4}>
                <FactionCard name="Order of the Dragon" />
            </Grid.Col>
            <Grid.Col md={4}>
                <FactionCard name="Lady Valkyries Sisterhood" />
            </Grid.Col>
            <Grid.Col md={4}>
                <FactionCard name="Lady Valkyries Sisterhood" />
            </Grid.Col>
            <Grid.Col md={4}>
                <FactionCard name="Empire Immortals" />
            </Grid.Col>
            <Grid.Col md={4}>
                <FactionCard name="D'Shar Windriders" />
            </Grid.Col>
            <Grid.Col md={4}>
                <FactionCard name="Order of the Griffon" />
            </Grid.Col>
            <Grid.Col md={4}>
                <FactionCard name="Order of the Falcon" />
            </Grid.Col>
            <Grid.Col md={4}>
                <FactionCard name="Order of the Falcon" />
            </Grid.Col>
            <Grid.Col md={4}>
                <FactionCard name="Order of the Radiant Cross" />
            </Grid.Col>
            <Grid.Col md={4}>
                <FactionCard name="Order of the Clarion Call" />
            </Grid.Col>
            <Grid.Col md={4}>
                <FactionCard name="Order of the Ebony Gauntlet" />
            </Grid.Col>
            <Grid.Col md={4}>
                <FactionCard name="Order of the Silvermist Rangers" />
            </Grid.Col>
            <Grid.Col md={4}>
                <FactionCard name="Order of the Dawn" />
            </Grid.Col>
            <Grid.Col md={4}>
                <FactionCard name="Order of Eventide" />
            </Grid.Col>
            <Grid.Col md={4}>
                <FactionCard name="Order of the Phoenix" />
            </Grid.Col>
            <Grid.Col md={4}>
                <FactionCard name="Order of the Shadow Wolves" />
            </Grid.Col>
            <Grid.Col md={4}>
                <FactionCard name="Order of the Shadow Wolves" />
            </Grid.Col>
            <Grid.Col md={4}>
                <FactionCard name="Order of the Kraken Cultists" />
            </Grid.Col>

        </Grid>
    );
}