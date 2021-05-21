import styled from 'styled-components';

export const StyledGetPokemonWrapper = styled.div`
  width: 75%;
  height: 80vh;
  background-color: ${({ theme }) => theme.colors.yellow};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StyledGetPokemonButton = styled.button`
  width: 20%;
  color: ${({ theme }) => theme.colors.red};
  margin: 1.5rem;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.blue};
  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: ${({ theme }) => theme.colors.lblue};
  font-weight: 700;
`;

export const StyledPokemonContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.red};
  width: 90%;
  height: 100%;
  margin-bottom: 2.5rem;
`;
