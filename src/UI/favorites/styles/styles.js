import styled from 'styled-components';

export const FavoritesListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 20px;
  margin-top: 20px;

  @media (max-width: 500px) {
    max-width: 450px;
    display: flex;
    justify-content: center;
  }
`;
