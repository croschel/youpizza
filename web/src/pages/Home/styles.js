import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
`;

export const ContentLeft = styled.div`
  height: 100vh;
  display: flex;
  border: 1px solid #fff;
  flex-direction: column;
  justify-content: space-between;
  width: 20%;

  & > #title {
    display: flex;
    flex-direction: column;

    img {
      width: 250px;
      height: 250px;
      align-self: center;
    }
    #subtitle {
      color: #d52222;
      text-shadow: 2px 2px 9px rgba(255,255,255,0.8);
      font-size: 48px;
      text-align: center;
      line-height: 100px;
      margin-top: 50px;
      font-weight: bold;
    }
  }
  
  & > div {
    display: flex;
    justify-content: space-around;
    padding: 10px;

    img{
      width: 80px;
      height: 80px;
      padding: 8px;
    }
  }
`;
export const ContentRight = styled.div`
  width: 80%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Highlights = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #fff;
  width: 100%;
  text-align: center;

  h2{
    color: #d52222;
    text-shadow: 2px 2px 9px rgba(255,255,255,0.8);
    font-size: 36px;
    text-align: center;
    font-weight: normal;
    padding: 20px;
  }
  img{
    padding: 20px;
    margin: 0 30px;
    border-radius: 50%;
  }
`;
export const Menu = styled.div`
  display: flex;
  flex-direction: column;

  h2{
    color: #d52222;
    text-shadow: 2px 2px 9px rgba(255,255,255,0.8);
    font-size: 36px;
    text-align: center;
    font-weight: normal;
    padding: 20px 0 5px 0;
  }
  > p{
    color: #8B3D3D;
    text-shadow: 2px 2px 30px rgba(255,255,255,0.8);
    font-size: 24px;
    text-align: center;
    font-weight: normal;
  }

  & > .card{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-self: center;
    margin-top: 60px;

    .left-card{
      
    }
    .right-card{
      
    }

    .card-content {
      font-size: 28px;
      padding: 20px 0;
      h3{
        color: #000;
      }
      & > p {
        color: #A7A7A7;
      }
    }
    button {
      margin-top: 10px;
      background: #01A108;
      color: #FFF;
      font-weight: bold;
      font-size: 28px;
      width: auto;
      padding: 8px;
      height: 80px;
      border:none;
      border-radius: 12px;
      -webkit-box-shadow: 0px 0px 25px 3px rgba(0,0,0,0.76); 
      box-shadow: 0px 0px 25px 3px rgba(0,0,0,0.76); 
    }
  }
`;