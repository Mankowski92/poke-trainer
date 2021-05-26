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
