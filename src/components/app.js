import React, { Component } from 'react';
import AddressInputs from '../containers/address_input';
import SearchResults from '../containers/search_results';

export default class App extends Component {
  render() {
    return (
        <div>
          <AddressInputs />
          <SearchResults />
        </div>
    );
  }
}
