
function verificar(){
var nome = document.getElementById("nome").value

document.getElementById("divjessica").style.display = 'none'
document.getElementById("divjonas").style.display = 'none'

    if (nome.toLowerCase() == 'jessica'){
        /*window.alert('bla')*/
        document.getElementById("divjessica").style.display = 'block'

    }else if (nome.toLowerCase() == 'jonas'){
        /*window.alert('blu')*/
        document.getElementById("divjonas").style.display = 'block'

    }else{
        window.alert("seu nome esta limpo ou foi escrito de maneira errada")
    }
}
