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
    <ScrollArea offsetScrollbars>
      <NavLink
        label="Major Factions"
        childrenOffset={28}
        // defaultOpened
        defaultOpened={location.pathname === '/MajorTrees/Sarleon'}
      >
        <NavLink label="Sarleon" component={Link} to="/MajorTrees/Sarleon" active={location.pathname === '/MajorTrees/Sarleon'} classNames={classes} />
        <NavLink label="Ravenstern" classNames={classes} />
        <NavLink label="Fierdsvain" classNames={classes} />
        <NavLink label="Empire"  classNames={classes} />
        <NavLink label="D'Shar" classNames={classes} />
        <NavLink label="Pendor" classNames={classes} />
      </NavLink>

      <NavLink
        label="Minor Factions"
        childrenOffset={28}
      // defaultOpened
      >
        <NavLink label="Heretics" classNames={classes} />
        <NavLink label="Jatu" classNames={classes} />
        <NavLink label="Mystmountain Raiders" classNames={classes} />
        <NavLink label="Snake Cult" classNames={classes} />
        <NavLink label="Noldor" classNames={classes} />
        <NavLink label="Vanskerries" classNames={classes} />
        <NavLink label="Red Brotherhood" classNames={classes} />
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
      // defaultOpened
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