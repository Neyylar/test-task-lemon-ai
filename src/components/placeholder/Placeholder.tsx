import { Box } from '@chakra-ui/react';
import {colors} from "~/styles/theme/colors";


export const Placeholder = () => {
  return (
    <Box
      backgroundColor={colors.brand?.['400'] as string}
      borderRadius={4}
      w={100}
      h={4}
    />
  );
};
