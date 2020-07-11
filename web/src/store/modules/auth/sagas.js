import { takeLatest, call, put, all } from 'redux-saga/effects';
import history from '~/services/history';
import api from '~/services/api';
import { signInSuccess, signFailure } from './actions';
import { toast } from 'react-toastify';

export function* signIn({ payload }) {

  console.tron.log(payload)
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'session', {
      email,
      password,
    });

    const { token, user } = response.data;
    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));
    toast.success("Login realizado com sucesso")
    history.push('/dashboard');

  } catch (err) {
    yield put(signFailure());
    toast.error("Falha no Login, Email ou senha incorretos")
  }

}

export function signOut() {
  history.push('/');
  toast.success("Logout realizado com sucesso")
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, address, password } = payload;
    yield call(api.post, 'users', {
      name,
      email,
      endereco: address,
      password
    });

    toast.success(`Usuário ${name} cadastrado com sucesso!`)
    history.push('/signin')
  } catch (err) {
    yield put(signFailure());
    toast.error('Erro! Verifique seus dados e tente novamente.')
  }



}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut)
])