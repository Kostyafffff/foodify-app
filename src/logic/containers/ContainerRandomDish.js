import { connect } from "react-redux";
import RandomDish from "../../UI/randomDish/RandomDish";
import { requestRandomDish } from "../actions/randomDishActions";
import { addToFavorites } from "../actions/favoritesActions";

const mapStateToProps = (state) => ({
    randomDishValue: state.randomDish,
});

const mapDispatchToProps = (dispatch) => ({
    skip: () => dispatch(requestRandomDish()),
    addToFavorites: (data) => dispatch(addToFavorites(data))
})

export const ContainerRandomDish = connect(mapStateToProps, mapDispatchToProps)(RandomDish);
