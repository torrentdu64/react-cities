import React , { Component} from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import City from '../components/city';

class CityList extends Component{

   renderlist() {
        return this.props.cities.map( (city) => {
              return <City city={city} key={city.address}/>
          }
        )
      }


  render(){

    return(

        <ul className="list-group cities">
          { this.renderlist() }
        </ul>

      );
  }
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

export default connect(mapStateToProps)(CityList);
