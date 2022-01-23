import { Component } from "react";
import {Button} from 'reactstrap';
import './SignUp.scss';

class SignUp extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="signup">
                <h2 className="signup__heading">Регистрация</h2>
                <form action="post" className="reg-form">
                    <div className="form-item">
                        <label for="name" className="form-label">Придумайте логин</label>
                        <input type="text" name="name" className="form-input"/>
                    </div>

                    <div className="form-item">
                        <label for="password" className="form-label">Придумайте пароль</label>
                        <input type="password"  name="password" className="form-input"/>
                    </div>

                    <div className="form-item">
                        <label  for="password-repeat" className="form-label">Повторите пароль</label>
                        <input type="password" name="password-repeat" className="form-input"/>
                    </div>  

                    <Button type="submit" className="reg-btn">Зарегистрироваться</Button>
                </form>
            </div>
        );    
    }
}

export default SignUp;