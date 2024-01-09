import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { VStack } from '@chakra-ui/react';

const Layout = () => {
  return (
    <VStack>
      <Header />

      <Outlet />

      <Footer />
    </VStack>
  );
};

export default Layout;
