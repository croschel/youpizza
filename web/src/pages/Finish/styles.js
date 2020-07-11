import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 0 auto;

  h2{
    color: #E52222;
    font-size: 36px;
    margin-top: 50px;
  }

  button{
    background: transparent;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 150px;
    left: 100px;

    img{
    width: 120px;
    height: 120px;
    }
    p {
      color: #2E7228;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
    }
  }

  
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  align-items: center; 
  justify-content: space-between;   
    
    #order {
      background: #E38383;
      font-size: 24px;
      padding: 30px;
      line-height: 60px;
      text-align: center;
      border-radius: 36px;
      height: 60%;
      width: 415px;
      margin-bottom: 20px;
      color: #fff;
      font-size: 28px;
    }
    #respects {
      text-transform: uppercase;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 50%;
      height: 100%;
      font-size: 24px;
      text-align: center;
      color: #E52222;

      & > p:first-of-type {
        margin-bottom: 100px;
      }

      & > p:last-of-type {
        font-weight: bold;
      }
    }
`;
