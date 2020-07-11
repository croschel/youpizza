import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import returnred from '~/assets/returnred.png';
import { toast } from 'react-toastify';
import history from '~/services/history';
import api from '~/services/api';
import { Container, Content } from './styles';

function Check() {
  const resp = useLocation();
  const { flavor, border, pasta, size } = resp.state;
  const price = flavor.price + border.price + pasta.price + size.price;

  async function handleSubmitOrder() {
    try {
      await api.post('orders', {
        promotion: false,
        flavour_id: flavor.id,
        border_id: border.id,
        size_id: size.id,
        pasta_id: pasta.id,
      });
      toast.success('Seu Pedido foi enviado com sucesso!');
      history.push('/finish', { flavor, border, pasta, size, price });
    } catch (err) {
      toast.error('Ops algo estranho ocorreu... Repita a operação');
      return;
    }
  }

  function handleBack() {
    history.push('/size', { flavor, border, pasta, size });
  }

  function handleCancel() {
    history.push('/dashboard')
  }

  return (
    <Container>
      <h2>VERIFIQUE SEU PEDIDO</h2>
      <button onClick={handleBack}>
        <img src={returnred} alt="goBack" />
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
        <button id="submit-btn" onClick={handleSubmitOrder}>FINALIZAR</button>
        <button id="cancel-btn" onClick={handleCancel}>CANCELAR</button>
      </Content>
    </Container>
  );
}

export default Check;