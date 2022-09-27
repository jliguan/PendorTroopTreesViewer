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
  Container,
  Group,
  Tooltip,
  ActionIcon,
  CopyButton
} from '@mantine/core';
import AccordionCategories from './AccordionCategories';
import PendorNavbar from './PendorNavbar';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import { IconBrandDiscord, IconBrandGithub } from '@tabler/icons'
import TroopTreeSarleon from './MajorTrees/TroopTreeSarleon';
import TroopTreeRavenstern from './MajorTrees/TroopTreeRavenstern';
import TroopTreeFierdsvain from './MajorTrees/TroopTreeFierdsvain';
import TroopTreeEmpire from './MajorTrees/TroopTreeEmpire';
import TroopTreeDShar from './MajorTrees/TroopTreeDShar';
import TroopTreePendor from './MajorTrees/TroopTreePendor';
import Heretics from './MinorTrees/Heretics';
import Jatu from './MinorTrees/Jatu';
import MystmountainRaiders from './MinorTrees/MystmountainRaiders';
import SnakeCult from './MinorTrees/SnakeCult';
import Noldor from './MinorTrees/Noldor';
import Vanskerries from './MinorTrees/Vanskerries';
import RedBrotherhood from './MinorTrees/RedBrotherhood';

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
        asideOffsetBreakpoint={1000}
        navbar={
          <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 200 }} sx={{ flexDirection: "column", justifyContent: "space-between" }}>
            <PendorNavbar />

            <Group position="center" sx={{ borderTop: "1px solid grey", paddingTop: "10px" }}>
              <CopyButton value="yd#3241" timeout={1500}>
                {({ copied, copy }) => (
                  <Tooltip label={copied ? 'Copied' : 'Contact me: yd#3241'}>
                    <ActionIcon size="xl" color="#7289d9" variant="filled" onClick={copy}>
                      <IconBrandDiscord />
                    </ActionIcon>
                  </Tooltip>
                )}
              </CopyButton>

              <Tooltip label="Github">
                <ActionIcon size="xl" color="white" variant="outline" component="a" href="https://github.com/jliguan/PendorTroopTreesViewer" target="_blank">
                  <IconBrandGithub />
                </ActionIcon>
              </Tooltip>
            </Group>
          </Navbar>
        }
        // aside={
        //   <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
        //     <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }} style={{ zIndex: 0 }}>
        //       {/* <Text>Application sidebar</Text> */}
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

                <MediaQuery smallerThan={480} styles={{ display: 'none' }}>
                  <Anchor component={Link} variant="link" to="/" style={{ textDecoration: 'none' }} size="xl" inline p={5}
                    sx={{
                      '&:hover': {
                        backgroundColor: `${theme.colors.dark[6]}`,
                      }
                    }}>
                    Pendor Troop Tree Viewer
                  </Anchor>
                </MediaQuery>
                <MediaQuery largerThan={480} styles={{ display: 'none' }}>
                  <Anchor component={Link} variant="link" to="/" style={{ textDecoration: 'none' }} size="lg" inline p={5}
                    sx={{
                      '&:hover': {
                        backgroundColor: `${theme.colors.dark[6]}`,
                      }
                    }}>
                    Pendor Troop Tree Viewer
                  </Anchor>
                </MediaQuery>


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
          <ScrollArea style={{ height: '95%' }} type="hover" offsetScrollbars scrollbarSize={8}>
            <Routes>
              <Route path="/" element={<AccordionCategories />} />
              <Route path="/MajorTrees/Sarleon" element={<TroopTreeSarleon />} />
              <Route path="/MajorTrees/Ravenstern" element={<TroopTreeRavenstern />} />
              <Route path="/MajorTrees/Fierdsvain" element={<TroopTreeFierdsvain />} />
              <Route path="/MajorTrees/Empire" element={<TroopTreeEmpire />} />
              <Route path="/MajorTrees/DShar" element={<TroopTreeDShar />} />
              <Route path="/MajorTrees/Pendor" element={<TroopTreePendor />} />

              <Route path="/MinorTrees/Heretics" element={<Heretics />} />
              <Route path="/MinorTrees/Jatu" element={<Jatu />} />
              <Route path="/MinorTrees/MystmountainRaiders" element={<MystmountainRaiders />} />
              <Route path="/MinorTrees/SnakeCult" element={<SnakeCult />} />
              <Route path="/MinorTrees/Noldor" element={<Noldor />} />
              <Route path="/MinorTrees/Vanskerries" element={<Vanskerries />} />
              <Route path="/MinorTrees/RedBrotherhood" element={<RedBrotherhood />} />
            </Routes>
          </ScrollArea>

        </Container>

        {/* </ScrollArea.Autosize> */}
      </AppShell>
    </Router>
  );
}