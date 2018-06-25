import * as request from 'superagent'

const baseUrl = 'http://localhost:4000'

export const GET_PRODUCTS = 'GET_PRODUCTS'

const fetchProducts = products => ({
    type: GET_PRODUCTS,
    payload: products
})

export const getProducts = () => (dispatch, getState) => {
    //const state = getState()
    request
        .get(`${baseUrl}/products`)
        .then(result => dispatch(fetchProducts(result.body)))
        .catch(err => console.error(err))
}