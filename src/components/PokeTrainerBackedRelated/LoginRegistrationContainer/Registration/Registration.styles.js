import styled from 'styled-components';

export const RegistrationContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  padding: 30px;
  .registration-form {
    display: flex;
    flex-direction: column;
  }
  .form-title {
  font-size 2rem;
  }
`;
