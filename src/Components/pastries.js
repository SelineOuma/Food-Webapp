import React from 'react';
import { NavLink } from 'react-router-dom';
import './pastries.css';
import image1 from '../Components/images/tart.jpg';
import image2 from '../Components/images/croissant.jpg';
import image3 from '../Components/images/pie.jpg';
import image4 from '../Components/images/Scones.jpg';


const Pastries=()=> {
  return (
    <div className='pasty'>
        <h4>Pastries</h4>
        <div className='pics'>
            < img src={image1}/>
<h5>Tarts<br></br>kshs.250 per piece<br></br>shortcrust pastry</h5>
< img src={image2}/>
<h5>Croissant<br></br>Kshs.300 per piece<br></br>Crescent-shaped roll made of sweet <br></br>flaky yeast dough, eaten for breakfast.</h5>
<img src ={image3}/>
<h5>Pie<br></br>Kshs.450 per piece<br></br> a baked dish which is usually<br></br> made of a pastry dough casing</h5>
<img src ={image4}/>
<h5>Scones<br></br>Kshs.150 per piece</h5>

        </div>
        <button>
    <NavLink to="Order" activeClassName="is-active">
                Make your orders
            </NavLink>
            </button>
    </div>
  )
}

export default Pastries;