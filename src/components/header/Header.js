import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";

import "./Header.scss"

import Home from '../../pages/home/Home';
import SignIn from '../../pages/sign-in/SignIn';
import SignUp from '../../pages/sign-up/SignUp';

import logo from '../../img/polytech-logo@4.png';

export default function Header() {
    return(
        <header class="header">

            <img src={logo} alt="logo" class="logo"/>

            <form class="search-form"> 
                <input type="text" name="text" class="search" placeholder="Введите что-нибудь"/>
                <input type="submit" name="submit" class="submit" value="Поиск"/>
            </form>

            <Router>
                {/* <div> */}
                    <nav class="header__navigation navigation">
                        <ul class="navigation__list">
                            <li class="list-item">
                                <Link to="/" class="navigation__link">Главная</Link>
                            </li>

                            <li class="list-item">
                                <Link to="/about" class="navigation__link">О нас</Link>
                            </li>

                            <li class="list-item">
                                <Link to="/users" class="navigation__link">Пользователи</Link>
                            </li>
                            
                            <li class="list-item">
                                <Link to="/sign-in" class="navigation__link">Вход</Link>
                            </li>

                            <li class="list-item">
                                <Link to="/sign-up" class="navigation__link">Регистрация</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* A <Switch> looks through its children <Route>s and
                        renders the first one that matches the current URL. */}

                {/* </div> */}
            </Router>
        </header>
    );
}
