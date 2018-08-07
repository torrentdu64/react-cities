import React , { Component} from 'react';
import City from './city';


class CityList extends Component{



  render(){
    let list = () => {
        return this.props.cities.map( (city) => {
              return <City city={city} key={city.address}/>
          }
        );
      }

    return(
      <div className="">
        { list() }
      </div>
      );
  }
}

export default CityList;
