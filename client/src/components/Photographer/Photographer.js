import React from 'react';
import Card from '../Card/Card';


// import axios from 'axios';


const Photographer = (props) => {
        console.log("Photographer", props);
        return (
            

          
            <Card vendorType={props.vendorType}/>

           
        );
}
 
export default Photographer;