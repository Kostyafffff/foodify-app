export const SHOW_RANDOM_DISH = 'SHOW_RANDOM_DISH';
export const SKIP_RANDOM_DISH = 'HIDE_RANDOM_DISH';
export const REQUEST_RANDOM_DISH = 'REQUEST_RANDOM_RECIPE';
export const RECEIVE_RANDOM_DISH = 'RECEIVE_RANDOM_DISH';

export const showRandomDish = () => ({
    type: SHOW_RANDOM_DISH
})

export const skipRandomDish = () => ({
    type: SKIP_RANDOM_DISH
})

export const requestRandomDish = () => {
    return({
        type: REQUEST_RANDOM_DISH
    });
};

export const receiveRandomDish = (data) => {
    return ({
        type: RECEIVE_RANDOM_DISH,
        payload: data
    })
}
