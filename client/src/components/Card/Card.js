import React, { Component } from 'react';
import './Card.css';
import axios from 'axios';

 class Card extends Component {
     state = { 

    }
     render() { 
        return (<div>
            <div className="row">
                <div className="col s12 m6 l3">
                  <div className="card medium">
                    <div className="card-image">
                      <img src="https://i2-prod.mirror.co.uk/incoming/article12385345.ece/ALTERNATES/s615/0_Bride-sitting-on-grooms-lap.jpg"/>
                    </div>
                    <div className="card-content">
                    <span className="card-title"></span>
                    <p className="vendor-cat"></p>
                    </div>
                    <div className="card-action">
                      <a href="#">This is a link</a>
                    </div>
                  </div>
                </div>
              </div>
                     
                </div>  );
     }
 }
  
 export default Card;

// https://i2-prod.mirror.co.uk/incoming/article12385345.ece/ALTERNATES/s615/0_Bride-sitting-on-grooms-lap.jpg