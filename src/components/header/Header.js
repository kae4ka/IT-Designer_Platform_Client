import React, { Component } from "react";
import {Navbar, NavbarToggler, NavbarBrand, Collapse, Nav, NavItem,
        Button,Modal,ModalHeader, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap';
import { NavLink } from 'react-router-dom';
// import "./Header.css"
import "./Header.scss"

import logo from '../../polytech-logo@4.png'


class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false,
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }


    toggleModal(isModalOpne) {
        this.setState({
            isModalOpen : !this.state.isModalOpen,
        });
    }

    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + "Password: " + this.password.value + "Remember: " + this.remember.checked);
        event.preventDefault();
    }


    render() {
        return(
            <header className="header">

                <NavLink className="link--logo" to="/home">
                    <img  className="logo" src={logo} alt="logo"/>
                </NavLink>

                <nav className="header__navigation navigation">
                    <ul className="navigation__list">
                        <li className="navigation_item"><Button className="navigation__link login-btn" to="/signin" onClick={this.toggleModal}>Войти</Button></li>
                        <li className="navigation_item"><NavLink className="navigation__link" to="/signup">Зарегистрироваться</NavLink></li>
                    </ul>
                </nav>                

                <Modal isOpen = {this.state.isModalOpen} toggle={this.toggleModal} className="modal">
                    <Button onClick={this.toggleModal} className="close-btn">x</Button>
                    <ModalHeader >
                        <p className="modal__heading">Login</p>
                    </ModalHeader>
                    <ModalBody>
                        <Form onSumbit={this.handleLogin} className="login-form">
                            <FormGroup className="form-item">
                                <Label htmlFor='username' className="form-label">Логин</Label>
                                <Input type='text' id='username' name='username'
                                    innerRef={(input) => this.username = input} className="form-input"/>
                            </FormGroup>

                            <FormGroup className="form-item">
                                <Label htmlFor='password'>Пароль</Label>
                                <Input type='password' id='password' name='password'
                                    innerRef={(input) => this.password = input} className="form-input"/>
                            </FormGroup>

                            <FormGroup className="form-item">
                                <Label check>
                                    <Input type='checkbox' name='remember'
                                        innerRef={(input) => this.remember = input}/>
                                    Запомнить меня
                                </Label>
                            </FormGroup>
                            <Button type='submit' value="submit" className='br-primary' color='primary' className="modal__login-btn">Войти</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </header>
        );
    }
}

export default Header;