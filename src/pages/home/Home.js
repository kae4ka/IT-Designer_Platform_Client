import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Home.scss";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    } 

    render() {
        return(

            <div className="world">

                    <h2 className="world__heading">Планета Земля</h2>

                    <NavLink to="/location">
                        <div className="location-point"></div>
                    </NavLink>
            </div>

        );
    }
}

export default Home;