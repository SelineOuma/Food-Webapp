import React from 'react';
import { NavLink } from 'react-router-dom';
import './drinks.css';
import image1 from '../Components/images/wine.jpg';
import image2 from '../Components/images/cocktail.jpg';
import image3 from '../Components/images/whiskey.jpg';
import image4 from '../Components/images/soft drinks.jpg';


const Drinks=()=> {
  return (
    <div className='drink'>
        <h4>DRINKS</h4>
        <div className='pics'>
            < img src={image1}/>
<h5>Wine<br></br>kshs.1250</h5>
< img src={image2}/>
<h5>Cocktail<br></br>Kshs.500 </h5>
<img src ={image3}/>
<h5>Whiskey<br></br>Kshs.950</h5>
<img src ={image4}/>
<h5>Soft-drinks<br></br>Kshs.350 per 500ml</h5>

        </div>
        <button>
    <NavLink to="Order" activeClassName="is-active">
                Make your orders
            </NavLink>
            </button>
    </div>
  )
}

export default Drinks;