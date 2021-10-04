import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import noteReducers from '../Reducers/notesReducers'
import userReducers from '../Reducers/userReducers'

const configureStore = () => {
    const store=createStore(combineReducers({
        users:userReducers,
        notes:noteReducers
    }),applyMiddleware(thunk))
     return store   
}

export default configureStore
