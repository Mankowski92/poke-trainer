import styled from 'styled-components';

export const LoadingContainer = styled.div`
  width: 40%;
  .loading-container {
    color: ${({ theme }) => theme.colors.blue};
    padding: 15px;
    font-size: ${({ theme }) => theme.fontSize.xxl};
    margin: 0 auto;
  }
`;
