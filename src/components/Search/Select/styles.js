import styled from 'styled-components';

export const Container = styled.div`
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  display: flex;
  align-items: center;
  padding: 8px;
  border: 1px solid rgba(0,0,0,0.15);
  border-radius: 4px;

  > .icon {
    margin: -5px 0;
    color: ${({ theme }) => theme.colors.primary.main};
  }

  > .label {
    margin-left: 8px;
    color: ${({ theme }) => theme.colors.gray[500]};
    white-space: nowrap;
  }

  > select {
    width: 100%;
    margin-left: 4px;
    font-size: 14px;
    font-weight: 500;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;
