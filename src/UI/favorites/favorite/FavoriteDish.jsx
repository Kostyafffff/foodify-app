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

    return (
        <FavoriteDishWrapper>
            <StyledTitle>{ title }</StyledTitle>
            <ImageWrapper>
                {
                    !image
                        ? <StyledPlaceholder />
                        : <StyledImage src={image} />
                }
            </ImageWrapper>

            <StyledDescription>
                { description }
            </StyledDescription>
        </FavoriteDishWrapper>
    )
}

export default React.memo(FavoriteDish);
