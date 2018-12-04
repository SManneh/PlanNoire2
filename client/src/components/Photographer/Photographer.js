import React from 'react';
import Card from '../Card/Card';
import './Photography.css';


// import axios from 'axios';


const Photographer = (props) => {
        console.log("Photographer", props);
        return (
            <div>

            <Card vendorType={props.vendorType}/>
            </div>
           
        );
}
 
export default Photographer;