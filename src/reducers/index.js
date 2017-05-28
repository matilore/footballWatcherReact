import { combineReducers } from 'redux'
import { routerReducer as routing} from 'react-router-redux'

import user from './user'
import teamSelector from './teamSelector'
import videos from './videos'


export const rootReducer = combineReducers({user, teamSelector, videos, routing})
