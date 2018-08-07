import React , { Component} from 'react';
import City from '../components/city';


class CityList extends Component{

   list() => {
        return this.props.cities.map( (city) => {
              return <City city={city} key={city.address}/>
          }
        )
      }


  render(){

    return(
      <div className="">
        { list() }
      </div>
      );
  }
}

export default CityList;
