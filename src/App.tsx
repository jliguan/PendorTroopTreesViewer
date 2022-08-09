import { MantineProvider } from '@mantine/core';
import PendorTroopsAppShell from "./PendorTroopsAppShell";


export default function App() {
  return (
    <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
      <PendorTroopsAppShell />
    </MantineProvider>
  );
}