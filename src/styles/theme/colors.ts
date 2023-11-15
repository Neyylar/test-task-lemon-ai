import type { DeepPartial, Theme } from '@chakra-ui/react';

const extendedColors = {
  brand: {
    100: '#35694F',
    200: '#55A37C',
    300: '#0A2819',
    400: '#E3F9EE',
    500: '#FFFFFF',
  },
  red: '#FF0000',
  blackGradient: '0px 4px 4px 0px #00000040',
};

const overridenChakraColors: DeepPartial<Theme['colors']> = {};

export const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};
