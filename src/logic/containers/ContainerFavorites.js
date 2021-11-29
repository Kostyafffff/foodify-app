import { connect } from "react-redux";

import FavoritesList from "../../UI/favorites/FavoritesList";
import { favoritesSelector } from "../selectors/selectors";

const mapStateToProps = (state) => ({
   favorites: favoritesSelector(state)
});


export const ContainerFavorites = connect(mapStateToProps, null)(FavoritesList);
