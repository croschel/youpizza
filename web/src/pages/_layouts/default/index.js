import React from 'react';
import { Wrapper, Content } from './styles';
import Header from '~/components/Header';

function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      <Content>{children}</Content>
    </Wrapper>
  );
}

export default DefaultLayout;
