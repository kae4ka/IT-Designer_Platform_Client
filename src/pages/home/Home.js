import { Component } from "react";
import './Home.scss'

class Home extends Component{

    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div className="home-page">
                <h2 className="world-name">Планета Земля</h2>
            </div>
        );    
    }
}

export default Home;