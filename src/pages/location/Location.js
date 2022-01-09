import { Component } from "react";
import './Location.scss';
import img1 from '../../img/project-img-1.jpg';
import img2 from '../../img/project-img-2.jpg';
import img3 from '../../img/project-img-3.jpg';
import img4 from '../../img/project-img-4.jpg';
import img5 from '../../img/project-img-5.jpg';
import img6 from '../../img/project-img-6.jpg';

class Location extends Component {

    constructor(props) {
        super(props);
        
    }
    

    

    render() {
        return(
            <div className="location-page">
                <h2 className="location-name">Земля, Грузия, Тбилиси</h2>
                <div className="wrapper">
                    <img src={img1} alt=""/>
                    <img src={img2} alt=""/>
                    <img src={img3} alt=""/>
                    <img src={img4} alt=""/>
                    <img src={img5} alt=""/>
                    <img src={img6} alt=""/>
                </div>
                <div className="timeline">
                
                </div>
            </div>
        );
    }

}   
export default Location;