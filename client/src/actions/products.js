import * as request from 'superagent'

const baseUrl = 'http://localhost:4000'

export const GET_PRODUCTS = 'GET_PRODUCTS'
export const ADD_PRODUCT = 'ADD_PRODUCT'

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

const newProduct = product => ({
    type: ADD_PRODUCT,
    payload: product
})

export const addProduct = (product) => (dispatch, getState) => {
    request
        .post(`${baseUrl}/products/`)
        .send(product)
        .then(result => dispatch(newProduct(product)))
        .catch(err => console.error(err))
}