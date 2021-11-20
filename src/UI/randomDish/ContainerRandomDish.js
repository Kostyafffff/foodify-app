import { connect } from "react-redux";
import RandomDish from "./RandomDish";
import { requestRandomDish } from "../../logic/actions/randomDishActions";
import { addToFavorites } from "../../logic/actions/favoritesActions";

const mapStateToProps = (state) => ({
    randomDishValue: state.randomDish,
});

const mapDispatchToProps = (dispatch) => ({
    skip: () => dispatch(requestRandomDish()),
    addToFavorites: (data) => dispatch(addToFavorites(data))
})

export const ContainerRandomDish = connect(mapStateToProps, mapDispatchToProps)(RandomDish);
