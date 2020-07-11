import styled from 'styled-components';

export const Container = styled.div`
  background: #E38383;
  height: 110px;
  display: flex;
  width: 100%;
  align-items: center;

  h1{
    text-align: center;
    width:50%;
    color: #fff;
    font-size: 42px;
  }
`;

export const LeftBox = styled.div`
  width: 25%;
  text-align: center;
  border-right: 1px solid #f1f1f1;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  img{
    width: 100px;
    height: 100px;
  }
`;
export const RightBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:center;
  align-items: center;
  line-height: 30px;
  width: 25%;
  border-left: 1px solid #f1f1f1;
  height: 80px;
  
  #user-box{
    p:first-of-type{
    font-weight: bold;
    font-size: 18px;
    }
    p:last-of-type{
      font-weight: bold;
    }

    a{
      color: #000;
    }
  }
  #sign-out{
    button{
      background: transparent;
      border: none;

      img{
      width: 70px;
      height: 60px;
      margin-left: 30px;
    }
    }
  }
`;
