import { createStyles, Image, Stack, Text } from '@mantine/core';
import TroopData from './TroopData.json';

interface TroopProps {
    faction: 'sarleon' | 'dshar' | 'pendor' | 'ravenstern' | 'fierdsvain' | 'empire',
    name: string
}

const useStyles = createStyles(() => ({
    regular: {
        objectPosition: '0 20%',
        border: '3px grey solid'
    },
    horseview: {
        objectPosition: '0 5%',
        border: '3px grey solid'
    }
}));

export default function AvatarTroop(props: TroopProps) {

    const { classes } = useStyles();
    const dir = "/assets/" + props.faction + "Cropped/" + (TroopData as any)[props.faction][props.name]["url"];
    console.log("dir:", dir);

    const category:string = (TroopData as any)[props.faction][props.name]["type"];

    return (

        <Stack align="center" spacing={0}>
            <Image
                radius="xs"
                src={dir}
                alt={(TroopData as any)[props.faction][props.name]["name"]}
                fit="cover"
                width={100}
                height={84}
                classNames={{
                    // image: classes.regular
                    image: category.includes("Cavalry") ? classes.horseview : classes.regular
                }}
                sx={(theme) => ({

                    '&:hover': {
                        backgroundColor: `${theme.colors.dark[6]}`
                    },
                    cursor: 'pointer'

                })}
            />
            <Text align='center' size="sm">
                {(TroopData as any)[props.faction][props.name]["name"]}
            </Text>
        </Stack>
    );
}