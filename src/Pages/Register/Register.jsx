import { useState } from "react";
import login from "../../../public/images/login.svg";
import InputText from "../../Components/Form/Input/Input";
import Buttom from "../../Components/Form/Buttom/Buttom";
import "./Register.css";
import { validarEmail } from "../../validations/globalValidations";

function Register () {
    const [isVisible, setVisible] = useState(false);
    const [formData, setFormData] = useState({email: "", password: ""});

    const inputChange = (event) => {
        setFormData((prevData) => ({
            ...prevData,
           [event.target.name]: event.target.value
        }));
        
    }

    return (
        <>
        <div className="login-container">
            <div className="login-img">
                <img src={login} alt="" />
            </div>

           <div className="login-form">
                <h1>Login</h1>

                <form action="">
                    <div className="login-inputs">
                        <InputText
                            type = "email"
                            onBlur = {validarEmail}
                            place = "email"
                            class = "bi bi-envelope"
                            required = {true}
                            onChange = {inputChange}
                            name = "email"
                        />
                        <br />

                        <InputText 
                            type = {isVisible ? "text" : "password"}
                            place = "senha"
                            class = "bi bi-file-lock"
                            required = {true}
                            onClick = {() => setVisible(!isVisible)}
                            iconeye = {isVisible ? 'bi-eye-slash-fill' : 'bi-eye-fill'}
                            onChange = {inputChange}
                            name = "password"

                        />
                        
                    </div>

                    <div className="options-register">
                        <div className="login-check">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Me lembre</label>
                        </div>

                        <a href="#">Esqueci a senha</a>
                    </div>

                    <div className="login-buttom">
                        <Buttom 
                        type = "submit"
                        text = "Entrar" 
                        />
                    </div>
        
                    <p>Não tem uma conta ? <a href="/register">Registre-se</a></p>
                </form>
           </div>
        </div>

        </>
    )
}

export default Register;