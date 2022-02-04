import styled from 'styled-components';

export const StyledLoginRegistrationContainer = styled.div`
  height: calc(100vh - 80px);
  width: 100%;
  background-color: ${({ theme }) => theme.colors.yellow};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  flex-direction: column;
`;
