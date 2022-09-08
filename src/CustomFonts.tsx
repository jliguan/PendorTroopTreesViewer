import { Global } from '@mantine/core';
import bold from './assets/mordred/Mordred-Bold.ttf';
import regular from './assets/mordred/Mordred.ttf';

export function CustomFonts() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Mordred',
            src: `url('${bold}') format("ttf")`,
            fontWeight: 700,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Mordred',
            src: `url('${regular}') format("ttf")`,
            fontWeight: 600,
            fontStyle: 'normal',
          },
        },
      ]}
    />
  );
}