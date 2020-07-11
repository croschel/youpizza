import styled from 'styled-components';
import user from '~/assets/avatar.svg';
import password from '~/assets/communications.svg';

export const Container = styled.div`
  h1{
  text-align: center;
  padding: 60px;
  font-size: 54px;
  color: #D52222;
  text-shadow: 4px 3px 19px #fff;
  }
  #return {
    position: absolute;
    top: 60px;
    left: 40px;
    a{
      img{
        width: 80px;
        height: 80px;
      }
    }
  }

#content{
  background: #DBB6B6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px auto 30px auto;
  width: 490px;
  height: 570px;
  border-radius: 27px;
  padding: 5px;

  span{
    color: #AF1616;
    margin-bottom: 10px;
  }
}

img{
  width: 240px;
  height: 240px;
  margin-bottom: 10px;
}


form {
  display: flex;
  flex-direction: column;
  width: 65%;
  padding: 10px 0;

  input:first-of-type{
    height: 50px;
    border-radius: 6px;
    margin-bottom: 15px;
    padding: 10px 35px;
    background-image: url(${user});
    fill: #bababa;
    background-size: 25px;
    background-position: left;
    background-position-x: 5px;
    background-repeat: no-repeat;
    border:none;
    color: #777777;
    font-size: 18px;

    ::placeholder {
      color: #bababa;
      font-size: 14px;
    }
  }

  input:last-of-type{
    height: 50px;
    border-radius: 6px;
    margin-bottom: 10px;
    padding: 10px 35px;
    background-image: url(${password});
    background-size: 25px;
    background-position: left;
    background-position-x: 5px;
    background-repeat: no-repeat;
    border:none;
    
    ::placeholder {
      color: #bababa;
      font-size: 14px;
    }
  }

  button{
    height: 60px;
    width: 240px;
    border-radius: 16px;
    margin-top: 20px;
    background: #DC2C2C;
    border: none; 
    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.8);
    color: #fff;
    font-weight: bold;
    font-size: 28px;
    align-self: center;
  }
  a{
    color: #fff;
    font-size: 16px;
    text-align: center;
    text-shadow: 4px 3px 19px #fff;
    margin-top: 20px;
  }
}
`;


