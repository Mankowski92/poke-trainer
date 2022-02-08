import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SignInContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  padding: 30px;
  min-width: 300px;
  .sign-in-form {
    display: flex;
    flex-direction: column;
    .sign-in-title {
      font-size: 2rem;
      line-height: 2rem;
      margin-bottom: 1.5rem;
    }
    label {
      margin-top: 3px;
    }
    .sign-in-submit {
      background-color: ${({ theme }) => theme.colors.blue};
      margin-top: 8px;
      color: ${({ theme }) => theme.colors.yellow};
      font-family: 'Cairo', sans-serif;
      font-size: ${({ theme }) => theme.fontSize.l};
      line-height: 26px;
    }
  }
  .create-account {
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
    .create-account-infobox {
      display: flex;
      flex-direction: column;
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
`;

export const StyledLoginLink = styled(NavLink)`
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.orange};
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.blue};
  padding: 5px;
  height: 100%;
  margin: auto 0;
  line-height: 20px;
  border-radius: 5px;
  border: 3px solid #e64a0f;
`;
