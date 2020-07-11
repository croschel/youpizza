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
  margin-top: 80px;
  width: 40%;

  #content-group-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    #select-box {
      display:flex;
      flex-direction: column;

      select {
      width: 300px;
      height: 40px;
      border-radius: 16px;
      background: #f1f1f1;
      padding: 10px;
      font-size: 14px;
      border: none;

        option{
          font-size: 20px;
        }
      }

      button {
        background: #4FA5E3;
        border-radius: 40px;
        width: 220px;
        height: 60px;
        border: none;
        font-size: 22px;
        font-weight: bold;
        color: #fff;
        align-self: center;
        margin-top: 40px;
      }
    }
    #order {
      background: #E38383;
      font-size: 24px;
      padding: 30px;
      line-height: 60px;
      text-align: center;
      border-radius: 36px;
      margin-left: 100px;
      height: 550px;
      width: 415px;
    }
  }
`;
