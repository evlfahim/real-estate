// Footer.jsx

import React from 'react';
import { Box, Flex, Text, Link } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex justify="space-between" align="center" p="4" bg="gray.800" color="white">
      <Box>
        {/* Quick Links */}
        <Link mr="4">Terms of Service</Link>
        <Link mr="4">Privacy Policy</Link>
        <Link>FAQs</Link>
      </Box>
      <Box>
        {/* Social Media Links */}
        <Text mr="4">Follow Us:</Text>
        <Link mr="4">Facebook</Link>
        <Link>Twitter</Link>
      </Box>
      <Box>
        {/* Copyright notice */}
        <Text>&copy; 2024 Your Company. All rights reserved.</Text>
      </Box>
    </Flex>
  );
};

export default Footer;
