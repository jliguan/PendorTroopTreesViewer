import { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  ScrollArea,
  Anchor,
  Autocomplete,
  Grid
} from '@mantine/core';
import AccordionCategories from './AccordionCategories';
import PendorNavbar from './PendorNavbar';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes
} from "react-router-dom";
import TroopTreeSarleon from './MajorTrees/TroopTreeSarleon';

export default function PendorTroopsAppShell() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <Router>
      <AppShell
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
        aside={
          <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }} style={{ zIndex: 0 }}>
              <Text>Application sidebar</Text>
            </Aside>
          </MediaQuery>
        }
        // footer={
        //   <Footer height={60} p="md">
        //     Application footer
        //   </Footer>
        // }
        header={
          <Header height={70} p="md">

            <Grid style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <Grid.Col span={6} style={{ display: 'flex', alignItems: 'center', height: '100%' }}>

                <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                  <Burger
                    opened={opened}
                    onClick={() => setOpened((o) => !o)}
                    size="sm"
                    color={theme.colors.gray[6]}
                    mr="xl"
                  />
                </MediaQuery>

                <Anchor component={Link} variant="link" to="/" style={{ textDecoration: 'none' }} size="lg" inline>Pendor Troops</Anchor>

              </Grid.Col>


              <Grid.Col span={3} offset={3}>


                <Autocomplete
                  placeholder="Search"
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
                    { value: "Inquisition", group: "Minor Factions" }
                  ]}
                  size="sm"
                  zIndex={101}
                  limit={6}
                />
              </Grid.Col>
            </Grid>
          </Header>
        }
      >
        <ScrollArea style={{ height: '91vh' }} type="never">
          <Routes>
            <Route path="/" element={<AccordionCategories />} />
            <Route path="Minor Factions" element={<TroopTreeSarleon />} />
          </Routes>
        </ScrollArea>
      </AppShell>
    </Router>
  );
}