import cipher from './cipher.js';

console.log(cipher);

const button = document.getElementById("button")

button.addEventListener("click", teste)

function teste () {
    console.log("chamou a funçao teste")
    button.innerHTML = "criptografar"

}


