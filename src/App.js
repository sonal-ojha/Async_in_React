import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getAllCountries } from './actions/getAllCountries.action';

// Container - component : Connected to STORE
class App extends React.Component {

  state = {
    allCountries: [],
  }

  componentDidMount() {
    // *** Async Load the Data from API call using fetch
    // Using Async SetTimeOut function to trigget Fetch API call after 3000 seconds.
    // And prints response in Console
    // setTimeout(function() {
    //   fetch('https://restcountries.eu/rest/v2/all')
    //   .then(res => res.json())
    //   .then(res => console.log('All Countries ==', res))
    //   .catch(err => console.log('Error in Fetching All Countries !!', err));
    // }, 3000);

    // *** USING LOCAL STATE ***
    // Triggers API and sets the Response to State field
    // fetch('https://restcountries.eu/rest/v2/all')
    // .then(res => res.json())
    // .then(res => this.setState({
    //   allCountries: res,
    // }))
    // .catch(err => console.log('Error in Fetching All Countries !!', err));

    // Dispatch Action to Fetch All Countries and Save in STORE
    const { _getAllCountries } = this.props;
    _getAllCountries();
  }

  render() {
    // const { allCountries } = this.state;
    const { allCountriesFromStore, isFetchingData } = this.props;
    return (
      <div>
        {/* Using Data from Local State Component */}
        {/* {allCountries && allCountries.length > 0 && allCountries.map((item, index) => (
          <div key={index}>
            {item.name}
          </div>
        ))} */}
        {isFetchingData && <div>Loading ...</div>}
        {allCountriesFromStore && allCountriesFromStore.length > 0 && allCountriesFromStore.map((item, index) => (
          <div key={index}>
            {item.name}
          </div>
        ))}
      </div>
    );
  }
}

// Get store to the Componemt
const mapStoreToProps = (store) => ({
  allCountriesFromStore: store.CountriesList.AllCountries,
  isFetchingData: store.CountriesList.fetching,
});

// To dispatch Specific Action written in action.js File
const mapDispatchToProps = (dispatch) => ({
  _getAllCountries: () => {
    dispatch(getAllCountries())
  },
});

// connect: Used to connect STORE to the component.
// Hence, Dispatch and store is availabe in component)
export default connect(mapStoreToProps, mapDispatchToProps)(App);
