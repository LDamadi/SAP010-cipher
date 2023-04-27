import cipher from './cipher.js';

document.getElementById("btn-criptografar").addEventListener("click", cipherInput);
//chamei a atenção do JS  (AddEventListener) para o meu click executar a função//
const alfabeto = ["a","b","c","d","e","f","g"];
function cipherInput(){
    const input = document.getElementById("input-texto").value;
    //Avisei ao JS para guardar a informação que tenho no HTML em uma caixinha do JS//
    console.log(input);
    //Fiz o teste para verificar se realmente guardou a informação na caixinha//
}
console.log(cipher);
