import { connect } from "react-redux";

import FavoritesList from "./FavoritesList";

const mapStateToProps = (state) => ({
   favorites: state.favorites
});


export const ContainerFavorites = connect(mapStateToProps, null)(FavoritesList);
