import styled from 'styled-components';

export const Container = styled.div`
  background-color: #FFF;
  border-radius: 4px;
  border: 1px solid rgba(0,0,0,0.1);

  img {
    width: 100%;
    height: 100%;
    padding: 12px 12px;
    max-height: 120px;
    object-fit: cover;
  }

  .data {
    display: flex;
    flex-direction: column;
    padding: 8px 12px;

    a {
      font-weight: 500;
      font-size: 18px;
      color: ${({ theme }) => theme.colors.primary.main};

      &:hover {
        text-decoration: underline;
      }
    }

    small {
      margin-top: 4px;
      text-overflow: ellipsis;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray[200]};
      white-space: nowrap;
      overflow: hidden;
    }
  }

  .details {
    display: flex;
    justify-content: space-between;
    padding: 4px 12px 8px;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.gray[200]};
  }

  .price {
    padding: 8px 12px;
    background-color: ${({ theme }) => theme.colors.primary.main};
    border-radius: 0 0 4px 4px;
    font-weight: 500;
    color: #FFF;
  }
`;
