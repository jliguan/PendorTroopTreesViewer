import { Grid, Button } from '@mantine/core';
import { Link } from 'react-router-dom';

const MajorData = [
    { name: "Sarleon", linkTo: "/MajorTrees/Sarleon" },
    { name: "Ravenstern", linkTo: "/MajorTrees/Ravenstern" },
    { name: "Fierdsvain", linkTo: "/MajorTrees/Fierdsvain" },
    { name: "Empire", linkTo: "/MajorTrees/Empire" },
    { name: "D'Shar", linkTo: "/MajorTrees/DShar" },
    { name: "Pendor", linkTo: "/MajorTrees/Pendor" }
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