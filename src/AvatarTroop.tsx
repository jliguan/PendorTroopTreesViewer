import { createStyles, Image, MediaQuery, Skeleton, Stack, Text } from '@mantine/core';
import { useState } from 'react';
import TroopData from './TroopData.json';

interface TroopProps {
    // faction: 'sarleon' | 'dshar' | 'pendor' | 'ravenstern' | 'fierdsvain' | 'empire',
    faction: string,
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

    const category: string = (TroopData as any)[props.faction][props.name]["type"];

    const [loadingSmallest, setLoadingSmallest] = useState(true);
    const [loadingSmall, setLoadingSmall] = useState(true);
    const [loadingBig, setLoadingBig] = useState(true);

    return (

        <Stack align="center" spacing={0}>
            <MediaQuery smallerThan={480} styles={{ display: 'none' }}>
                <Skeleton visible={loadingBig} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        onLoad={() => setLoadingBig((l) => !l)}
                        radius="xs"
                        src={dir}
                        alt={(TroopData as any)[props.faction][props.name]["name"]}
                        fit="cover"
                        width={100}
                        height={84}
                        classNames={{
                            image: category.includes("Cavalry") ? classes.horseview : classes.regular
                        }}
                    />
                </Skeleton>
            </MediaQuery>
            <MediaQuery largerThan={480} styles={{ display: 'none' }}>
                <MediaQuery smallerThan={380} styles={{ display: 'none' }}>
                    <Skeleton visible={loadingSmall} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            onLoad={() => setLoadingSmall((l) => !l)}
                            radius="xs"
                            src={dir}
                            alt={(TroopData as any)[props.faction][props.name]["name"]}
                            fit="cover"
                            width={80}
                            height={64}
                            classNames={{
                                image: category.includes("Cavalry") ? classes.horseview : classes.regular
                            }}
                        />
                    </Skeleton>
                </MediaQuery>
            </MediaQuery>
            <MediaQuery largerThan={380} styles={{ display: 'none' }}>
                <Skeleton visible={loadingSmallest} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        onLoad={() => setLoadingSmallest((l) => !l)}
                        radius="xs"
                        src={dir}
                        alt={(TroopData as any)[props.faction][props.name]["name"]}
                        fit="cover"
                        width={60}
                        height={44}
                        classNames={{
                            image: category.includes("Cavalry") ? classes.horseview : classes.regular
                        }}
                    />
                </Skeleton>
            </MediaQuery>
            <Text align='center' size="sm">
                {(TroopData as any)[props.faction][props.name]["name"]}
            </Text>
        </Stack >
    );
}