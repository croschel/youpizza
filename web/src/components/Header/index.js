import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';
import { Container, Content, LeftBox, TitleBox, UserBox } from './styles';

function Header() {
  const user = useSelector(state => state.user.profile)
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
    return;
  }

  return (
    <Container>
      <Content>
        <LeftBox>
          <TitleBox>
            <h1>ÁREA DO CLIENTE</h1>
          </TitleBox>

        </LeftBox>
        <UserBox>
          <div>
            <p>{`${user.posto_grad} ${user.nickname}`}</p>
            <Link to="/profile">editar perfil</Link>
          </div>
          <button onClick={handleSignOut}>sair do sistema</button>
        </UserBox>
      </Content>
    </Container>
  );
}

export default Header;