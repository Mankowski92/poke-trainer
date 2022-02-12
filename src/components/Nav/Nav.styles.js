import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavList = styled.ul`
  width: 100%;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 1.5rem;
`;

export const StyledLink = styled(NavLink).attrs({ activeClassName: 'active-link' })`
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.blue};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  margin-left: 1.5rem;
  color: ${({ theme }) => theme.colors.yellow};
  padding: 0 25px;

  &.active-link {
    text-decoration: underline;
  }
`;
