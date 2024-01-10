// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react';

// 2. Add your color mode config
const config = {
  initialColorMode: 'system',
  useSystemColorMode: true,
};

// 3. extend the theme
const customTheme = extendTheme({ config });

export default customTheme;
