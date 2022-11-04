import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './bresecose.css';

class Bresecose extends Component {
  constructor(props){
    super(props);
    this.state ={
       type:"",
       description: "",
       cost:"" ,
    }
  };
  render(){
    return(
      <div className='food'>
        <div className='pastries'>
          <NavLink to="/Pastries" activeClassName="is-active">
                Pastries
            </NavLink>
            <h5>Tart</h5>
            <h5>Croissants</h5>
            <h5>Pies</h5>
            <h5>Scones</h5>
        </div>
        <div className='drinks'>
        <NavLink to="/Drinks" activeClassName="is-active">
              Drinks  
            </NavLink> 
              <h5>Wine</h5>
              <h5>Cocktail</h5>
              <h5>Whiskey</h5>
              <h5>Soft-drinks</h5>
        </div>
        <div className='meat'>
        <NavLink to="/Meat" activeClassName="is-active">
                Meat
            </NavLink> 
            <h5>Chicken</h5>
            <h5>Fried-beef</h5>
            <h5>Fried-fish</h5>
            <h5>Pork</h5>
        </div>
       
<div className='order'>
  <button>
    <NavLink to="Order" activeClassName="is-active">
                Make your orders
            </NavLink>
            </button>
            
            </div>
      </div>
      
      
    )
  };
};
  export default Bresecose;
  