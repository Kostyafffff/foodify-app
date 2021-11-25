import { connect } from "react-redux";

import RecipeForm from "../../UI/form/RecipeForm";

import { closeCustomDishModal } from "../actions/modalActions";
import { addToFavorites } from "../actions/favoritesActions";

const mapStateToProps = (state) => ({
    isModalOpen: state.customDishModal.isModalOpen
});

const mapDispatchToProps = (dispatch) => ({
    close: () => dispatch(closeCustomDishModal()),
    addToFavorites: (data) => dispatch(addToFavorites(data)),
});

export const ContainerForm = connect(mapStateToProps, mapDispatchToProps)(RecipeForm);
