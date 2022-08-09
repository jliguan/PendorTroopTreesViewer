import { Grid, Anchor } from '@mantine/core';
import FactionCard from './FactionCard';
import { Link } from 'react-router-dom';

export default function MajorGrid() {
    return (
        <Grid>
            <Grid.Col md={4}>

                <Anchor component={Link} variant="link" to="/MajorTrees/Sarleon">
                    <FactionCard name="Sarleon" />
                </Anchor>

                
            </Grid.Col>
            <Grid.Col md={4}>
                <FactionCard name="Ravenstern" />
            </Grid.Col>
            <Grid.Col md={4}>
                <FactionCard name="Fierdsvain" />
            </Grid.Col>
            <Grid.Col md={4}>
                <FactionCard name="Empire" />
            </Grid.Col>
            <Grid.Col md={4}>
                <FactionCard name="D'Shar" />
            </Grid.Col>
            <Grid.Col md={4}>
                <FactionCard name="Pendor" />
            </Grid.Col>

        </Grid>
    );
}