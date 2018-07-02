import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchResults extends Component {
    renderSearchData(data){        
        return (
            <div>
                <div> I got the data. Unfortunately, I don't have time to make it look pretty! :) </div>
                <div> {data} </div>
            </div>
        );
    }
    render() {
        return (
            <table className='table table-hover'>
                <thead>
                </thead>
                <tbody>
                    {this.props.searchProperty.map(this.renderSearchData)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ searchProperty}){
    return { searchProperty };
}

export default connect(mapStateToProps)(SearchResults);
