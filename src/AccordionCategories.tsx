import { Accordion } from '@mantine/core';
import KOGrid from './KOGrid';
import MajorGrid from './MajorGrid';
import MinorGrid from './MinorGrid';

export default function AccordionCategories() {

    return (

        <Accordion chevronSize={40} variant="separated" chevronPosition="left" multiple={true} defaultValue={["MajorFactions", "MinorFactions", "KOFactions"]}>
            <Accordion.Item value="MajorFactions">
                <Accordion.Control>Major Factions</Accordion.Control>
                <Accordion.Panel>
                    <MajorGrid />
                </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="MinorFactions">
                <Accordion.Control>Minor Factions</Accordion.Control>
                <Accordion.Panel>
                    <MinorGrid />
                </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="KOFactions">
                <Accordion.Control>Knighthood Orders</Accordion.Control>
                <Accordion.Panel>
                    <KOGrid />
                </Accordion.Panel>
            </Accordion.Item>
        </Accordion>
    );
}