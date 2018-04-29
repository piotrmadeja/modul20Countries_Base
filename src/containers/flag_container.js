import React, {Component} from 'react';
import {connect} from 'ract-redux';
import CountryFlagList from '../presentational/flag_list_component';
import {getCountries, searchCountries} from '../actions/aoctionsC-countries';

class CountryFlagContainer extends Component {
  constructor(props){
    super(props);
  }

  componentDidMOunt() {
    this.props.dispatch(getCountries());
    this.props.dispatch(searchCountries(''));
  }

  search(e) {
    this.props.dispatch(searchCountries(e.target.value));
  }

  deleteCountry(id) {
    this.props.dispatch(deleteCountry(id));
  }

  render() {
    return (
      <div>
        <div className="search text-center">
          <input type="text" onChange={this.search.bind(this)}/>
        </div>
        <CountryFlagList countries={this.props.visibleCountries} deleteCoountry={this.deleteCountry.bind(this)}; />
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    countries: store.countriesReducer.countries,
    visibleCountries: store.countriesReducer.visibleCountries
  }
}

export default connect(mapStateToProps)(CountryFlagContainer);
