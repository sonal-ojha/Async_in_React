import { createStore, combineReducers, applyMiddleware } from 'redux';
import { fetchAllCountriesList } from './reducers/getAllCountriesList.reducer';
import thunk from 'redux-thunk';
// To log actions & reducer in Console
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducers = combineReducers({
    CountriesList: fetchAllCountriesList,
})

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;