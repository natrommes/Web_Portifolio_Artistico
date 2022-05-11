
// BLOCO DECLARAÇÃO VARIAVEIS GLOBAIS: 
   
let textoBiografia = document.getElementById ('textoBiografia');


// BLOCO DE EVENTOS:


// SCRIPT PRINCIPAL:


// BLOCO DE FUNCIONALIDADES:

 (async function (){

   let response = await fetch('textoBio_pag2.txt');
   let texto = await response.text();
   textoBiografia.innerHTML = texto;
 })();
 




