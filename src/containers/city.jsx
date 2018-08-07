import React, { Component } from 'react';


class City extends Component {

  render(){

    const style = {
      backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('https://kitt.lewagon.com/placeholder/cities/shanghai')"
    };

    return (
      <div className="card" style={style}>
        <div className="card-category">{this.props.city.slug}</div>
        <div className="card-description">
          <h2>{this.props.city.name}</h2>
          <p>{this.props.city.address}</p>
        </div>

        <a className="card-link" href="#" ></a>
      </div>
      );
  }
}

export default City;
