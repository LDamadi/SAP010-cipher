import cipher from './cipher.js';

document.getElementById("cifrar").addEventListener("click", myFunction);
function myFunction(){
  const texto = document.getElementById("Digite").value; 
  const offset = parseInt(document.getElementById("offset").value);
  const mensagemCod = cipher.encode(offset, texto);
  document.getElementById("outputEncode").value= mensagemCod;

}
document.getElementById("decifrar").addEventListener("click", descriptografar);
function descriptografar(){
  const texto = document.getElementById("outputEncode").value; 
  const offset = parseInt(document.getElementById("offset").value);
  const descript = cipher.decode(offset, texto);
  document.getElementById("outputDecode").value=descript;

}

