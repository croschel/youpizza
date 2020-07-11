import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;

  h1{
    color: #E52222;
  }

  #select-promopizza{
    margin-top: 60px;

    label{
      font-weight: bold;
      padding: 10px;
    }
    select {
      width: 280px;
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
  }

`;
export const PromoBox = styled.div`
    flex-direction: column;
    margin: 40px;

    & > span {
      background: #E38383;
      font-size: 32px;
      padding: 30px;
      line-height: 60px;
      text-align: center;
      border-radius: 36px;
      margin-bottom: 40px;

      h3 {
        font-size: 36px;
        text-decoration: underline;
        margin: 10px;
      }
    }
    button {
      background: #01A108;
      border-radius: 40px;
      width: 220px;
      height: 60px;
      border: none;
      font-size: 22px;
      font-weight: bold;
      color: #fff;
      align-self: center;
    }
`;

export const NormalBox = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;

label{
  font-weight: bold;
  padding: 10px;
}
select {
  width: 280px;
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
`