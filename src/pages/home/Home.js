import React, { Component } from "react";
import { NavLink } from "reactstrap";
import "./Home.css";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    } 


    render() {
        return(

            <div className="world">
                <NavLink to="/location">
                    <h2 className="world__heading">Планета Земля</h2>
                </NavLink>
            </div>

        );
    }
}

export default Home;