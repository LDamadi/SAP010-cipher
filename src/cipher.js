const cipher = {
  encode: function(desloc, texto){
    if (typeof desloc !== 'number' || typeof texto !== 'string') //condição para ver se meu desloc é numero e se meu texto é string//
    {throw new TypeError('os argumentos devem ser um number e uma string')}
    else{
      let textoCodificado = ""; 
      for(let i = 0; i<texto.length; i++){ //Aqui inicia a =estrutura do laço de repetição for// 
        let caracter = texto[i];
        if(caracter.match(/[A-Z]/)){
          const codigoAsc = texto.charCodeAt(i);
          if(codigoAsc >= 65 && codigoAsc <= 90){
            caracter = String.fromCharCode(((codigoAsc - 65 + desloc)% 26)+ 65); //Esta é a equação para criptografar e descriptografar//
          }
        }
        textoCodificado += caracter;
      }
      return textoCodificado;
    }


  },
  
  decode: function(desloc, texto){
    if (typeof desloc !== 'number' || typeof texto !== 'string') //condição para ver se meu desloc é numero e se meu texto é string//
    {throw new TypeError('os argumentos devem ser um number e uma string')}
    else{
      let textoCodificado = ""; 
      for(let i = 0; i<texto.length; i++){ //Aqui inicia a =estrutura do laço de repetição for// 
        let caracter = texto[i];
        if(caracter.match(/[A-Z]/)){
          const codigoAsc = texto.charCodeAt(i);
          if(codigoAsc >= 65 && codigoAsc <= 90){
            let result = codigoAsc-65 - desloc;
            while(result < 0){
              result += 26;
            }
            caracter = String.fromCharCode((result % 26) + 65);
          }
        }
        textoCodificado += caracter;
      }
      return textoCodificado;
    }


  }
}

export default cipher;
