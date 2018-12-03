import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css' 
import M from 'materialize-css/dist/js/materialize.min.js'
import "./Slider.css"


export default class Slider extends Component {
  state = {  }

  componentDidMount(){
    var elems = document.querySelectorAll('.slider')
    M.Slider.init(elems);
  }
  
  render() { 
    return (
      <div>
     <div className="slider">
     <ul className="slides">
       <li>
         <img src="images/slider4.jpeg"/>
         <div className="caption center-align">
           <h3 className='text'>Welcome to PlaNoire!</h3>
         </div>
       </li>
       <li>
         <img src="/images/slider2.jpeg"/> 
         <div className="caption left-align">
           <h3 className='text'>Your One Stop Shop</h3>
         </div>
       </li>
       <li>
         <img src="/images/slider1.jpg"/>
         <div className="caption right-align">
           <h3 className='text'>Photographers, DJs, Caterers, Make-Up Artists etc.</h3>
         </div>
       </li>
       <li>
         <img src="images/slider3.jpeg"/> 
         <div className="caption center-align">
           <h3 className='text'>Wedding Planning Made Easy for you!</h3>
         </div>
       </li>
       <li>
         <img src="images/slider5.JPG"/> 
         <div className="caption center-align">
           <h3 className='text'>Plan With PlaNoire!</h3>
         </div>
       </li>
     </ul>
   </div>
   </div>
   );
 
     }
    }
        