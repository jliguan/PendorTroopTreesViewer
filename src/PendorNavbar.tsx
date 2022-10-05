import { createStyles, NavLink, ScrollArea } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  root: {
    borderLeft: `1px solid ${theme.colors.dark[4]}`
  }
}));

interface PropFunc {
  onChange: React.Dispatch<React.SetStateAction<boolean>>
}

export default function PendorNavbar(props: PropFunc) {

  function handleChange(event: any) {
    props.onChange(event.target.value)
  }

  const location = useLocation();
  const { classes } = useStyles();

  return (
    <ScrollArea offsetScrollbars type="never">
      <NavLink
        label="Major Factions"
        childrenOffset={28}
      >
        {/* TODO: MAP THIS SECTION */}
        <NavLink label="Sarleon" component={Link} to="/MajorTrees/Sarleon" active={location.pathname === '/MajorTrees/Sarleon'} classNames={classes} onClick={handleChange} />
        <NavLink label="Ravenstern" component={Link} to="/MajorTrees/Ravenstern" active={location.pathname === '/MajorTrees/Ravenstern'} classNames={classes} onClick={handleChange}/>
        <NavLink label="Fierdsvain" component={Link} to="/MajorTrees/Fierdsvain" active={location.pathname === '/MajorTrees/Fierdsvain'} classNames={classes} onClick={handleChange}/>
        <NavLink label="Empire" component={Link} to="/MajorTrees/Empire" active={location.pathname === '/MajorTrees/Empire'} classNames={classes} onClick={handleChange}/>
        <NavLink label="D'Shar" component={Link} to="/MajorTrees/DShar" active={location.pathname === '/MajorTrees/DShar'} classNames={classes} onClick={handleChange}/>
        <NavLink label="Pendor" component={Link} to="/MajorTrees/Pendor" active={location.pathname === '/MajorTrees/Pendor'} classNames={classes} onClick={handleChange}/>
      </NavLink>

      <NavLink
        label="Minor Factions"
        childrenOffset={28}
      // opened={location.pathname.includes("MinorTrees")}
      // disabled
      >
        {/* TODO: MAP THIS SECTION */}
        <NavLink label="Heretics" component={Link} to="/MinorTrees/Heretics" active={location.pathname === '/MinorTrees/Heretics'} classNames={classes} />
        <NavLink label="Jatu" component={Link} to="/MinorTrees/Jatu" active={location.pathname === '/MinorTrees/Jatu'} classNames={classes} />
        <NavLink label="Mystmountain Raiders" component={Link} to="/MinorTrees/MystmountainRaiders" active={location.pathname === '/MinorTrees/MystmountainRaiders'} classNames={classes} />
        <NavLink label="Snake Cult" component={Link} to="/MinorTrees/SnakeCult" active={location.pathname === '/MinorTrees/SnakeCult'} classNames={classes} />
        <NavLink label="Noldor" component={Link} to="/MinorTrees/Noldor" active={location.pathname === '/MinorTrees/Noldor'} classNames={classes} />
        <NavLink label="Vanskerries" component={Link} to="/MinorTrees/Vanskerries" active={location.pathname === '/MinorTrees/Vanskerries'} classNames={classes} />
        <NavLink label="Red Brotherhood" component={Link} to="/MinorTrees/RedBrotherhood" active={location.pathname === '/MinorTrees/RedBrotherhood'} classNames={classes} />
        <NavLink label="Forest Bandits" component={Link} to="/MinorTrees/ForestBandits" active={location.pathname === '/MinorTrees/ForestBandits'} classNames={classes} />
        <NavLink label="Outlaws" component={Link} to="/MinorTrees/Outlaws" active={location.pathname === '/MinorTrees/Outlaws'} classNames={classes} />
        <NavLink label="Rogue Knights" component={Link} to="/MinorTrees/RogueKnights" active={location.pathname === '/MinorTrees/RogueKnights'} classNames={classes} />
        <NavLink label="Adventurer Companies" component={Link} to="/MinorTrees/AdventurerCompanies" active={location.pathname === '/MinorTrees/AdventurerCompanies'} classNames={classes} />
        <NavLink label="Barclay" component={Link} to="/MinorTrees/Barclay" active={location.pathname === '/MinorTrees/Barclay'} classNames={classes} />
        <NavLink label="Mettenheim" component={Link} to="/MinorTrees/Mettenheim" active={location.pathname === '/MinorTrees/Mettenheim'} classNames={classes} />
        <NavLink label="Veccavia" component={Link} to="/MinorTrees/Veccavia" active={location.pathname === '/MinorTrees/Veccavia'} classNames={classes} />
        <NavLink label="Singalians" component={Link} to="/MinorTrees/Singalians" active={location.pathname === '/MinorTrees/Singalians'} classNames={classes} />
        <NavLink label="Melitine Empire" component={Link} to="/MinorTrees/MelitineEmpire" active={location.pathname === '/MinorTrees/MelitineEmpire'} classNames={classes} />
        <NavLink label="Mercenaries" component={Link} to="/MinorTrees/Mercenaries" active={location.pathname === '/MinorTrees/Mercenaries'} classNames={classes} />
        <NavLink label="Rebel Peasants" component={Link} to="/MinorTrees/RebelPeasants" active={location.pathname === '/MinorTrees/RebelPeasants'} classNames={classes} />
        <NavLink label="Inquisition" component={Link} to="/MinorTrees/Inquisition" active={location.pathname === '/MinorTrees/Inquisition'} classNames={classes} />
      </NavLink>

      <NavLink
        label="Knighthood Orders"
        childrenOffset={28}
      // opened={location.pathname.includes("KOTrees")}
      // disabled
      >
        {/* TODO: MAP THIS SECTION */}
        <NavLink label="Order of the Lion" component={Link} to="/KOTrees/Lion" active={location.pathname === '/KOTrees/Lion'} classNames={classes} />
        <NavLink label="Order of the Dragon" component={Link} to="/KOTrees/Dragon" active={location.pathname === '/KOTrees/Dragon'}  classNames={classes} />
        <NavLink label="Lady Valkyries Sisterhood" component={Link} to="/KOTrees/Valkyries" active={location.pathname === '/KOTrees/Valkyries'}  classNames={classes} />
        <NavLink label="Order of the Shadow Legion" component={Link} to="/KOTrees/ShadowLegion" active={location.pathname === '/KOTrees/ShadowLegion'}  classNames={classes} />
        <NavLink label="Empire Immortals" component={Link} to="/KOTrees/Immortals" active={location.pathname === '/KOTrees/Immortals'}  classNames={classes} />
        <NavLink label="D'Shar Windriders" component={Link} to="/KOTrees/Windriders" active={location.pathname === '/KOTrees/Windriders'}  classNames={classes} />
        <NavLink label="Order of the Griffon" component={Link} to="/KOTrees/Griffon" active={location.pathname === '/KOTrees/Griffon'}  classNames={classes} />
        <NavLink label="Order of the Falcon" component={Link} to="/KOTrees/Falcon" active={location.pathname === '/KOTrees/Falcon'}  classNames={classes} />
        <NavLink label="Order of the Raven Spear" component={Link} to="/KOTrees/Raven" active={location.pathname === '/KOTrees/Raven'}  classNames={classes} />
        <NavLink label="Order of the   Cross" component={Link} to="/KOTrees/Radiant" active={location.pathname === '/KOTrees/Radiant'}  classNames={classes} />
        <NavLink label="Order of the Clarion Call" component={Link} to="/KOTrees/Clarion" active={location.pathname === '/KOTrees/Clarion'}  classNames={classes} />
        <NavLink label="Order of the Ebony Gauntlet" component={Link} to="/KOTrees/Ebony" active={location.pathname === '/KOTrees/Ebony'}  classNames={classes} />
        <NavLink label="Order of the Silvermist Rangers" component={Link} to="/KOTrees/Silvermist" active={location.pathname === '/KOTrees/Silvermist'}  classNames={classes} />
        <NavLink label="Order of the Dawn" component={Link} to="/KOTrees/Dawn" active={location.pathname === '/KOTrees/Dawn'}  classNames={classes} />
        <NavLink label="Order of Eventide" component={Link} to="/KOTrees/Eventide" active={location.pathname === '/KOTrees/Eventide'}  classNames={classes} />
        <NavLink label="Order of the Phoenix" component={Link} to="/KOTrees/Phoenix" active={location.pathname === '/KOTrees/Phoenix'}  classNames={classes} />
        <NavLink label="Order of the Shadow Wolves" component={Link} to="/KOTrees/ShadowWolves" active={location.pathname === '/KOTrees/ShadowWolves'}  classNames={classes} />
        <NavLink label="Order of the Scorpion Assassins" component={Link} to="/KOTrees/Scorpion" active={location.pathname === '/KOTrees/Scorpion'}  classNames={classes} />
        <NavLink label="Order of the Kraken Cultists" component={Link} to="/KOTrees/Kraken" active={location.pathname === '/KOTrees/Kraken'}  classNames={classes} />
      </NavLink>
    </ScrollArea>
  );
}