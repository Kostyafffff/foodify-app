import React from 'react';

import Badge from '@mui/material/Badge';

import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { StylesProvider } from "@material-ui/core";

import {
    MUIStyledNavButton,
    StyledButtonWrapper,
    StyledNavbarWrapper
} from './style/styles';

const Navbar = (props) => {
    const { favoritesLength, requestRandomDish, openModal } = props;

    const { t } = useTranslation();
    const history = useHistory();

    const navigateToFavoritesPage = () => history.push('/favorites');

    return (
            <StyledNavbarWrapper>
                <StyledButtonWrapper>
                    <StylesProvider injectFirst>
                    <MUIStyledNavButton
                        onClick={requestRandomDish}
                    >
                        { t('randomDish') }
                    </MUIStyledNavButton>
                    </StylesProvider>
                    <Badge
                        badgeContent={favoritesLength}
                        color={'secondary'}
                    >
                        <MUIStyledNavButton
                            onClick={navigateToFavoritesPage}
                        >
                            { t('favorites') }
                        </MUIStyledNavButton>
                    </Badge>
                </StyledButtonWrapper>
                <MUIStyledNavButton
                    onClick={openModal}
                >
                    { t('addDish') }
                </MUIStyledNavButton>
            </StyledNavbarWrapper>
    )
};


export default React.memo(Navbar);
