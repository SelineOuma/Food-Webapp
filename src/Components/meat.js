import React from 'react';
import { NavLink } from 'react-router-dom';
import './meat.css';
import image1 from '../Components/images/chicken.jpg';
import image2 from '../Components/images/fried beef.jpg';
import image3 from '../Components/images/fried fish.jpg';
import image4 from '../Components/images/pork.jpg';


const Meat=()=> {
  return (
    <div className='meaty'>
        <h4>MEAT</h4>
        <div className='pics'>
            < img src={image1}/>
<h5>Chicken<br></br>kshs.1250 per pack</h5>
< img src={image2}/>
<h5>Fried-beef<br></br>Kshs.800 per pack </h5>
<img src ={image3}/>
<h5>Fried-chicken<br></br>Kshs.1000 per pack</h5>
<img src ={image4}/>
<h5>Pork<br></br>Kshs.850 per pack</h5>

        </div>
        <button>
    <NavLink to="Order" activeClassName="is-active">
                Make your orders
            </NavLink>
            </button>
    </div>
  )
}

export default Meat;