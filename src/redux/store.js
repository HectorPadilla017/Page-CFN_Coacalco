import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import ActivitiesReducer from './Activities'
import YoutubeReducer from './YoutubeApi'
import TeachingReducer from './YouTeachingApi'
import SermonsReducer from './YouSermonsApi'

const rootReducer = combineReducers({
    Activities: ActivitiesReducer,
    YoutubeApi: YoutubeReducer, 
    TeachingApi: TeachingReducer, 
    SermonsApi: SermonsReducer, 
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ))
    return store;
}