import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { Container, Content, PromoBox, NormalBox } from './styles';

function Dashboard() {
  const [promo, setPromo] = useState(false);
  const [pizza, setPizza] = useState(0);
  const [daypromo, setDaypromo] = useState({});
  const [flavours, setFlavours] = useState([]);



  useEffect(() => {
    async function loadPromo() {
      const response = await api.get('promotion');
      setDaypromo(response.data);
    }
    loadPromo();
  }, []);

  useEffect(() => {
    async function loadFlavours() {
      const response = await api.get('flavours');
      setFlavours(response.data);
    }
    loadFlavours();
  }, []);

  async function handleSubmitOrder() {
    if (pizza > 0) {
      const response = await api.get(`flavour/${pizza}`)
      toast.success(`Sabor ${response.data.title} selecionado!`)
      history.push('border', { flavor: response.data })
    } else {
      toast.error('Selecione algum sabor ou escolha uma pizza promocional');
      return;
    }
  }

  async function handleSubmitPromo() {
    try {
      await api.post('orders', {
        promotion: true
      });

      const flavor = {
        title: daypromo.title,
        description: daypromo.description,
      };
      const border = {
        size: 'sem recheio',
      };
      const pasta = {
        thickness: 'fina',
      };
      const size = {
        diameter: 'grande'
      };
      const price = daypromo.price;

      toast.success('Você acabou de ganhar 10 PONTOS!!! \n Seus pontos serão creditados ao retornar ao dashboard');

      history.push('/finish', { flavor, border, size, pasta, price });

    } catch (err) {
      toast.error('Pedido não finalizado!');
      return;
    }
  }

  return (
    <Container>
      <Content>
        <h1>SELECIONE SUA PIZZA</h1>
        <div id="select-promopizza">
          <label htmlFor="promopizza">Promoção do dia</label>
          <select name="promopizza" value={promo} onChange={(e) => setPromo(e.target.value)}>
            <option value="" selected="selected disabled hidden">Selecione</option>
            <option value={true}>{daypromo.title}</option>
            <option value={false}>Não</option>
          </select>
        </div>
        <PromoBox style={{ display: promo ? 'flex' : 'none' }}>
          <span>
            <h3>{daypromo.title}</h3>
            <p>borda: sem recheio</p>
            <p>massa: fina</p>
            <p>tamanho: grande</p>
            <p>{`Preço: ${daypromo.price}`}</p>
          </span>
          <button onClick={handleSubmitPromo}>
            Realizar o Pedido
          </button>
        </PromoBox>
        <NormalBox style={{ display: promo ? 'none' : 'flex' }}>
          <div id="select-flavour">
            <label htmlFor="flavour">Selecione sua pizza</label>
            <select name="flavour" value={pizza} onChange={e => setPizza(e.target.value)}>
              <option value="" selected="selected disabled hidden">Selecione</option>
              {flavours.map(flavour => (
                <option value={flavour.id}>{flavour.title}</option>
              ))}
            </select>
          </div>
          <button onClick={handleSubmitOrder}>
            Avançar
            </button>
        </NormalBox>
      </Content>
    </Container>
  );
}

export default Dashboard;