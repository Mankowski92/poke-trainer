import styled from 'styled-components';

export const LoginContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  padding: 30px;
  min-width: 300px;
  margin: auto 0;

  .sign-up-form {
    display: flex;
    flex-direction: column;

    .sign-up-title {
      font-size: 2rem;
      line-height: 2rem;
      margin-bottom: 1.5rem;
    }

    label {
      margin-top: 3px;
    }

    .sign-up-submit {
      background-color: ${({ theme }) => theme.colors.blue};
      margin-top: 8px;
      color: ${({ theme }) => theme.colors.yellow};
      font-family: 'Cairo', sans-serif;
      font-size: ${({ theme }) => theme.fontSize.l};
      line-height: 26px;
    }
  }
`;

export const SuccessfulUserCreateContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  padding: 30px;
  font-size: 2rem;
  margin: auto 0;

  .main-wraper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;
