import React from 'react';
import { Wrapper, Content } from './styles';

function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

export default DefaultLayout;
