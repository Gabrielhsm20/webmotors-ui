import styled from 'styled-components';

export const Button = styled.button`
  padding: 12px 40px;
  background-color: ${({ theme }) => theme.colors.primary.main};
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  transition: background-color 0.15s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }
`;
