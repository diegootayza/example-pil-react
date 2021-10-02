import { createStore, combineReducers } from 'redux'

import products from './reducers/products'

const reducer = combineReducers({
    products,
})

const store = createStore(reducer)

export default store
