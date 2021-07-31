import { combineReducers } from 'redux';
import { historyReducer } from './History/reducer';

export const rootReducer = combineReducers({
    history: historyReducer,
});
