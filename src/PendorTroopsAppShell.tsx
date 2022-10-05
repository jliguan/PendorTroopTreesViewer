import React, { lazy, useState } from 'react';
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
import LoadingScreen from './LoadingScreen';

const TroopTreeSarleon = lazy(() => import('./MajorTrees/TroopTreeSarleon'));
const TroopTreeRavenstern = lazy(() => import('./MajorTrees/TroopTreeRavenstern'));
const TroopTreeFierdsvain = lazy(() => import('./MajorTrees/TroopTreeFierdsvain'));
const TroopTreeEmpire = lazy(() => import('./MajorTrees/TroopTreeEmpire'));
const TroopTreeDShar = lazy(() => import('./MajorTrees/TroopTreeDShar'));
const TroopTreePendor = lazy(() => import('./MajorTrees/TroopTreePendor'));
const Heretics = lazy(() => import('./MinorTrees/Heretics'));
const Jatu = lazy(() => import('./MinorTrees/Jatu'));
const MystmountainRaiders = lazy(() => import('./MinorTrees/MystmountainRaiders'));
const SnakeCult = lazy(() => import('./MinorTrees/SnakeCult'));
const Noldor = lazy(() => import('./MinorTrees/Noldor'));
const Vanskerries = lazy(() => import('./MinorTrees/Vanskerries'));
const RedBrotherhood = lazy(() => import('./MinorTrees/RedBrotherhood'));
const ForestBandits = lazy(() => import('./MinorTrees/ForestBandits'));
const Outlaws = lazy(() => import('./MinorTrees/Outlaws'));
const RogueKnights = lazy(() => import('./MinorTrees/RogueKnights'));
const AdventurerCompanies = lazy(() => import('./MinorTrees/AdventurerCompanies'));
const Barclay = lazy(() => import('./MinorTrees/Barclay'));
const Mettenheim = lazy(() => import('./MinorTrees/Mettenheim'));
const Veccavia = lazy(() => import('./MinorTrees/Veccavia'));
const Singalians = lazy(() => import('./MinorTrees/Singalians'));
const MelitineEmpire = lazy(() => import('./MinorTrees/MelitineEmpire'));
const Mercenaries = lazy(() => import('./MinorTrees/Mercenaries'));
const RebelPeasants = lazy(() => import('./MinorTrees/RebelPeasants'));
const Inquisition = lazy(() => import('./MinorTrees/Inquisition'));
const Lion = lazy(() => import('./KOTrees/Lion'));
const Dragon = lazy(() => import('./KOTrees/Dragon'));
const Valkyries = lazy(() => import('./KOTrees/Valkyries'));
const ShadowLegion = lazy(() => import('./KOTrees/ShadowLegion'));
const Immortals = lazy(() => import('./KOTrees/Immortals'));
const Windriders = lazy(() => import('./KOTrees/Windriders'));
const Griffon = lazy(() => import('./KOTrees/Griffon'));
const Falcon = lazy(() => import('./KOTrees/Falcon'));
const Raven = lazy(() => import('./KOTrees/Raven'));
const Radiant = lazy(() => import('./KOTrees/Radiant'));
const Clarion = lazy(() => import('./KOTrees/Clarion'));
const Ebony = lazy(() => import('./KOTrees/Ebony'));
const Silvermist = lazy(() => import('./KOTrees/Silvermist'));
const Dawn = lazy(() => import('./KOTrees/Dawn'));
const Eventide = lazy(() => import('./KOTrees/Eventide'));
const Phoenix = lazy(() => import('./KOTrees/Phoenix'));
const ShadowWolves = lazy(() => import('./KOTrees/ShadowWolves'));
const Scorpion = lazy(() => import('./KOTrees/Scorpion'));
const Kraken = lazy(() => import('./KOTrees/Kraken'));

