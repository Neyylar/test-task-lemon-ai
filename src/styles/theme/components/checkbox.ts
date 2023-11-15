import type { ComponentStyleConfig } from '@chakra-ui/react';

import { colors } from '~/styles/theme/colors';

export const Checkbox: ComponentStyleConfig = {
  baseStyle: {
    control: {
      background: 'unset',
      backgroundColor: colors.brand[500],
      color: colors.brand[500],
      borderColor: colors.brand[100],
      borderRadius: '5px',
      border: '1.5px solid',
      textColor: colors.brand[500],
      boxShadow: colors.blackGradient,
      _hover: {
        backgroundColor: colors.brand[400],
        color: colors.brand[400],
        _checked: {
          backgroundColor: colors.brand[100],
          color: colors.brand[500],
        },
      },
      _checked: {
        borderColor: colors.brand[100],
        backgroundColor: colors.brand[500],
        color: colors.brand[100],
      },
    },
  },
};
