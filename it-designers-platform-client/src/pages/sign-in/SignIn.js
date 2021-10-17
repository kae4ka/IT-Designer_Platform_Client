import React from "react";
import '../sign-in/SignIn.scss'

export default function SignIn() {
    return(
        <div class="container">
            <h1>Вход</h1>
            <form action="" method="post" className="form">
                <label for="login" className="label">Введите логин</label>
                <input type="text" id="login" name="user_login" class="input"/>

                <label for="password" className="label">Введите пароль</label>
                <input type="text" id="password" name="user_password" class="input"/>

                <button type="submit" className="button">Войти</button>
            </form>
        </div>     
    );    
}