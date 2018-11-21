import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css' 
import M from 'materialize-css/dist/js/materialize.min.js'


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
           <h3>This is our big Tagline!</h3>
           <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
         </div>
       </li>
       <li>
         <img src="/images/slider2.jpeg"/> 
         <div className="caption left-align">
           <h3>Left Aligned Caption</h3>
           <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
         </div>
       </li>
       <li>
         <img src="/images/slider1.jpg"/>
         <div className="caption right-align">
           <h3>Right Aligned Caption</h3>
           <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
         </div>
       </li>
       <li>
         <img src="images/slider3.jpeg"/> 
         <div className="caption center-align">
           <h3>This is our big Tagline!</h3>
           <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
         </div>
       </li>
       <li>
         <img src="images/slider5.JPG"/> 
         <div className="caption center-align">
           <h3>This is our big Tagline!</h3>
           <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
         </div>
       </li>
     </ul>
   </div>
   </div>
   );
 
     }
    }
        