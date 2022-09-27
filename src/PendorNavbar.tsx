import { createStyles, NavLink, ScrollArea } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  root: {
    borderLeft: `1px solid ${theme.colors.dark[4]}`
  }
}));

export default function PendorNavbar() {

  const location = useLocation();
  const { classes } = useStyles();

  return (
    <ScrollArea offsetScrollbars type="never">
      <NavLink
        label="Major Factions"
        childrenOffset={28}
      >
        <NavLink label="Sarleon" component={Link} to="/MajorTrees/Sarleon" active={location.pathname === '/MajorTrees/Sarleon'} classNames={classes} />
        <NavLink label="Ravenstern" component={Link} to="/MajorTrees/Ravenstern" active={location.pathname === '/MajorTrees/Ravenstern'} classNames={classes} />
        <NavLink label="Fierdsvain" component={Link} to="/MajorTrees/Fierdsvain" active={location.pathname === '/MajorTrees/Fierdsvain'} classNames={classes} />
        <NavLink label="Empire" component={Link} to="/MajorTrees/Empire" active={location.pathname === '/MajorTrees/Empire'} classNames={classes} />
        <NavLink label="D'Shar" component={Link} to="/MajorTrees/DShar" active={location.pathname === '/MajorTrees/DShar'} classNames={classes} />
        <NavLink label="Pendor" component={Link} to="/MajorTrees/Pendor" active={location.pathname === '/MajorTrees/Pendor'} classNames={classes} />
      </NavLink>

      <NavLink
        label="Minor Factions"
        childrenOffset={28}
        // opened={location.pathname.includes("MinorTrees")}
        // disabled
      >
        <NavLink label="Heretics" component={Link} to="/MinorTrees/Heretics" active={location.pathname === '/MinorTrees/Heretics'} classNames={classes} />
        <NavLink label="Jatu" component={Link} to="/MinorTrees/Jatu" active={location.pathname === '/MinorTrees/Jatu'} classNames={classes} />
        <NavLink label="Mystmountain Raiders" component={Link} to="/MinorTrees/MystmountainRaiders" active={location.pathname === '/MinorTrees/MystmountainRaiders'} classNames={classes} />
        <NavLink label="Snake Cult" component={Link} to="/MinorTrees/SnakeCult" active={location.pathname === '/MinorTrees/SnakeCult'} classNames={classes} />
        <NavLink label="Noldor" component={Link} to="/MinorTrees/Noldor" active={location.pathname === '/MinorTrees/Noldor'} classNames={classes} />
        <NavLink label="Vanskerries" component={Link} to="/MinorTrees/Vanskerries" active={location.pathname === '/MinorTrees/Vanskerries'} classNames={classes} />
        <NavLink label="Red Brotherhood" component={Link} to="/MinorTrees/RedBrotherhood" active={location.pathname === '/MinorTrees/RedBrotherhood'} classNames={classes} />
        <NavLink label="Forest Bandits" classNames={classes} />
        <NavLink label="Outlaws" classNames={classes} />
        <NavLink label="Rogue Knights" classNames={classes} />
        <NavLink label="Barclay" classNames={classes} />
        <NavLink label="Mettenheim" classNames={classes} />
        <NavLink label="Veccavia" classNames={classes} />
        <NavLink label="Melitine Empire" classNames={classes} />
        <NavLink label="Mercenaries" classNames={classes} />
        <NavLink label="Rebel Peasants" classNames={classes} />
        <NavLink label="Inquisition" classNames={classes} />
      </NavLink>

      <NavLink
        label="Knighthood Orders"
        childrenOffset={28}
        // opened={location.pathname.includes("KOTrees")}
        // disabled
      >
        <NavLink label="Order of the Lion" classNames={classes} />
        <NavLink label="Order of the Dragon" classNames={classes} />
        <NavLink label="Lady Valkyries Sisterhood" classNames={classes} />
        <NavLink label="Order of the Shadow Legion" classNames={classes} />
        <NavLink label="Empire Immortals" classNames={classes} />
        <NavLink label="D'Shar Windriders" classNames={classes} />
        <NavLink label="Order of the Griffon" classNames={classes} />
        <NavLink label="Order of the Falcon" classNames={classes} />
        <NavLink label="Order of the Raven Spear" classNames={classes} />
        <NavLink label="Order of the Radiant Cross" classNames={classes} />
        <NavLink label="Order of the Clarion Call" classNames={classes} />
        <NavLink label="Order of the Ebony Gauntlet" classNames={classes} />
        <NavLink label="Order of the Silvermist Rangers" classNames={classes} />
        <NavLink label="Order of the Dawn" classNames={classes} />
        <NavLink label="Order of Eventide" classNames={classes} />
        <NavLink label="Order of the Phoenix" classNames={classes} />
        <NavLink label="Order of the Shadow Wolves" classNames={classes} />
        <NavLink label="Order of the Scorpion Assassins" classNames={classes} />
        <NavLink label="Order of the Kraken Cultists" classNames={classes} />
      </NavLink>
    </ScrollArea>
  );
}