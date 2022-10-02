import { Button, Grid } from '@mantine/core';
import { Link } from 'react-router-dom';

const MinorData = [
    { name: "Heretics", linkTo: "/MinorTrees/Heretics" },
    { name: "Jatu", linkTo: "/MinorTrees/Jatu" },
    { name: "Mystmountain Raiders", linkTo: "/MinorTrees/MystmountainRaiders" },
    { name: "Snake Cult", linkTo: "/MinorTrees/SnakeCult" },
    { name: "Noldor", linkTo: "/MinorTrees/Noldor" },
    { name: "Vanskerries", linkTo: "/MinorTrees/Vanskerries" },
    { name: "Red Brotherhood", linkTo: "/MinorTrees/RedBrotherhood" },
    { name: "Forest Bandits", linkTo: "/MinorTrees/ForestBandits" },
    { name: "Outlaws", linkTo: "/MinorTrees/Outlaws" },
    { name: "Rogue Knights", linkTo: "/MinorTrees/RogueKnights" },
    { name: "Adventurer Companies", linkTo: "/MinorTrees/AdventurerCompanies" },
    { name: "Barclay", linkTo: "/MinorTrees/Barclay" },
    { name: "Mettenheim", linkTo: "/MinorTrees/Mettenheim" },
    { name: "Veccavia", linkTo: "/MinorTrees/Veccavia" },
    { name: "Singalians", linkTo: "/MinorTrees/Singalians" },
    { name: "Melitine Empire", linkTo: "/MinorTrees/MelitineEmpire" },
    { name: "Mercenaries", linkTo: "/MinorTrees/Mercenaries" },
    { name: "Rebel Peasants", linkTo: "/MinorTrees/RebelPeasants" },
    { name: "Inquisition", linkTo: "/MinorTrees/Inquisition" }
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