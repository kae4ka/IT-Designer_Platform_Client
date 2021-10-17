import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";


import logo from '../src/img/polytech-logo@4.png';

import '../src/App.scss'

import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import SignIn from "./pages/sign-in/SignIn";
import SignUp from "./pages/sign-up/SignUp";


export default function App() {
  return (
    <div className="App">
      <Router>
        <div className="body__wrapper">

          <header className="header">
            <img src={logo} alt="logo" class="logo" />

            <form class="search-form">
              <input type="text" name="text" class="search" placeholder="Введите что-нибудь" />
              <input type="submit" name="submit" class="submit" value="Поиск" />
            </form>

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
          </header>

          <main>
            <Switch>
              <Route path="/sign-in">
                <SignIn />
              </Route>

              <Route path="/sign-up">
                <SignUp />
              </Route>

              <Route path="/about">
              </Route>

              <Route path="/users">
              </Route>

              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    </div>

  );
}
