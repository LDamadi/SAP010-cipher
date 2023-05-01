import cipher from './cipher.js';

console.log(cipher);
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", 
"q", "r", "s", "t", "u", "v", "x", "y", "w","z"]

const button = document.getElementById("cifrar")
const input = document.getElementById("texto")
const inputDeslocamento = document.getElementById("offset")

button.addEventListener("click", getInput)

function getInput(event){
    event.preventDefault()
    console.log(input.value)
    console.log(inputDeslocamento.value)
    const deslocamento=  parseInt(inputDeslocamento.value)
    console.log(typeof(deslocamento))
    let senha = input.value
    console.log(senha[0])
    for (let i = 0; i < alfabeto.length; i++) {
         if(senha[0] === alfabeto[i]){
            console.log(alfabeto.length)
            if(i+deslocamento>= alfabeto.length){
                console.log(i+deslocamento)
          senha=senha.replace(senha[0], alfabeto[deslocamento]) 
          return console.log(senha) 
            }
            senha=senha.replace(senha[0], alfabeto[i + deslocamento])
            return console.log(senha)
        }
      }


}


