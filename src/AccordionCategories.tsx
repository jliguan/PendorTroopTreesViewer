import { Accordion, createStyles } from '@mantine/core';
import { useState } from 'react';
import KOGrid from './KOGrid';
import MajorGrid from './MajorGrid';
import MinorGrid from './MinorGrid';

const useStyles = createStyles(() => ({
    label: {
        fontWeight: 600,
        padding: 5
    }
}));

export default function AccordionCategories() {

    const { classes } = useStyles();
    const [value, setValue] = useState<string[]>(["MajorFactions"]);

    return (
        <Accordion chevronSize={50} variant="separated" chevronPosition="left" multiple={true} classNames={classes} value={value} onChange={setValue}>
            <Accordion.Item value="MajorFactions">
                <Accordion.Control>Major Factions</Accordion.Control>
                <Accordion.Panel>
                    <MajorGrid />
                </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="MinorFactions">
                <Accordion.Control disabled>Minor Factions</Accordion.Control>
                <Accordion.Panel>
                    <MinorGrid />
                </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="KOFactions">
                <Accordion.Control disabled>Knighthood Orders</Accordion.Control>
                <Accordion.Panel>
                    <KOGrid />
                </Accordion.Panel>
            </Accordion.Item>
        </Accordion>

        
    );
}