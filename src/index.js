import cipher from './cipher.js';
console.log (cipher);

document.getElementById("cifrar").addEventListener("click", myFunction);

function myFunction(){
const input = document.getElementById("cifrar").value;

const encode = cipher.encode(input);
document.getElementById("outputEncode").value=encode
const decode = cipher.decode(input);
document.getElementById("outputDecode").value=decode

}

