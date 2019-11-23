import { combineReducers } from 'redux'
import { reducer as openStatus } from '../components/reducer.js'

export default combineReducers({
    open: openStatus
})