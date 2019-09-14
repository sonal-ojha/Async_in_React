const fetchingCountries = (state, action) => {
    // using Spread Operators
    return {
        ...state,
        fetching: true,
    }
}

const addAllCountries = (state, action) => {
    const { payload } = action;
    // using Spread Operators
    return {
        ...state,
        AllCountries: payload,
        fetching: false,
    }
}

export function fetchAllCountriesList(state = { AllCountries: [], fetching: false }, action) {
    switch(action.type) {
        case 'REQUEST_ALL_COUNTRIES': return fetchingCountries(state, action);
        case 'RESPONSE_ALL_COUNTRIES': return addAllCountries(state, action);
        //  ** Using Object.assign
        // const { payload } = action;
        // return Object.assign({}, state, { AllCountries: payload });
        default:
            return state;
    }
}