import type { ComponentStyleConfig } from '@chakra-ui/react';

import { colors } from '~/styles/theme/colors';

export const Button: ComponentStyleConfig = {
  baseStyle: {
    background: 'unset',
    backgroundColor: colors.brand?.[100],
    color: colors.brand?.[400],
    textColor: colors.brand?.[400],
    border: '1.5px solid #35694F',
    borderRadius: '5px',
    padding: '17px 33px 17px 33px',
    boxShadow: colors.blackGradient,
    _hover: {
      background: 'unset',
      backgroundColor: colors.brand?.[200],
    },
    _pressed: {
      background: 'unset',
      backgroundColor: colors.brand?.[300],
    },
    _active: {
      background: 'unset',
      backgroundColor: colors.brand?.[300],
    },
  },
};
