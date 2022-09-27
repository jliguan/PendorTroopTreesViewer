import { Button, Grid } from '@mantine/core';
import { Link } from 'react-router-dom';

const MinorData = [
    { name: "Heretics", linkTo: "/MinorTrees/Heretics" },
    { name: "Jatu", linkTo: "/MajorTrees/Sarleon" },
    { name: "Mystmountain Raiders", linkTo: "/MajorTrees/Sarleon" },
    { name: "Snake Cult", linkTo: "/MajorTrees/Sarleon" },
    { name: "Noldor", linkTo: "/MajorTrees/Sarleon" },
    { name: "Vanskerries", linkTo: "/MajorTrees/Sarleon" },
    { name: "Red Brotherhood", linkTo: "/MajorTrees/Sarleon" },
    { name: "Forest Bandits", linkTo: "/MajorTrees/Sarleon" },
    { name: "Outlaws", linkTo: "/MajorTrees/Sarleon" },
    { name: "Rogue Knights", linkTo: "/MajorTrees/Sarleon" },
    { name: "Barclay", linkTo: "/MajorTrees/Sarleon" },
    { name: "Mettenheim", linkTo: "/MajorTrees/Sarleon" },
    { name: "Veccavia", linkTo: "/MajorTrees/Sarleon" },
    { name: "Melitine Empire", linkTo: "/MajorTrees/Sarleon" },
    { name: "Mercenaries", linkTo: "/MajorTrees/Sarleon" },
    { name: "Rebel Peasants", linkTo: "/MajorTrees/Sarleon" },
    { name: "Inquisition", linkTo: "/MajorTrees/Sarleon" }
];

export default function MinorGrid() {

    const MinorItems = MinorData.map((item) => (
        <Grid.Col md={2} key={item.name}>
            <Button fullWidth component={Link} to={item.linkTo} size="md" variant="light">
                {item.name}
            </Button>
        </Grid.Col>
    ));

    return (
        <Grid> {MinorItems} </Grid>
    );
}