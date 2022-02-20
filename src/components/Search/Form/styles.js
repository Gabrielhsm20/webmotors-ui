import styled from 'styled-components';

export const Container = styled.form`
  label {
    display: flex;
    align-items: center;
    margin: 0 24px 16px 0;

    input {
      width: 25px;
      height: 25px;
      display: grid;
      margin-right: 8px;
      background-color: #fff;
      border: 1px solid rgba(0,0,0,0.15);
      border-radius: 4px;
      place-content: center;
      -webkit-appearance: none;
      appearance: none;

      &::before {
        width: 10px;
        height: 10px;
        transform: scale(0);
        background-color: ${({ theme }) => theme.colors.primary.main};
        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
        transition: 0.12s transform ease-in-out;
        content: "";
      }

      &:checked::before {
        transform: scale(1);
      }
    }
  }

  .select {
    margin-bottom: 16px;
  }

  .advancedSearch span {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary.main};
    transition: color 0.15s;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.primary.dark};
    }
  }

  .viewDeals {
    span {
      margin-right: 24px;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray[200]};
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media (min-width: 480px) {
    .inputGroup {
      display: flex;

      &.unify {
        > .select {
          &:first-of-type{
            border-right-style: none;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          }

          &:last-of-type{
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .viewDeals {
      justify-content: space-between;
      flex-direction: row-reverse;
      margin-top: 16px;
    }
  }
`;
