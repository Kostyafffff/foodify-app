import React  from 'react';

import { useTranslation } from "react-i18next";

import {
    ButtonWrapper,
    DishTitle,
    ImageWrapper,
    StyledAddToFavorites,
    StyledDescription,
    StyledImage,
    StyledMainContent,
    StyledPlaceholder,
    StyledSkipButton
} from "./style/styles";

const RandomDish = (props) => {
    const { randomDishValue, addToFavorites, skip } = props;

    const { t } = useTranslation();

    if (!randomDishValue.isRandomDishShown) {
        return null;
    }

    if (!randomDishValue.dish) {
        return null;
    }

    return (
        <StyledMainContent>
            <DishTitle>
                { randomDishValue.dish.title }
            </DishTitle>
            <ImageWrapper>
                {
                    !randomDishValue.dish.image
                        ? <StyledPlaceholder />
                        : <StyledImage src={randomDishValue.dish.image} />
                }
            </ImageWrapper>
            <StyledDescription>
                { randomDishValue.dish.description }
            </StyledDescription>
            <ButtonWrapper>
                <StyledSkipButton
                    onClick={skip}
                >
                    { t('skip') }
                </StyledSkipButton>
                <StyledAddToFavorites
                    onClick={() => addToFavorites(props.randomDishValue.dish)}
                >
                    { t('addToFavorites') }
                </StyledAddToFavorites>
            </ButtonWrapper>
        </StyledMainContent>
    )
}

export default React.memo(RandomDish);
