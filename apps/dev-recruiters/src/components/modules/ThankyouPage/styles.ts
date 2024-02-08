import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0;
  row-gap: 1rem;
  margin-top: 200px;
  padding-bottom: 5px;
  color: black;
  font-size: 44px;
  font-family: Abel;
  font-weight: 400;
  word-wrap: break-word;
  padding-bottom: 56px;
`;

export const SubHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0;
  /* row-gap: 0.5rem; */
  height: auto;
  color: black;
  font-size: 20px;
  font-family: Nunito Sans;
  font-weight: 400;
  line-height: 28px;
  word-wrap: break-word;
  padding-bottom: 0;
`;

export const BaseText = styled.div`
  word-wrap: break-word;
  color: ${({ theme }) => theme?.colors?.NEUTRAL_1};
`;

export const HeaderText = styled(BaseText)`
  font-size: 44px;
  font-family: 'Abel', sans-serif;
  font-weight: 400;
  color: white;
  overflow: hidden;
  position: relative;
`;

export const SubHeaderText = styled(BaseText)`
  font-size: 20px;
  font-family: 'Nunito Sans', sans-serif;
  color: white;
  font-weight: 400;
  padding-bottom: 24px;
  overflow: hidden;
  position: relative;
`;
export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme?.colors?.SilverSandT20};
  height: 500px;
`;
