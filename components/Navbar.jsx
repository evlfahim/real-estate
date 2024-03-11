// Navbar.jsx

import Link from 'next/link';
import { Flex, Box, Spacer, IconButton } from '@chakra-ui/react';
import { FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

const Navbar = () => (
  <Flex p="2" borderBottom="1px" borderColor="gray.100" alignItems="center">
    <Box fontSize="3xl" color="red.400" fontWeight="bold">
      <Link href="/" paddingLeft="2">
        getApartments
      </Link>
    </Box>
    <Spacer />
    <Flex>
      <Link href="/" passHref>
        <Box as="a" display="flex" alignItems="center" pr="4">
          <FcHome />
          Home
        </Box>
      </Link>
      <Link href="/search" passHref>
        <Box as="a" display="flex" alignItems="center" pr="4">
          <BsSearch />
          Search
        </Box>
      </Link>
      <Link href="/search?purpose=for-sale" passHref>
        <Box as="a" display="flex" alignItems="center" pr="4">
          <FcAbout />
          Buy Property
        </Box>
      </Link>
      <Link href="/search?purpose=for-rent" passHref>
        <Box as="a" display="flex" alignItems="center" pr="4">
          <FiKey />
          Rent Property
        </Box>
      </Link>
    </Flex>
  </Flex>
);

export default Navbar;
