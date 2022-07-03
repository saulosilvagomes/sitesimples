class Validacao{ //classe que efetua a validação dos campos

    valida_form (){ //método para verificar o formulário antes de enviar seus dados 

        if(document.getElementById("nome").value == ""){ //se o campo nome está vazio
            alert('Por favor, preencha o campo nome');//alerta o usuário
            document.getElementById("nome").focus();//ênfase no campo
            return false //não prossegue, continua na página
        } else{
            if(document.getElementById("email").value == ""){ //se o campo email está vazio
            alert('Por favor, preencha o campo email');//alerta o usuário
            document.getElementById("email").focus();//ênfase no campo
            return false //não prossegue, continua na página
        }else{
            if(document.getElementById("msg").value == ""){ //se o campo Mensagem está vazio
                alert('Por favor, preencha o campo Mensagem');//alerta o usuário
                document.getElementById("msg").focus();//ênfase no campo
                return false //não prossegue, continua na página
            }
        }
        }
    }//fim valida_form
} //fim da classe
var valida = new Validacao(); //objeto valida para acesso aos métodos da classe validação
