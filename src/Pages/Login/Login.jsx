
import React, { useEffect, useState } from "react";
import InputText from "../../Components/Form/Input/Input";
import Buttom from "../../Components/Form/Buttom/Buttom";
import './Login.css';
import { validarNome } from "../../validations/globalValidations";
import { validarEmail } from "../../validations/globalValidations";
import { useNavigate } from "react-router-dom";

function Login () {
    const [isVisible, setVisible] = useState(false);
    const [formData, setFormData] = useState({first_name: "",  last_name: "", email: "", password: ""})
    const navigate  = useNavigate();

    const inputChange = (event) => {
         
        let {name, value} = event.target;        
        // const data = {
        //     ...formData,
        //     [name]: value
        // }
        // setFormData(data)    
        // console.log(data);
        // Pega o valor anterior e modifica de acordo com o name 

        name == "first_name" | name == "last_name" ? event.target.value = validarNome(value) : null;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    console.log(formData);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
        
        // fetch("http://localhost:3000/api/user", {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(formData)
        //     })
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data);
            
        // })
    }
    
    const redirect = (event) => {
        event.preventDefault();
        navigate("/register");
        
    }

    return (
        <>
    <div className="container">

        <div className="container-left">
            <div className="justify-content">
                <h1>Levy Tech</h1>

                <h3>Bem-Vindo <br />de volta!</h3>

                <p>Acesse sua conta agora <br /> mesmo.</p>
                
                
                <form onSubmit={redirect} className="buttom-entry">
                    <Buttom
                        type = "submit"
                        text = "Entrar"
                    />
                </form>

            </div>

        </div>

        <div className="container-rigth">
            <h1>Crie sua Conta</h1>

            <form onSubmit={handleSubmit}>
                <InputText
                    type = "text"
                    place= "Primeiro Nome"
                    class= "bi bi-person"
                    required = {true}
                    // onBlur = {onBlur}
                    onChange = {inputChange}
                    name = {"first_name"}
                    

            />

                <InputText 
                    type = "text"
                    place= "Ultimo nome"
                    class= "bi bi-person"
                    required = {true}
                    onChange = {inputChange}
                    name = {"last_name"}   
                />

                <InputText
                    type = "email"
                    onBlur ={validarEmail}
                    place= "Email"
                    class= "bi bi-envelope"
                    required = {true}
                    onChange = {inputChange}
                    name = {"email"}

                />

                <InputText
                    type = {isVisible ? "text" : "password"}
                    place = "Senha"
                    class = "bi bi-file-lock"
                    required = {true}
                    onClick = {() => setVisible(!isVisible)}
                    iconeye = {isVisible ? 'bi-eye-slash-fill' : 'bi-eye-fill'}
                    onChange = {inputChange}
                    icon = "bi bi-eye-fill"
                    name = {"password"}
                    // A verificar, primeiro, onclick não seria a melhor opção.
                    // Essa função teria que mudar a visibilidade do input password
             />
            <div className="buttom-register">

                <Buttom
                        type = "submit"
                        text = "Cadastrar"
                        // formMethod = {'post'}
                        
                    />
            </div>

            </form>
        </div>

    </div>

        </>
        
    )

}

export default Login;