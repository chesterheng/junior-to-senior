export const CHANGE_SEARCH_FIELD = 'CHANGE_SEARCH_FIELD'
export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

export const setSearchField = (text) => {
    return{
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
}

export const requestRobots = () => (dispatch) => {
    dispatch({ type: FETCH_PRODUCTS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: FETCH_PRODUCTS_ERROR, payload: error }))
}
