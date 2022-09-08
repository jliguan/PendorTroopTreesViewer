import { Button, Grid } from '@mantine/core';
import { Link } from 'react-router-dom';

const KOData = [
    { name: "Order of the Lion", linkTo: "/MajorTrees/Sarleon" },
    { name: "Order of the Dragon", linkTo: "/MajorTrees/Sarleon" },
    { name: "Lady Valkyries Sisterhood", linkTo: "/MajorTrees/Sarleon" },
    { name: "Order of the Shadow Legion", linkTo: "/MajorTrees/Sarleon" },
    { name: "Empire Immortals", linkTo: "/MajorTrees/Sarleon" },
    { name: "D'Shar Windriders", linkTo: "/MajorTrees/Sarleon" },
    { name: "Order of the Griffon", linkTo: "/MajorTrees/Sarleon" },
    { name: "Order of the Falcon", linkTo: "/MajorTrees/Sarleon" },
    { name: "Order of the Raven Spear", linkTo: "/MajorTrees/Sarleon" },
    { name: "Order of the Radiant Cross", linkTo: "/MajorTrees/Sarleon" },
    { name: "Order of the Clarion Call", linkTo: "/MajorTrees/Sarleon" },
    { name: "Order of the Ebony Gauntlet", linkTo: "/MajorTrees/Sarleon" },
    { name: "Order of the Silvermist Rangers", linkTo: "/MajorTrees/Sarleon" },
    { name: "Order of the Dawn", linkTo: "/MajorTrees/Sarleon" },
    { name: "Order of Eventide", linkTo: "/MajorTrees/Sarleon" },
    { name: "Order of the Phoenix", linkTo: "/MajorTrees/Sarleon" },
    { name: "Order of the Shadow Wolves", linkTo: "/MajorTrees/Sarleon" },
    { name: "Order of the Scorpion Assassins", linkTo: "/MajorTrees/Sarleon" },
    { name: "Order of the Kraken Cultists", linkTo: "/MajorTrees/Sarleon" }
];

export default function KOGrid() {
    
    const KOItems = KOData.map((item) => (
        <Grid.Col md={3} key={item.name}>
            <Button fullWidth component={Link} to={item.linkTo} size="md" variant="light">
                {item.name}
            </Button>
        </Grid.Col>
    ));

    return (
        <Grid> {KOItems} </Grid>
    );
}