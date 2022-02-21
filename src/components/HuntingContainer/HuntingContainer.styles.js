import styled from 'styled-components';

export const StyledHuntingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .main-screen {
    background-color: ${({ theme }) => theme.colors.blue};
    width: 70%;
    height: 90%;
  }

  .user-interface {
    width: 25%;
    background-color: ${({ theme }) => theme.colors.white};
    height: 90%;
  }
`;
