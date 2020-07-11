import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import returngreen from '~/assets/returngreen.png';
import { toast } from 'react-toastify';
import history from '~/services/history';
import { Container, Content } from './styles';

function Finish() {
  const resp = useLocation();
  const { flavor, border, pasta, size, price } = resp.state;
  const { profile } = useSelector(state => state.user);

  function handleBack() {
    history.push('/dashboard');
    window.location.reload();
  }

  return (
    <Container>
      <h2>OBRIGADO POR PEDIR NA YOU PIZZA!</h2>
      <button onClick={handleBack}>
        <img src={returngreen} alt="goBack" />
        <p>DASHBOARD</p>
      </button>
      <Content>
        <div id="order">
          <h3>{flavor.title}</h3>
          <p>{flavor.description}</p>
          <p>{`borda: ${border.size}`}</p>
          <p>{`massa: ${pasta.thickness}`}</p>
          <p>{`tamanho: ${size.diameter}`}</p>
          <p><strong>{`valor: ${price}`}</strong></p>
        </div>
        <div id="respects">
          <p>{`${profile.name} EM BREVE SEU PEDIDO CHEGARÁ NO ENDEREÇO ${profile.endereco}`}</p>
          <p>A YOU PIZZA RECOMENDA O USO DE MÁSCARA AO RECEBER NOSSO ENTREGADOR</p>
        </div>
      </Content>
    </Container>
  );
}

export default Finish;