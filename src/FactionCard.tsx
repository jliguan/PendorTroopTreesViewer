import { createStyles, Group, Text, Image, Paper, Popover } from '@mantine/core';
import TroopData from './TroopData.json';

interface TroopProps {
  faction: 'sarleon' | 'dshar' | 'pendor' | 'ravenstern' | 'fierdsvain' | 'empire',
  name: string
}

export default function FactionCard(props: TroopProps) {

  const useStyles = createStyles((theme) => ({
    body: {
      padding: theme.spacing.md,
    },
  }));

  const { classes } = useStyles();
  const dir = "/assets/" + props.faction + "Cropped/" + (TroopData as any)[props.faction][props.name]["url"];
  console.log("dir:", dir);

  return (

    <Popover width="target" position="bottom" withArrow shadow="md">
      <Popover.Target>


        <Paper shadow="xs" pl="sm" withBorder sx={(theme) => ({

          '&:hover': {
            backgroundColor: `${theme.colors.dark[6]}`
          },
          cursor: 'pointer'

        })}>

          <Group noWrap spacing={0}>
            <Image src={dir} height={150} width={70} />
            <div className={classes.body}>
              <Text color="dimmed" weight={700} size="md">
                {(TroopData as any)[props.faction][props.name]["name"]}
              </Text>
              <Text mb="md">
                Level: {(TroopData as any)[props.faction][props.name]["level"]}
              </Text>
              <Text mt="xs" size="sm">
                Category: {(TroopData as any)[props.faction][props.name]["type"]}
              </Text>
              <Text mb="md" size="sm">
                Upgrade Cost: {(TroopData as any)[props.faction][props.name]["cost"]}
              </Text>
            </div>
          </Group>
        </Paper>

      </Popover.Target>
      <Popover.Dropdown>
        <Text size="sm">
          This popover has same width as target, it is useful when you are building input dropdowns
        </Text>
      </Popover.Dropdown>
    </Popover>





  );
}