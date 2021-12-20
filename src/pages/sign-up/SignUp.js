import React, {useEffect, useState} from "react";
import {useHttp} from '../../hooks/http.hook'
import {useMessage} from '../../hooks/message.hook'
import './SignUp.scss'

export default function SignUp() {
    const message = useMessage()
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        login: '', password: '', password_repeat:''
    })

    const preventDefault = (e) => {
        e.preventDefault();
    }
    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler = async () => {
        if(form.password !== form.password_repeat){
            message("Пароли не совпадают!")
            return
        }
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            message(data.message)
        } catch (e) {}
    }


    return(
        <div class="container">
            <h1>Регистрация</h1>

            <form className="form" onSubmit={preventDefault}>
                <label for="login" className="label">Введите email</label>
                <input
                    type="text"
                    id="login"
                    name="login"
                    class="input"
                    value={form.login}
                    onChange={changeHandler}
                />

                <label
                    for="password" className="label">Введите пароль</label>

                <input
                    type="text"
                    id="password"
                    name="password"
                    class="input"
                    value={form.password}
                    onChange={changeHandler}
                />

                <label for="password" className="label">Повторите пароль</label>

                <input
                    type="text"
                    id="password_repeat"
                    name="password_repeat"
                    class="input"
                    value={form.password_repeat}
                    onChange={changeHandler}
                />



                <button
                    type="submit"
                    class="button"
                    onClick={registerHandler}
                    disabled={loading}
                >
                    Зарегистрироваться
                </button>
             </form>
    </div>
    );
}
