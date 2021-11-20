import styled from 'styled-components';

export const FavoriteDishWrapper = styled.div`
  width: 100%;
  max-width: 430px;
  border: 1px solid ${props => props.theme.colors.darkGrey};
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.powderWhite};
  padding: 20px 40px;
  
  @media (max-width: 500px) {
    max-width: 350px;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  display: flex; 
  justify-content: center;
  margin-bottom: 10px;
`;

export const StyledImage = styled.img`
  width: 200px;
  align-self: center;
`;

export const StyledTitle = styled.h1`
  text-align: center;
`;
