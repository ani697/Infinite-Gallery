import React , {Component} from 'react';
import './Header.css';

class Header extends Component{
  render(){
    return(
      <div className="Header">
          <h1>Gallery House</h1>
          <img src={require('./house.png')} alt="House" id="House"/>
      </div>
    );
  }
}

export default Header;
