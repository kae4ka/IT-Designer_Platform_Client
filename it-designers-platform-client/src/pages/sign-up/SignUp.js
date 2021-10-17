import React from "react";
import '../sign-up/SignUp.scss'

export default function SignUp() {
    return(
        <div class="container">
            <h1>Регистрация</h1>

            <form action="" method="post" className="form">
                <label for="login" className="label">Введите email</label>
                <input type="text" id="email" name="user_login" class="input"/>

                <label for="password" className="label">Введите пароль</label>
                <input type="text" id="password" name="user_password" class="input"/>

                <label for="password" className="label">Повторите пароль</label>
                <input type="text" id="password" name="user_password" class="input"/>

                <button type="submit" class="button">Зарегистрироваться</button>
             </form>
    </div>
    );    
}