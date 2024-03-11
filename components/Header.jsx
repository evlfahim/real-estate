// Header.jsx

import React from 'react';
import { Box, Flex, Image, Button, Menu, MenuButton, MenuList, MenuItem, Icon } from '@chakra-ui/react';
import { AiOutlineGlobal } from 'react-icons/ai';

const Header = () => {
  return (
    <Flex justify="space-between" align="center" p="4" bg="gray.800" color="white">
      <Box>
        {/* Company Logo */}
        <Image src="/company-logo.png" alt="Company Logo" boxSize="50px" />
      </Box>
      <Box>
        {/* Main Navigation Menu */}
       
      </Box>
    </Flex>
  );
};

export default Header;
