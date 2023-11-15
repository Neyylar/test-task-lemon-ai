import type { ComponentStyleConfig } from '@chakra-ui/react';

import { colors } from '~/styles/theme/colors';

export const Input: ComponentStyleConfig = {
  baseStyle: {
    borderColor: colors.brand[100],
    field: {
      height: '55px',
      background: 'unset',
      border: '1.5px solid',
      borderColor: '#333444',
      borderRadius: '5px',
      boxShadow: colors.blackGradient,
      _focus: {
        borderColor: colors.brand[100],
        border: '3px solid',
        boxShadow: colors.blackGradient,
      },
      _focusVisible: {
        border: '3px solid',
        borderColor: colors.brand[100],
        boxShadow: colors.blackGradient,
      },
      _invalid: {
        border: '1.5px solid',
        borderColor: colors.red,
        boxShadow: colors.blackGradient,
      },
    },
  },
};
