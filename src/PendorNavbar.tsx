import { Box, NavLink } from '@mantine/core';

export default function PendorNavbar() {
  return (
    <Box>
      <NavLink
        label="First parent link"
        childrenOffset={28}
        defaultOpened
      >
        <NavLink label="First child link" />
        <NavLink label="Second child link" />
      </NavLink>

      <NavLink
        label="Second parent link"
        childrenOffset={28}
        defaultOpened
      >
        <NavLink label="First child link" />
        <NavLink label="Second child link" />
        <NavLink label="Third child link" />
      </NavLink>
    </Box>
  );
}