import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import youpizza from '~/assets/youpizza.png';
import { Form, Input } from '@rocketseat/unform';

// import { signUpRequest } from '~/store/modules/auth/actions';
import { Container } from './styles';


function SignUp() {
  //Dispatch Actions
  const dispatch = useDispatch();

  //Validate inputs
  const schema = Yup.object().shape({
    name: Yup.string().required("Digite um nome", "color: red"),
    email: Yup.string().required("Digite um email válido", "color: red"),
    endereco: Yup.string().required("Digite um endereço válido", "color: red"),
    password: Yup.string().required("Coloque uma senha válida", "color: red"),
  })

  function handleSubmit({ email, password }) {

    //dispatch(signUpRequest(email, password));
  }

  return (
    <Container>
      <h1>PARA REALIZAR O PEDIDO FAÇA O LOGIN</h1>
      <div>
        <img src={youpizza} alt="logo" />
        <Form schema={schema} onSubmit={handleSubmit}>
          <Input className="input-box" name="name" type="text" placeholder="Digite seu nome" />
          <Input className="input-box" name="email" type="email" placeholder="Digite seu email" />
          <Input className="input-box" name="address" type="text" placeholder="Digite seu endereço" />
          <Input className="input-box" name="password" type="password" placeholder="Digite sua senha" />
          <button type="submit">CADASTRAR</button>
          <Link to="/signin">Já tem cadastro? Clique aqui</Link>
        </Form>
      </div>
    </Container>
  );
}

export default SignUp;
