import styled from 'styled-components';

import IconButton from "@material-ui/core/IconButton";
import { Button } from "@mui/material";

export const StyledFormWrapper = styled.form`
  width: 100%;
  max-width: 430px;
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
    max-width: 350px;
  }
`;

export const StyledIconButton = styled(IconButton)`
  && {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

export const CustomBlur = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.blurColor};
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
`;

export const StyledInput = styled.input`
  width: 100%;
  max-width: 350px;
  margin-bottom: 20px;
  padding: 15px;
  background: ${props => props.theme.colors.lightGrey};
  font-family: Montserrat-Bold, serif;
  font-size: 15px;
  color: ${props => props.theme.colors.darkGrey};
  border-radius: 4px;
  outline: none;
  border: none;
  :focus {
    background: ${props => props.theme.colors.powderWhite};
    color: ${props => props.theme.colors.darkGrey};
    border-color: ${props => props.theme.colors.persianGreen};
    outline: 0;
    box-shadow: 0 0 0 2px rgb(0 123 255 / 25%);
  }
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  max-width: 350px;
  height: 150px;
  resize: none;
  background: ${props => props.theme.colors.lightGrey};
  font-family: Montserrat-Bold, serif;
  font-size: 15px;
  color: ${props => props.theme.colors.darkGrey};
  padding: 15px;
  border-radius: 4px;
  outline: none;
  border: none;
  :focus {
    background: ${props => props.theme.colors.powderWhite};
    color: ${props => props.theme.colors.darkGrey};
    border-color: ${props => props.theme.colors.persianGreen};
    outline: 0;
    box-shadow: 0 0 0 2px rgb(0 123 255 / 25%);
  }
`;

export const TextareaWrapper = styled.div`
  width: 100%;
  max-width: 350px;
  justify-self: center;
  display: flex;
  align-self: center;
  flex-direction: column;
  position: relative;
`;

export const StyledTitle = styled.span`
  display: block;
  font-family: Montserrat-ExtraBold, serif;
  font-size: 24px;
  color: #333;
  line-height: 1.2;
  text-align: center;
  margin-bottom: 20px;
`;

export const StyledWarningTitle = styled.div`
  width: 100%;
  max-width: 350px;
  font-size: 15px;
  color: ${props => props.theme.colors.red};
  position: absolute;
  bottom: 0;
`

export const StyledWarningRecipeText = styled.div`
  width: 100%;
  max-width: 350px;
  font-size: 15px;
  color: ${props => props.theme.colors.red};
  position: absolute;
  bottom: -20px;
`

export const StyledAddToFavorites = styled(Button)`
  && {
      min-width: 100px;
      background-color: ${props => props.theme.colors.orange};
      color: ${props => props.theme.colors.powderWhite};
      border-radius: 4px;
      align-self: end;
      margin-top: 20px;
      height: 30px;
      font-size: 11px;
    
      &:disabled {
        background-color: ${props => props.theme.colors.darkGrey};
        color: ${props => props.theme.colors.powderWhite};
      }
      
      &:hover {
        background-color: ${props => props.theme.colors.hoverOrange};
      }
  }
`;
