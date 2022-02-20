import styled from 'styled-components';

export const Container = styled.div`
  padding: 32px 0;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[900]};

  .material-icons {
    margin: 0 6px;
    font-size: 13px;
    color: #FF0000;
  }

  span:not(.material-icons) {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;
