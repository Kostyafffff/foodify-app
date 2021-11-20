import React from "react";

import { useHistory } from "react-router";
import { useTranslation } from "react-i18next";

import FavoriteDish from "./favorite/FavoriteDish";

import {FavoritesListWrapper, FavoritesWrapper} from "./styles/styles";
import { MUIStyledNavButton } from "../navbar/style/styles";

const FavoritesList = (props) => {
    const { favorites } = props;

    const { t } = useTranslation();
    const history = useHistory();

    return (
        <>
            <FavoritesWrapper>
                <MUIStyledNavButton
                   onClick={() => history.push('/')}
                >
                   { t('backBtnText') }
                </MUIStyledNavButton>
                <FavoritesListWrapper>
                    {
                        Array.from(favorites).map(it => (
                            <FavoriteDish
                                key={it.id}
                                image={it.image}
                                title={it.title}
                                description={it.description}
                            />
                        ))
                    }
                </FavoritesListWrapper>
            </FavoritesWrapper>
        </>
    );
}

export default React.memo(FavoritesList);
