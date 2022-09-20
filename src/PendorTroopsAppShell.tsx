import { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  MediaQuery,
  Burger,
  useMantineTheme,
  ScrollArea,
  Anchor,
  Autocomplete,
  Grid,
  Container
} from '@mantine/core';
import AccordionCategories from './AccordionCategories';
import PendorNavbar from './PendorNavbar';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import TroopTreeSarleon from './MajorTrees/TroopTreeSarleon';

export default function PendorTroopsAppShell() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);



  return (
    <Router>
      <AppShell
        padding="xs"
        styles={{
          main: {
            background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        navbar={
          <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 200 }}>
            <PendorNavbar />
          </Navbar>

        }
        // aside={
        //   <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
        //     <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }} style={{ zIndex: 0 }}>
        //       <Text>Application sidebar</Text>
        //     </Aside>
        //   </MediaQuery>
        // }
        header={
          <Header height={70} p="md">

            <Grid style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <Grid.Col span={7} style={{ display: 'flex', alignItems: 'center', height: '100%' }}>

                <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                  <Burger
                    opened={opened}
                    onClick={() => setOpened((o) => !o)}
                    size="sm"
                    color={theme.colors.gray[6]}
                    mr="lg"
                  />
                </MediaQuery>

                <Anchor component={Link} variant="link" to="/" style={{ textDecoration: 'none' }} size="xl" inline>Pendor Troop Tree Viewer</Anchor>

              </Grid.Col>

              <Grid.Col span={5}>
                <Autocomplete
                  placeholder="Search"
                  disabled
                  data={[
                    { value: "Sarleon", group: "Major Factions" },
                    { value: "Ravenstern", group: "Major Factions" },
                    { value: "Fierdsvain", group: "Major Factions" },
                    { value: "Empire", group: "Major Factions" },
                    { value: "D'Shar", group: "Major Factions" },
                    { value: "Pendor", group: "Major Factions" },

                    { value: "Heretics", group: "Minor Factions" },
                    { value: "Jatu", group: "Minor Factions" },
                    { value: "Mystmountain Raiders", group: "Minor Factions" },
                    { value: "Snake Cult", group: "Minor Factions" },
                    { value: "Noldor", group: "Minor Factions" },
                    { value: "Vanskerries", group: "Minor Factions" },
                    { value: "Red Brotherhood", group: "Minor Factions" },
                    { value: "Forest Bandits", group: "Minor Factions" },
                    { value: "Outlaws", group: "Minor Factions" },
                    { value: "Rogue Knights", group: "Minor Factions" },
                    { value: "Barclay", group: "Minor Factions" },
                    { value: "Mettenheim", group: "Minor Factions" },
                    { value: "Veccavia", group: "Minor Factions" },
                    { value: "Melitine Empire", group: "Minor Factions" },
                    { value: "Mercenaries", group: "Minor Factions" },
                    { value: "Rebel Peasants", group: "Minor Factions" },
                    { value: "Inquisition", group: "Minor Factions" },

                    { value: "Order of the Lion", group: "Knighthood Orders" },
                    { value: "Order of the Dragon", group: "Knighthood Orders" },
                    { value: "Lady Valkyries Sisterhood", group: "Knighthood Orders" },
                    { value: "Order of the Shadow Legion", group: "Knighthood Orders" },
                    { value: "Empire Immortals", group: "Knighthood Orders" },
                    { value: "D'Shar Windriders", group: "Knighthood Orders" },
                    { value: "Order of the Griffon", group: "Knighthood Orders" },
                    { value: "Order of the Falcon", group: "Knighthood Orders" },
                    { value: "Order of the Raven Spear", group: "Knighthood Orders" },
                    { value: "Order of the Radiant Cross", group: "Knighthood Orders" },
                    { value: "Order of the Clarion Call", group: "Knighthood Orders" },
                    { value: "Order of the Ebony Gauntlet", group: "Knighthood Orders" },
                    { value: "Order of the Silvermist Rangers", group: "Knighthood Orders" },
                    { value: "Order of the Dawn", group: "Knighthood Orders" },
                    { value: "Order of Eventide", group: "Knighthood Orders" },
                    { value: "Order of the Phoenix", group: "Knighthood Orders" },
                    { value: "Order of the Shadow Wolves", group: "Knighthood Orders" },
                    { value: "Order of the Scorpion Assassins", group: "Knighthood Orders" },
                    { value: "Order of the Kraken Cultists", group: "Knighthood Orders" }
                  ]}
                  size="sm"
                  zIndex={101}
                  limit={6}
                  onItemSubmit={(item) => console.log(item.value)}
                // inputContainer={(children) => (


                //   <Anchor component={Link} to="/Sarleon">
                //   {children}
                // </Anchor>
                //   )}
                />
              </Grid.Col>
            </Grid>
          </Header>
        }
      >
        {/* <ScrollArea style={{ height: '87vh' }} type="never"> */}
        {/* <ScrollArea.Autosize maxHeight={'87vh'} type="never"> */}

        <Container px={0} mx={0} fluid sx={{ height: 'calc(100vh - var(--mantine-header-height))' }}>
          <ScrollArea style={{ height: '95%' }} type="never">
            <Routes>
              <Route path="/" element={<AccordionCategories />} />
              <Route path="/MajorTrees/Sarleon" element={<TroopTreeSarleon />} />
            </Routes>
          </ScrollArea>
        </Container>

        {/* </ScrollArea.Autosize> */}
      </AppShell>
    </Router>
  );
}