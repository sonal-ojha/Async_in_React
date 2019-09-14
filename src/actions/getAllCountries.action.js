// Action: that tells What needs to be changed in Store
// TYPE: Mandatory key - used to locate which reducer case to enter in.
function requestFetchAllCountries() {
    return {
        type: 'REQUEST_ALL_COUNTRIES',
    }
}

function responseFetchAllCountries(allCountries) {
    return {
        type: 'RESPONSE_ALL_COUNTRIES',
        payload: allCountries,
    }
}

function errorFetchAllCountries(error) {
    return {
        type: 'ERROR_ALL_COUNTRIES',
        payload: error,
    }
}

// Action Creator: This is used to trigger action
export const getAllCountries = () => {
    return (dispatch => {
        dispatch(requestFetchAllCountries());
        return fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then( res => dispatch(responseFetchAllCountries(res)))
            .catch(error => dispatch(errorFetchAllCountries(error)))
    })
};