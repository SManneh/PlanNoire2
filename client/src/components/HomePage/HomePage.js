import React, {Component} from 'react';
import Slider from '../Slider/Slider'; 
import Card from '../Card/Card';


class HomePage extends Component {
    state = { 
        
     }
    render() { 
        return (
            <div>
               
                <Slider/>
                <Card/>
            </div>
          );
    }
}
 
export default HomePage;