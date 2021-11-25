import { connect } from "react-redux";

import FavoritesList from "../../UI/favorites/FavoritesList";

const mapStateToProps = (state) => ({
   favorites: state.favorites
});


export const ContainerFavorites = connect(mapStateToProps, null)(FavoritesList);
