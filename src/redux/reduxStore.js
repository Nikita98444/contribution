import { applyMiddleware, combineReducers, legacy_createStore} from "redux"
import thunkMiddleware from 'redux-thunk'
import graphReducer from './graphReducer'

let reducers = combineReducers({

    graph: graphReducer,

})

let store =  legacy_createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store // можно будет в консольном окне посмотреть стор

export default store 