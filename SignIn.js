import React, {useContext, useEffect, useState} from "react";
import {useHttp} from '../../hooks/http.hook'
import {useMessage} from '../../hooks/message.hook'
import {AuthContext} from '../../context/AuthContext'
import './SignIn.scss'


export default function SignIn() {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        login: '', password: ''
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

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
        } catch (e) {}
    }

    return(
        <div class="container">
            <h1>Вход</h1>
            <form className="form" onSubmit={preventDefault}>
                <label className="label">Введите логин</label>
                <input
                    type="text"
                    id="login"
                    name="login"
                    class="input"
                    value={form.login}
                    onChange={changeHandler}
                />

                <label className="label">Введите пароль</label>
                <input
                    type="text"
                    id="password"
                    name="password"
                    class="input"
                    value={form.password}
                    onChange={changeHandler}
                />

                <button
                    type="submit"
                    className="button"
                    disabled={loading}
                    onClick={loginHandler}
                >
                    Войти
                </button>
            </form>
        </div>
    );
}
