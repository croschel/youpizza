import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import youpizza from '~/assets/youpizza.png';
import returnred from '~/assets/returnred.png';
import { Form, Input } from '@rocketseat/unform';

import { signInRequest } from '~/store/modules/auth/actions';
import { Container } from './styles';


function SignIn() {
  //Dispatch Actions
  const dispatch = useDispatch();

  //Validate inputs
  const schema = Yup.object().shape({
    email: Yup.string().required("Digite um email válido", "color: red"),
    password: Yup.string().required("Coloque uma senha válida", "color: red"),
  })

  function handleSubmit({ email, password }) {

    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <h1>PARA REALIZAR O PEDIDO FAÇA O LOGIN</h1>
      <div id="return">
        <Link to="/">
          <img src={returnred} alt="return" />
        </Link>
      </div>
      <div id="content">
        <img src={youpizza} alt="logo" />
        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="email" type="email" placeholder="Digite seu email" />
          <Input name="password" type="password" placeholder="Digite sua senha" />
          <button type="submit">ACESSAR</button>
          <Link to="/signup">Criar uma conta gratuitamente</Link>
        </Form>
      </div>
    </Container>
  );
}

export default SignIn;
