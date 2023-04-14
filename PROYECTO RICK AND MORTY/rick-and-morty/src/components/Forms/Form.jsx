import React from "react";
import styles from './Form.module.css'
import { useState } from "react";
import validation from "../Validation/Validation";

const Form = ({login}) => {

    const [erros, setErros] = useState({});
    const [userData, setUserData] = useState({
        email:'',
        password: ''
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErros(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();//que la pagina no se recargue con el botton submit
        login(userData);
    }

    return(
        <div className={styles.container}>
            <form id={styles.form} onSubmit={handleSubmit}>
                <img id={styles.login} src="https://cdn-icons-png.flaticon.com/512/5087/5087607.png" alt="login" />
                <h1>Login</h1>
                <label htmlFor='email'>Email:</label>
                <input type="email" name='email' value={userData.email} onChange={handleChange}/>
                {erros.email && <p className={styles.error}>{erros.email}</p>}

                

                <label htmlFor='password'>Password</label>
                <input type="password" name='password' value={userData.password} onChange={handleChange}/>
                {erros.password && <p className={styles.error}>{erros.password}</p>}

                <button id={styles.button}>Submit</button>
            </form>
        </div>
    )
}

export default Form;