const linkData = [
  { component: <TroopTreeSarleon />, path: "/MajorTrees/Sarleon" },
  { component: <TroopTreeRavenstern />, path: "/MajorTrees/Ravenstern" },
  { component: <TroopTreeFierdsvain />, path: "/MajorTrees/Fierdsvain" },
  { component: <TroopTreeEmpire />, path: "/MajorTrees/Empire" },
  { component: <TroopTreeDShar />, path: "/MajorTrees/DShar" },
  { component: <TroopTreePendor />, path: "/MajorTrees/Pendor" },
  { component: <Heretics />, path: "/MinorTrees/Heretics" },
  { component: <Jatu />, path: "/MinorTrees/Jatu" },
  { component: <MystmountainRaiders />, path: "/MinorTrees/MystmountainRaiders" },
  { component: <SnakeCult />, path: "/MinorTrees/SnakeCult" },
  { component: <Noldor />, path: "/MinorTrees/Noldor" },
  { component: <Vanskerries />, path: "/MinorTrees/Vanskerries" },
  { component: <RedBrotherhood />, path: "/MinorTrees/RedBrotherhood" },
  { component: <ForestBandits />, path: "/MinorTrees/ForestBandits" },
  { component: <Outlaws />, path: "/MinorTrees/Outlaws" },
  { component: <RogueKnights />, path: "/MinorTrees/RogueKnights" },
  { component: <AdventurerCompanies />, path: "/MinorTrees/AdventurerCompanies" },
  { component: <Barclay />, path: "/MinorTrees/Barclay" },
  { component: <Mettenheim />, path: "/MinorTrees/Mettenheim" },
  { component: <Veccavia />, path: "/MinorTrees/Veccavia" },
  { component: <Singalians />, path: "/MinorTrees/Singalians" },
  { component: <MelitineEmpire />, path: "/MinorTrees/MelitineEmpire" },
  { component: <Mercenaries />, path: "/MinorTrees/Mercenaries" },
  { component: <RebelPeasants />, path: "/MinorTrees/RebelPeasants" },
  { component: <Inquisition />, path: "/MinorTrees/Inquisition" },
  { component: <Lion />, path: "/KOTrees/Lion" },
  { component: <Dragon />, path: "/KOTrees/Dragon" },
  { component: <Valkyries />, path: "/KOTrees/Valkyries" },
  { component: <ShadowLegion />, path: "/KOTrees/ShadowLegion" },
  { component: <Immortals />, path: "/KOTrees/Immortals" },
  { component: <Windriders />, path: "/KOTrees/Windriders" },
  { component: <Griffon />, path: "/KOTrees/Griffon" },
  { component: <Falcon />, path: "/KOTrees/Falcon" },
  { component: <Raven />, path: "/KOTrees/Raven" },
  { component: <Radiant />, path: "/KOTrees/Radiant" },
  { component: <Clarion />, path: "/KOTrees/Clarion" },
  { component: <Ebony />, path: "/KOTrees/Ebony" },
  { component: <Silvermist />, path: "/KOTrees/Silvermist" },
  { component: <Dawn />, path: "KOTrees/Dawn" },
  { component: <Eventide />, path: "/KOTrees/Eventide" },
  { component: <Phoenix />, path: "/KOTrees/Phoenix" },
  { component: <ShadowWolves />, path: "/KOTrees/ShadowWolves" },
  { component: <Scorpion />, path: "/KOTrees/Scorpion" },
  { component: <Kraken />, path: "/KOTrees/Kraken" }
];

const routeItems = linkData.map((item) => (
  <Route path={item.path} key={item.path} element={
    <React.Suspense fallback={<LoadingScreen />}>
      {item.component}
    </React.Suspense>
  } />
));


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
            <PendorNavbar onChange={setOpened} />

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
                    { value: "Adventurer Companies", group: "Minor Factions" },
                    { value: "Barclay", group: "Minor Factions" },
                    { value: "Mettenheim", group: "Minor Factions" },
                    { value: "Veccavia", group: "Minor Factions" },
                    { value: "Singalians", group: "Minor Factions" },
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
          <MediaQuery smallerThan={480} styles={{ display: 'none' }}>
            <ScrollArea style={{ height: '100%' }} type="hover" offsetScrollbars scrollbarSize={8}>
              <Routes>
                <Route path="/" element={<AccordionCategories />} />
                {routeItems}
              </Routes>
            </ScrollArea>
          </MediaQuery>
          <MediaQuery largerThan={480} styles={{ display: 'none' }}>
            <ScrollArea style={{ height: '100%' }} type="never" scrollbarSize={8}>
              <Routes>
                <Route path="/" element={<AccordionCategories />} />
                {routeItems}
              </Routes>
            </ScrollArea>
            </MediaQuery>


        </Container>

        {/* </ScrollArea.Autosize> */}
      </AppShell>
    </Router>
  );
}