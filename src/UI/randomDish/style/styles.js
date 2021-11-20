import styled from 'styled-components';
import { ReactComponent as Placeholder } from "../../../images/placeholder.svg";
import { Button } from "@material-ui/core";

export const StyledMainContent = styled.div`
  width: 100%;
  max-width: 430px;
  border: 1px solid ${props => props.theme.colors.darkGrey};
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.powderWhite};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px 40px;
  
  @media (max-width: 500px) {
    margin-top: 10px;
    max-width: 320px;
    padding: 10px 20px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const StyledDescription = styled.div`
  max-height: 200px;
  overflow-y: auto;
  
  ::-webkit-scrollbar {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #F5F5F5;
    border-radius: 10px;
    width: 5px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #AAA;
    border-radius: 10px;
    background-image: -webkit-linear-gradient(90deg,
    rgba(0, 0, 0, .2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(0, 0, 0, .2) 50%,
    rgba(0, 0, 0, .2) 75%,
    transparent 75%,
    transparent)
  }
`;

export const StyledImage = styled.img`
  width: 200px;
  align-self: center;
`;

export const StyledPlaceholder = styled(Placeholder)`
  margin-top: 20px;
  width: 200px;
`

export const ImageWrapper = styled.div`
  width: 100%;
  display: flex; 
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const DishTitle = styled.h1`
  text-align: center;
`;

export const StyledAddToFavorites = styled(Button)`
 && {
     min-width: 100px;
     background-color: ${props => props.theme.colors.orange};
     color: ${props => props.theme.colors.powderWhite};
     font-size: 10px;
     border-radius: 4px;

     &:hover {
       background-color: ${props => props.theme.colors.hoverOrange};
     }
 },
`;

export const StyledSkipButton = styled(Button)`
  && {
       min-width: 115px;
       background-color: transparent;
       font-size: 10px;
       border-radius: 4px;
       color: ${props => props.theme.colors.darkGrey};
       border: 1px solid ${props => props.theme.colors.darkGrey};
  
       &:hover {
         background-color: ${props => props.theme.colors.hoverOrange};
       }
  },
`;
