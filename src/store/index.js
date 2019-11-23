import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
// import { Map } from 'immutable'

// const initState = Map({})
const store = createStore(
    reducer,
    // initState,
    applyMiddleware(thunk)
)
export default store