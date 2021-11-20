import { connect } from "react-redux";

import RecipeForm from "./RecipeForm";

import { closeCustomDishModal } from "../../logic/actions/modalActions";
import { addToFavorites } from "../../logic/actions/favoritesActions";

const mapStateToProps = (state) => ({
    isModalOpen: state.customDishModal.isModalOpen
});

const mapDispatchToProps = (dispatch) => ({
    close: () => dispatch(closeCustomDishModal()),
    addToFavorites: (data) => dispatch(addToFavorites(data)),
});

export const ContainerForm = connect(mapStateToProps, mapDispatchToProps)(RecipeForm);
