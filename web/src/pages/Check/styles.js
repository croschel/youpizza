import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  h2{
    color: #E52222;
    font-size: 36px;
    margin-top: 50px;
  }

  img{
    width: 120px;
    height: 120px;
    position: absolute;
    top: 150px;
    left: 50px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  align-items: center;

      button {
        border-radius: 40px;
        width: 240px;
        height: 70px;
        border: none;
        font-size: 22px;
        font-weight: bold;
        color: #fff;
        align-self: center;
        margin-top: 15px;
      }

    #submit-btn{
      background: #01A108;
    }

    #cancel-btn{
      background: #D70101;

    }
    
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
    }
  
`;
