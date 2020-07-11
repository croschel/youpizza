import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import returnred from '~/assets/returnred.png';
import { toast } from 'react-toastify';
import history from '~/services/history';
import api from '~/services/api';
import { Container, Content } from './styles';

function Border() {
  const resp = useLocation();
  const { flavor } = resp.state;

  const [pizza, setPizza] = useState('');
  const [borders, setBorders] = useState([]);

  useEffect(() => {
    async function loadBorders() {
      const response = await api.get('borders');
      setBorders(response.data);
    }
    loadBorders();
  }, []);

  async function handleSubmitOrder() {

    if (pizza > 0) {
      const response = await api.get(`border/${pizza}`)
      toast.success(`Borda ${response.data.size} selecionada!`)
      history.push('pasta', { flavor, border: response.data })
    } else {
      toast.error('Selecione alguma borda');
      return;
    }
  }

  function handleBack() {
    history.push('/dashboard');
  }

  return (
    <Container>
      <h2>MONTE SUA PIZZA - BORDA</h2>
      <button onClick={handleBack}>
        <img src={returnred} alt="goBack" />
      </button>
      <Content>
        <div id="content-group-box">
          <div id="select-box">
            <select required value={pizza} onChange={(e) => setPizza(e.target.value)}>
              <option value="" selected="selected disabled hidden">Selecione sua borda</option>
              {borders.map(bord => (
                <option value={bord.id}>{bord.size}</option>
              ))}
            </select>
            <button onClick={handleSubmitOrder}>AVANÇAR</button>
          </div>
          <div id="order">
            <h3>{flavor.title}</h3>
            <p>{flavor.description}</p>
            <p><strong>{`valor: ${flavor.price}`}</strong></p>
          </div>
        </div>
      </Content>
    </Container>
  );
}

export default Border;