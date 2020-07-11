import React from 'react';

import youpizza from '../../assets/youpizza.png';
import pizza from '../../assets/pizza.jpg';
import instagram from '../../assets/instagram.png';
import whatsapp from '../../assets/whatsapp.png';
import facebook from '../../assets/facebook.png';

import history from '../../services/history';

import { Container, ContentLeft, ContentRight, Highlights, Menu } from './styles';

function Home() {

  function handleStart() {
    history.push('/signin');
  }

  return (
    <Container>
      <ContentLeft>
        <div id="title">
          <img src={youpizza} alt="logo" />
          <div id="subtitle">
            <p>COMPARTILHE</p>
            <p>ESSA</p>
            <p>PAIXÃO</p>
          </div>
        </div>
        <div>
          <img src={instagram} alt="instagram" />
          <img src={whatsapp} alt="whatsapp" />
          <img src={facebook} alt="facebook" />
        </div>
      </ContentLeft>
      <ContentRight>
        <Highlights>
          <h2>DESTAQUES</h2>
          <div>
            <img src={pizza} alt="pizza-fake" width="227px" height="221px" />
            <img src={pizza} alt="pizza-fake" width="227px" height="221px" />
            <img src={pizza} alt="pizza-fake" width="227px" height="221px" />
          </div>
        </Highlights>
        <Menu>
          <h2>CARDÁPIO E ESPECIAIS DO DIA</h2>
          <p>Solicite uma pizza no especial do dia correspondente e ganhe pontos para trocar por mais pizzas</p>
          <div className="card">
            <div className="left-card">
              <div className="card-content">
                <h3>MUSSARELA - SEGUNDA</h3>
                <p>queijo parmesão e tomate</p>
              </div>
              <div className="card-content">
                <h3>CALABRESA - TERÇA</h3>
                <p>calabresa importada</p>
              </div>
              <div className="card-content">
                <h3>LOMBO - QUARTA</h3>
                <p>lombo suíno com lascas de queijo	</p>
              </div>
              <div className="card-content">
                <h3>FILÉ MIGNON - QUINTA</h3>
                <p>filé mingon com queijo brie</p>
              </div>
            </div>
            <div className="right-card">
              <div className="card-content">
                <h3>FRANGO CATUPIRI - SEXTA</h3>
                <p>frango com catupiri importado</p>
              </div>
              <div className="card-content">
                <h3>PORTUGUESA - SÁBADO</h3>
                <p>tomate, presunto, mussarela e cebola	</p>
              </div>
              <div className="card-content">
                <h3>CORN BACON - DOMINGO</h3>
                <p>milho, bacon, mussarela e parmesão</p>
              </div>
              <button onClick={handleStart}>SOLICITE AGORA SUA PIZZA</button>
            </div>
          </div>
        </Menu>
      </ContentRight>
    </Container>
  );
}

export default Home;