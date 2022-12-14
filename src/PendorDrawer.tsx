import { Center, ScrollArea, Stack, Text, Image, createStyles, Group, Table, Container } from '@mantine/core';
import TroopData from './TroopData.json';

interface TroopProps {
    faction: string,
    name: string
}

const useStyles = createStyles(() => ({
    sideview: {
        objectPosition: '60% 50%'
    },
    horseview: {
        objectPosition: '35% 20%'
    }
}));

export default function PendorDrawer(props: TroopProps) {


    if (props.faction === "" || props.name === "") {
        return (
            <Text>
                as
            </Text>
        );
    }
    else {

        const dir: string = "/assets/" + props.faction + "Cropped/" + (TroopData as any)[props.faction][props.name]["url"];
        const { classes } = useStyles();
        const category: string = (TroopData as any)[props.faction][props.name]["type"];

        return (
            <ScrollArea offsetScrollbars type="never" sx={{height: "100%"}}>
                {/* {(TroopData as any)[props.faction][props.name]["name"]} */}
                <Stack justify="flex-start" spacing="xs">
                    <Center>
                        <Text size="lg" weight={600} align="center">
                            {(TroopData as any)[props.faction][props.name]["name"]}
                        </Text>
                    </Center>

                    <Group position="left" spacing="xs">
                        <Image
                            radius="xs"
                            src={dir}
                            alt={(TroopData as any)[props.faction][props.name]["name"]}
                            fit="cover"
                            width={110}
                            height={250}
                            classNames={{
                                image: category.includes("Cavalry") ? classes.horseview : classes.sideview
                            }}
                        />
                        <Stack justify="flex-start" spacing="xs">
                            <Container m={0} pl={10}>
                                <Text size="md">Level: {(TroopData as any)[props.faction][props.name]["level"]}</Text>
                                <Text size="md">Health: {(TroopData as any)[props.faction][props.name]["hp"]}</Text>
                                <Text size="md">Cost: {(TroopData as any)[props.faction][props.name]["cost"]}</Text>
                                {/* <Text size="md">Type: {(TroopData as any)[props.faction][props.name]["type"]}</Text> */}
                            </Container>


                            <Table verticalSpacing={3} highlightOnHover fontSize="sm">
                                <thead>
                                    <tr>
                                        <th>
                                            Attributes
                                        </th>
                                        <th>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>STR</td>
                                        <td align='right'>{(TroopData as any)[props.faction][props.name]["str"]}</td>
                                    </tr>
                                    <tr>
                                        <td>AGI</td>
                                        <td align='right'>{(TroopData as any)[props.faction][props.name]["agi"]}</td>
                                    </tr>
                                    <tr>
                                        <td>INT</td>
                                        <td align='right'>{(TroopData as any)[props.faction][props.name]["int"]}</td>
                                    </tr>
                                    <tr>
                                        <td>CHA</td>
                                        <td align='right'>{(TroopData as any)[props.faction][props.name]["cha"]}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Stack>
                    </Group>



                    <Table verticalSpacing={3} highlightOnHover fontSize="sm">
                        <thead>
                            <tr>
                                <th>
                                    Skills
                                </th>
                                <th>

                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Ironflesh</td>
                                <td align='right'>{(TroopData as any)[props.faction][props.name]["ironflesh"]}</td>
                            </tr>
                            <tr>
                                <td>Power Strike</td>
                                <td align='right'>{(TroopData as any)[props.faction][props.name]["power_strike"]}</td>
                            </tr>
                            <tr>
                                <td>Power Throw</td>
                                <td align='right'>{(TroopData as any)[props.faction][props.name]["power_throw"]}</td>
                            </tr>
                            <tr>
                                <td>Power Draw</td>
                                <td align='right'>{(TroopData as any)[props.faction][props.name]["power_draw"]}</td>
                            </tr>
                            <tr>
                                <td>Shield</td>
                                <td align='right'>{(TroopData as any)[props.faction][props.name]["shield"]}</td>
                            </tr>
                            <tr>
                                <td>Athletics</td>
                                <td align='right'>{(TroopData as any)[props.faction][props.name]["athletics"]}</td>
                            </tr>
                            <tr>
                                <td>Riding</td>
                                <td align='right'>{(TroopData as any)[props.faction][props.name]["riding"]}</td>
                            </tr>
                            <tr>
                                <td>Horse Archery</td>
                                <td align='right'>{(TroopData as any)[props.faction][props.name]["horse_archery"]}</td>
                            </tr>
                        </tbody>
                    </Table>

                    <Table verticalSpacing={3} highlightOnHover fontSize="sm">
                        <thead>
                            <tr>
                                <th>
                                    Proficiencies
                                </th>
                                <th>

                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1H Weapons</td>
                                <td align='right'>{(TroopData as any)[props.faction][props.name]["one_handed"]}</td>
                            </tr>
                            <tr>
                                <td>2H Weapons</td>
                                <td align='right'>{(TroopData as any)[props.faction][props.name]["two_handed"]}</td>
                            </tr>
                            <tr>
                                <td>Polearms</td>
                                <td align='right'>{(TroopData as any)[props.faction][props.name]["polearms"]}</td>
                            </tr>
                            <tr>
                                <td>Archery</td>
                                <td align='right'>{(TroopData as any)[props.faction][props.name]["archery"]}</td>
                            </tr>
                            <tr>
                                <td>Crossbows</td>
                                <td align='right'>{(TroopData as any)[props.faction][props.name]["crossbows"]}</td>
                            </tr>
                            <tr>
                                <td>Throwing</td>
                                <td align='right'>{(TroopData as any)[props.faction][props.name]["throwing"]}</td>
                            </tr>
                        </tbody>
                    </Table>

                </Stack>
            </ScrollArea>
        );
    }

}