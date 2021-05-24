import styled from 'styled-components';

export const StyledGetPokemonWrapper = styled.div`
  width: 75%;
  background-color: ${({ theme }) => theme.colors.yellow};
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 80vh;
  border-radius: 15px;
`;

export const StyledGetPokemonButton = styled.button`
  width: 20%;
  min-width: 200px;
  color: ${({ theme }) => theme.colors.red};
  margin: 1.5rem;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.blue};
  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: ${({ theme }) => theme.colors.lblue};
  font-weight: 700;
`;

export const StyledPokemonContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 25px;

  .poke-name {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    line-height: 1;
  }

  .poke-id {
    color: grey;
  }

  .poke-photo {
    // width: 70%;
    // height: 70%;
  }

  .loading {
    color: ${({ theme }) => theme.colors.blue};
    padding: 15px;
  }
`;
