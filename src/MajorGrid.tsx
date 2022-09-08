import { Grid, Button } from '@mantine/core';
import { Link } from 'react-router-dom';

const MajorData = [
    { name: "Sarleon", linkTo: "/MajorTrees/Sarleon" },
    { name: "Ravenstern", linkTo: "/MajorTrees/Sarleon" },
    { name: "Fierdsvain", linkTo: "/MajorTrees/Sarleon" },
    { name: "Empire", linkTo: "/MajorTrees/Sarleon" },
    { name: "D'Shar", linkTo: "/MajorTrees/Sarleon" },
    { name: "Pendor", linkTo: "/MajorTrees/Sarleon" }
];

export default function MajorGrid() {

    const MajorItems = MajorData.map((item) => (
        <Grid.Col md={4} key={item.name}>
            <Button fullWidth component={Link} to={item.linkTo} size="md" variant="light">
                {item.name}
            </Button>
        </Grid.Col>
    ));

    return (
        <Grid> {MajorItems} </Grid>
    );
}