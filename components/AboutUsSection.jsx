// AboutUsSection.jsx

import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';

const AboutUsSection = () => {
  return (
    <Flex justify="space-between" align="center" p="8">
      <Box>
        {/* Image on right */}
        <Image src="/about-us-image.jpg" alt="About Us Image" boxSize="200px" />
      </Box>
      <Box>
        {/* Description on left */}
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla mauris ac
          lectus consectetur, id semper purus facilisis.
        </Text>
      </Box>
    </Flex>
  );
};

export default AboutUsSection;
