import React from 'react';

import {
    FavoriteDishWrapper,
    ImageWrapper,
    StyledImage,
    StyledTitle
} from "./styles/styles";

import {
    StyledDescription,
    StyledPlaceholder
} from "../../randomDish/style/styles";

const FavoriteDish = (props) => {
    const { image, title, description } = props;

    const dishImage = () => {
        if (!image) {
            return (
                <StyledPlaceholder />
            );
        }

        return (
            <StyledImage src={image} />
        );
    }

    return (
        <FavoriteDishWrapper>
            <StyledTitle>{ title }</StyledTitle>
            <ImageWrapper>
                { dishImage() }
            </ImageWrapper>

            <StyledDescription>
                { description }
            </StyledDescription>
        </FavoriteDishWrapper>
    )
}

export default React.memo(FavoriteDish);
