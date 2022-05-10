
// BLOCO DECLARAÇÃO VARIAVEIS GLOBAIS: 
   
let textoBio = document.getElementById ('textoBio');


// BLOCO DE EVENTOS:


// SCRIPT PRINCIPAL:


// BLOCO DE FUNCIONALIDADES:

 (async function (){

   let response = await fetch('textoBio.index.txt');
   let texto = await response.text();
   textoBio.innerHTML = texto;
 })();
 




