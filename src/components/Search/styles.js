import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;

  .sellBtn {
    padding: 12px 40px;
    border: 2px solid ${({ theme }) => theme.colors.tertiary.main};
    border-radius: 4px;
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.tertiary.main};
    transition: all 0.15s;
    float: right;

    &:hover {
      background-color: ${({ theme }) => theme.colors.tertiary.main};
      color: #FFF;
    }
  }

  .categories {
    display: flex;

    button {
      margin-right: 24px;
      padding: 12px 0;
      display: flex;
      align-items: center;
      background-color: transparent;
      border-bottom: 3px solid transparent;
      color: ${({ theme }) => theme.colors.gray[500]};
      transition: all 0.15s;

      &.actived {
        padding-inline: 16px;
        border-bottom-color: ${({ theme }) => theme.colors.primary.main};
        color: ${({ theme }) => theme.colors.primary.main};
      }

      > span {
        font-size: 30px;
      }

      > div {
        margin-left: 16px;
        display: flex;
        flex-direction: column;
        text-transform: uppercase;
        text-align: left;

        small {
          font-size: 14px;
          color: ${({ theme }) => theme.colors.gray[500]};
        }

        span {
          font-size: 22px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    > [class^="col"]:first-of-type {
      display: flex;
      justify-content: center;
    }
  }
`;

export const Content = styled.div`
  padding: 32px;
  background-color: #FFF;
  border-radius: 0 4px 4px 4px;

  .searchBtn {
    width: 100%;
    display: none;
  }

  @media (max-width: 992px) {
    padding: 16px;
  }

  @media (max-width: 768px) {
    .searchForm {
      height: 0;
      overflow: hidden;

      &.actived {
        height: auto;
      }
    }

    .searchBtn {
      margin-bottom: 8px;
      display: block;
    }
  }
`;
