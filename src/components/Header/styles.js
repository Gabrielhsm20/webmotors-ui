import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: left;
  margin: 32px 0;

  > img {
    width: 300px;
  }

  @media (max-width: 992px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    > img {
      width: 250px;
    }
  }
`;
