import styled from 'styled-components';
import { Button } from "@mui/material";

export const MUIStyledNavButton = styled(Button)`
  && {
      min-width: 100px;
      background-color: ${props => props.theme.colors.orange};
      font-size: 10px;
      border-radius: 4px;
      color: ${props => props.theme.colors.powderWhite};
  
      &:hover {
        background-color: ${props => props.theme.colors.hoverOrange};
      }
  }
`;

export const StyledNavbarWrapper = styled.div`
  height: 50px;
  display: flex;
  background-color: ${props => props.theme.colors.darkDarkBlue};
  padding: 10px;
`;

export const StyledButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  column-gap: 20px;
`;
