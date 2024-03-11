// HeroSection.jsx

import React from 'react';
import { Box, Flex, Heading, Button } from '@chakra-ui/react';

const HeroSection = () => {
  return (
    <Flex align="center" justify="center" h="400px" bg="gray.200">
      <Box>
        {/* Welcome Message */}
        <Heading as="h1" mb="4">
          Welcome to Your Dream Home
        </Heading>
        {/* Call to Action Button */}
        <Button colorScheme="teal">List Your Property</Button>
      </Box>
    </Flex>
  );
};

export default HeroSection;
