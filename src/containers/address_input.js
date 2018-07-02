import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchProperty } from '../actions/index';

class AddressInputs extends Component {
    constructor(props){
        super(props);
        this.state = { 
            address: '',
            city: '',
            state: '',
            zip: ''
        };

        this.onInputChangeAddress = this.onInputChangeAddress.bind(this);
        this.onInputChangeCity = this.onInputChangeCity.bind(this);
        this.onInputChangeState = this.onInputChangeState.bind(this);
        this.onInputChangeZip = this.onInputChangeZip.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChangeAddress(event) { // event object is a vanilla js thing, not react
        this.setState({ 
            address: event.target.value 

        });
    }

    onInputChangeCity(event) { // event object is a vanilla js thing, not react
        this.setState({
            city: event.target.value
        });
    }

    onInputChangeState(event) { // event object is a vanilla js thing, not react
        this.setState({
            state: event.target.value
        });
    }

    onInputChangeZip(event) { // event object is a vanilla js thing, not react
        this.setState({
            zip: event.target.value
        });
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.searchProperty(this.state);
        this.setState({
            address: '',
            city: '',
            state: '',
            zip: ''
        });
    }

  render() {
      return (
        <form onSubmit={this.onFormSubmit} className='input-group'>
            <input
                placeholder='Address'
                className='form-control'
                value = {this.state.address}
                onChange={this.onInputChangeAddress}
            />
            <input
                placeholder='City'
                className='form-control'
                value = {this.state.city}
                  onChange={this.onInputChangeCity}
            />
            <input
                placeholder='State'
                className='form-control'
                value = {this.state.state}
                  onChange={this.onInputChangeState}
            />

            <input
                placeholder='Zip'
                className='form-control'
                value={this.state.zip}
                  onChange={this.onInputChangeZip}
            />

            <span className='input-group-btn'>
                <button type='submit' className='btn btn-secondary'> Submit </button>

            </span>
        </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ searchProperty }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddressInputs);
// null in 1st arg means that we don't need any state here even though
// redux is maintaining the states
