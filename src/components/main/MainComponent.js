import React, { Component } from "react";
import Header from '../header/Header';
import { Routes, Route, Navigate} from 'react-router-dom';

import Location from "../../pages/location/Location"
import SignUp from "../../pages/sign-up/SignUp";
import Home from "../../pages/home/Home";

class Main extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
        
        }
    }

    render() {
        return(
            <div>
                <Header/>
                <Routes>
                    <Route path="/location" element={<Location/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="*" element={<Navigate to="/home"/>}/>
                </Routes>
            </div>
        );
    }

}

export default Main;