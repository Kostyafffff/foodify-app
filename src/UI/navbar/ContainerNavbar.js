import { connect } from "react-redux";

import Navbar from "./Navbar";

import { closeCustomDishModal, openCustomDishModal } from "../../logic/actions/modalActions";
import { requestRandomDish, showRandomDish } from "../../logic/actions/randomDishActions";

const mapStateToProps = (state) => ({
    favoritesLength: state.favorites.length,
});

const mapDispatchToProps = (dispatch) => ({
    openModal: () => dispatch(openCustomDishModal()),
    closeModal: () => dispatch(closeCustomDishModal()),
    requestRandomDish: () => { dispatch(requestRandomDish()); dispatch(showRandomDish()) }
});

export const ContainerNavbar = connect(mapStateToProps, mapDispatchToProps)(Navbar);
