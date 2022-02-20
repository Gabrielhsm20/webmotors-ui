import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray[900]};
  }

  button,
  input,
  select {
    border: none;
    outline: none;
  }

  select {
    background-color: transparent;
  }

  a,
  label,
  button,
  select,
  input[type="checkbox"] {
    cursor: pointer;
  }
`;
