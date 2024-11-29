
import React, { useEffect, useState } from "react";
import InputText from "../../Components/Form/Input/Input";
import Buttom from "../../Components/Form/Buttom/Buttom";
import './Login.css'

function Login () {
    const [formData, setFormData] = useState({first_name: "",  last_name: "", email: "", password: ""})

    const inputChange = (event) => {
        // console.log(event.target);
        
        const {name, value} = event.target;        
        // const data = {
        //     ...formData,
        //     [name]: value
        // }
        // setFormData(data)    
        // console.log(data);
        // Pega o valor anterior e modifica de acordo com o name 
        
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))

        
    }

    console.log(formData);

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:3000/api/user", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            
        })
    }
    

    return (
        <>

    <div className="container">

        <div className="container-left">
            <div className="justify-content">
                <h1>Levy Tech</h1>

                <h3>Bem-Vindo <br />de volta!</h3>

                <p>Acesse sua conta agora <br /> mesmo.</p>

                <div className="buttom-entry">
                    <Buttom
                        type = "submit"
                        text = "Entrar"
                    />
                </div>

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
                    type = "text"
                    place= "Email"
                    class= "bi bi-envelope"
                    required = {true}
                    onChange = {inputChange}
                    name = {"email"}

                />

                <InputText
                    type = "password"
                    place = "Senha"
                    class = "bi bi-file-lock"
                    required = {true}
                    onChange = {inputChange}
                    name = {"password"}
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