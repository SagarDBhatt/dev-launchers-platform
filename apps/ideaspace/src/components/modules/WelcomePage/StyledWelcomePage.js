import styled from 'styled-components';

export const ButtonArea = styled.div`
  width: 100%;
  min-height: 50vh;
  height: 1px;
  max-width: 1700px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10vh;
  @media (orientation: portrait) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    min-height: 60vh;
  }
`;

export const StyledLink = styled.a`
  height: 100%;
  color: 'white';
  @media (orientation: portrait) {
    width: 100%;
    height: 40%;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.NEUTRAL_2};
  border: 0 none;
  border-radius: 30px;
  cursor: pointer;
  padding: 2rem;
  margin: 10px 5px;
  font-size: 2rem;
  font-family: 'Abel';
  background-color: ${({ theme }) => theme.colors.NEUTRAL_1};
  opacity: 0.85;
  @media (orientation: portrait) {
    font-size: 1.5rem;
    flex-direction: column;
    opacity: 0.2;
  }
  & img {
    opacity: 0.25;
    object-fit: 'cover';
    height: 80%;
    width: 100%;
  }
`;

export const Description = styled.p`
  color: black;
  text-align: center;
  font-family: 'Nunito Sans';
`;

export const Header = styled.div`
  display: inline-block;
  & h1 {
    color: black;
    text-align: center;
    font-family: 'Abel';
    border-bottom: none;
  }
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 50%;
`;

export const ButtonWrapper = styled.div`
  width: 23%;
  display: inline-grid;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* background: #C4C4C4; */
  /* font-weight: bold; */
  color: ${({ theme }) => theme.colors.NEUTRAL_2};
  border: 0 none;
  border-radius: 30px;
  cursor: pointer;
  padding: 2rem;
  margin: 10px 5px;
  font-size: 2rem;
  font-family: 'Abel';
  background-color: ${({ theme }) => theme.colors.NEUTRAL_1};
  font-color: 'white';
  @media (orientation: portrait) {
    font-size: 1.5rem;
    flex-direction: column;
    opacity: 0.2;
  }
`;

export const WelcomeMessage = styled.div`
  font-family: 'Nunito Sans';
  margin-bottom: 20px;
`;

export const Subheader = styled.div`
  font-family: 'Nunito Sans';
  color: #474747;
  margin-bottom: 20px;
`;

export const GetStartedDiv = styled.div`
  font-family: 'Nunito Sans';
  margin-bottom: 10px;
`;

export const RocketImage = styled.img`
  width: 25px;
  height: 25px;
  padding-left: 5px;
`;


export const WelcomeNavigationButtonImage = styled.img`
  height: 70%;

  @media (orientation: portrait) {
    height: 30vw;
  }
`;

