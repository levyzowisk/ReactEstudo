import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// O "^" dentro dos colchetes faz com que a regex capture tudo que NÃO for letras, espaços e hífens;
// Com o +: Remove sequências de caracteres inválidos de uma vez.
// Sem o +: Remove caractere por caractere inválido.
const regexString = /[^\p{L} -]+/gu;
const regexEmail  = /^[a-z0-9.+_-]+@[a-z0-9-]+\.[a-z]{2,}\.?([a-z]{2,})?$/i;

const validarNome = (valor) => {
    valor = valor.replace(regexString, "",);
    // Poderia colocar um mensagem caso o campo estivesse vazio
    // Verifica o que me mandava, e retornava pra ele o o que poderia ser digitado
    return valor;
}

const validarEmail = (evento) => {
    console.log(evento.target.value);
    
    console.log(regexEmail.test(evento.target.value));
    
    if(regexEmail.test(evento.target.value)) {
        return true;
    }
    else {
        // alert("Digite um email válido")
        toast.error("Digite um email válido", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
        })
        return false;
    }

} 

export {
    validarNome,
    validarEmail
}