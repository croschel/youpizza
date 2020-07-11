import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import returnred from '~/assets/returnred.png';
import { toast } from 'react-toastify';
import history from '~/services/history';
import api from '~/services/api';
import { Container, Content } from './styles';

function Size() {
  const resp = useLocation();
  const { flavor, border, pasta } = resp.state;

  const [pizza, setPizza] = useState('');
  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    async function loadSizes() {
      const response = await api.get('sizes');
      setSizes(response.data);
    }
    loadSizes();
  }, []);

  async function handleSubmitOrder() {
    if (pizza > 0) {
      const response = await api.get(`size/${pizza}`)
      toast.success(`Tamanho ${response.data.diameter} selecionado!`)
      history.push('/check', { flavor, border, pasta, size: response.data })
    } else {
      toast.error('Selecione algum tamanho');
      return;
    }
  }

  function handleBack() {
    history.push('/pasta', { flavor, border, pasta });
  }

  return (
    <Container>
      <h2>MONTE SUA PIZZA - TAMANHO</h2>
      <button onClick={handleBack}>
        <img src={returnred} alt="goBack" />
      </button>
      <Content>
        <div id="content-group-box">
          <div id="select-box">
            <select required value={pizza} onChange={(e) => setPizza(e.target.value)}>
              <option value="" selected="selected disabled hidden">Selecione seu tamanho</option>
              {sizes.map(size => (
                <option value={size.id}>{size.diameter}</option>
              ))}
            </select>
            <button onClick={handleSubmitOrder}>AVANÇAR</button>
          </div>
          <div id="order">
            <h3>{flavor.title}</h3>
            <p>{flavor.description}</p>
            <p>{`borda: ${border.size}`}</p>
            <p>{`massa: ${pasta.thickness}`}</p>
            <p><strong>{`valor: ${flavor.price + border.price + pasta.price}`}</strong></p>
          </div>
        </div>
      </Content>
    </Container>
  );
}

export default Size;