import styled from 'styled-components';
import BannerHamburger from '../../assets/pexels-valeria-boltneva-1639562 1.svg';
import Background from '../../assets/bg.svg';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.secondWhite};

  background: linear-gradient(
          rgba(255, 255, 255, 0.6),
          rgba(255, 255, 255, 0.6)
      ),
      url('${Background}');

`;

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 480px;
  width: 100%;
  position: relative;

  background-image: url('${BannerHamburger}');
  background-repeat: no-repeat;
  background-color: ${(props) => props.theme.mainBlack};
  background-position: center;
  background-size: cover;

  h1 {
    font-family: 'Road Rage', sans-serif;
    font-size: 80px;
    line-height: 65px;
    color: ${(props) => props.theme.whit};

    position: absolute;
    right: 20%;
    top: 30%;

    span {
      display: block;
      color: ${(props) => props.theme.whit};
      font-size: 20px;
      line-height: normal;
    }
  }
`;

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 30px;

`;


export const CategoryButton = styled.button`
  font-family: inherit;
  text-decoration: none;
  cursor: pointer;
  background: none;
  color: ${(props) => (props.$isActiveCategory ? (props) => props.theme.purple : '#696969')};
  font-size: 24px;
  font-weight: 500;
  padding-bottom: 5px;
  line-height: 20px;
  border: none;
  border-bottom: ${(props) => props.$isActiveCategory && `3px solid ${props.theme.purple}`};

`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 40px;
  gap: 60px;
  justify-content: center;
  max-width: 1280px;
  margin: 50px auto 0;
`;
