import React, {Component} from 'react';
import Slider from '../Slider/Slider'; 
import Card from '../Card/Card';
import Nav from '../Nav/Nav';

class HomePage extends Component {
    state = { 
        
     }
    render() { 
        return (
            <div>
                <Nav/>
                <Slider/>
                <Card/>
            </div>
          );
    }
}
 
export default HomePage;