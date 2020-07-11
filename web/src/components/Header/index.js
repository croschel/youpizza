import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';
import youpizza from '~/assets/youpizza.png';
import exit from '~/assets/exit.png';
import api from '~/services/api';
import { Container, LeftBox, RightBox } from './styles';

function Header() {
  const user = useSelector(state => state.user.profile)

  const dispatch = useDispatch();

  const [points, setPoints] = useState(0);

  function handleSignOut() {
    dispatch(signOut());
    return;
  }

  useEffect(() => {
    async function updatePoints() {
      const response = await api.get(`users/${user.id}`);
      console.tron.log(response.data)
      const { points } = response.data;
      setPoints(points);
    }
    updatePoints();
  }, [])

  return (
    <Container>
      <LeftBox>
        <img src={youpizza} alt="logo" />
      </LeftBox>
      <h1>ÁREA DO CLIENTE</h1>
      <RightBox>
        <div id="user-box">
          <p>{`Bem vindo, ${user.name}`}</p>
          <p>{`${points} pts`}</p>
          <Link to="/edit_user">Editar usuário</Link>
        </div>
        <div id="sign-out">
          <button onClick={handleSignOut}>
            <img src={exit} alt="signOut" />
          </button>
        </div>
      </RightBox>
    </Container>
  );
}

export default Header;