import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import returnred from '~/assets/returnred.png';
import { toast } from 'react-toastify';
import history from '~/services/history';
import api from '~/services/api';
import { Container, Content } from './styles';

function Pasta() {
  const resp = useLocation();
  const { flavor, border } = resp.state;

  const [pizza, setPizza] = useState('');
  const [pastas, setPastas] = useState([]);

  useEffect(() => {
    async function loadPastas() {
      const response = await api.get('pastas');
      setPastas(response.data);
    }
    loadPastas();
  }, []);

  async function handleSubmitOrder() {
    if (pizza > 0) {
      const response = await api.get(`pasta/${pizza}`)
      toast.success(`Massa ${response.data.thickness} selecionada!`)
      history.push('/size', { flavor, border, pasta: response.data })
    } else {
      toast.error('Selecione alguma massa');
      return;
    }
  }

  function handleBack() {
    history.push('/border', { flavor, border });
  }
  console.tron.log(pastas)
  return (
    <Container>
      <h2>MONTE SUA PIZZA - MASSA</h2>
      <button onClick={handleBack}>
        <img src={returnred} alt="goBack" />
      </button>
      <Content>
        <div id="content-group-box">
          <div id="select-box">
            <select required name="border" value={pizza} onChange={(e) => setPizza(e.target.value)}>
              <option value="" selected="selected disabled hidden">Selecione sua massa</option>
              {pastas.map(mass => (
                <option value={mass.id}>{mass.thickness}</option>
              ))}
            </select>
            <button onClick={handleSubmitOrder}>AVANÇAR</button>
          </div>
          <div id="order">
            <h3>{flavor.title}</h3>
            <p>{flavor.description}</p>
            <p>{`borda: ${border.size}`}</p>
            <p><strong>{`valor: ${flavor.price + border.price}`}</strong></p>
          </div>
        </div>
      </Content>
    </Container>
  );
}

export default Pasta;