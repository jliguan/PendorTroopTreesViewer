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
  Anchor
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
            <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
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
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>

              <Anchor component={Link} variant="link" to="/" style={{ textDecoration: 'none' }} >Pendor Troops</Anchor>
            </div>
          </Header>
        }
      >
        <ScrollArea style={{ height: '91vh' }} type="never">
          <Routes>
            <Route path="/" element={<AccordionCategories />} />
            <Route path="/MajorTrees/Sarleon" element={<TroopTreeSarleon />} />
          </Routes>
        </ScrollArea>
      </AppShell>
    </Router>
  );
}

function createStyles(arg0: (theme: any) => { root: { borderLeft: string; }; }) {
  throw new Error('Function not implemented.');
}
