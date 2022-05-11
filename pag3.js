

document.addEventListener('DOMContentLoaded', init, false);

function init(){

/// MODELO DE DADOS da BIBLIOTECA
let obrasMarcia = [];   
let itemArray = [];

    fetch('pag3.json')
      .then (response => response.json())
      .then (obras => {
  
          //obrasMarcia = obras.slice();
          obrasMarcia = [...obras]; 

          itemArray = obrasMarcia.map(ano => ano.anoObra).filter((value, index, self) => self.indexOf(value) === index);
          /* anoObra.appendChild(document.createElement("option")); 
          => para criar tag <option> dentro a tag <select>. 
          => optei em criar direto no HTML a tag, por isso não usei o cod acima. */

         for (let i = 0; i < itemArray.length; i++) { // criei o for, dentro a variavel optionArray, selecionando pelo indice.
            let optionArray = itemArray[i];
            let el = document.createElement("option"); 
            el.textContent = optionArray;
            el.value = optionArray;
            anoObra.appendChild(el); //adicinando um irmão a tag select da class anoObra.
         } 

         mostrarObras()
      })
      .catch (err => (console.log(err)))
      ;

/// BLOCO DECLARAÇAO VARIAVEIS GLOBAIS
let grid = document.querySelector('section#grid');
let title = document.querySelector('#title');
let anoObra = document.querySelector('#anoObra');
let alreadyRead = document.querySelector('#alreadyRead');
let imageUrl = document.querySelector('#imageUrl');
let filters = document.querySelector('#filters');
let filterRead = document.querySelector("#filterRead");
let filterNotRead = document.querySelector("#filterNotRead");
let tipoObra = document.querySelector ('#tipoObra');
let mostrarFiltro = '';
let todasAsObras = document.querySelector ('#todasAsObras');



//identificar botao 
let tecnicasMistas = document.querySelector('#tecnicasMistas'); 
let tridimensionais = document.querySelector('#tridimensionais');
let instalações = document.querySelector('#instalações');
let intervençãoUrbana = document.querySelector('#intervençãoUrbana');
let gravuras = document.querySelector('#gravuras'); 
let gravuraDigital = document.querySelector('#gravuraDigital'); 
let fotografias = document.querySelector('#fotografias'); 



//EVENTOS - filtar por tecnicasmistas + outros Eventos
tecnicasMistas.addEventListener('click', mostrarTecnicasMistas, false);
tridimensionais.addEventListener('click', mostrarTridimensionais, false);
instalações.addEventListener('click', mostrarInstalações, false);
intervençãoUrbana.addEventListener('click', mostrarInterverçãoUrbana, false);
gravuras.addEventListener('click', mostrarGravuras, false); 
gravuraDigital.addEventListener('click', mostrarGravuraDigital, false); 
fotografias.addEventListener('click', mostrarFotografia, false); 
anoObra.addEventListener('change', mostrarObras, false);
todasAsObras.addEventListener ('click', mostrarTodas, false);



/////// BLOCO DE FUNCIONALIDADES
function mostrarObras(){
    let arrayObrasMarcia = obrasMarcia;
    if (mostrarFiltro != '' ) arrayObrasMarcia = arrayObrasMarcia.filter (obra => obra.categoria === mostrarFiltro);

    if (anoObra.value != '' ) arrayObrasMarcia = arrayObrasMarcia.filter(obra => obra.anoObra === anoObra.value);

    grid.innerHTML = '';
    
    arrayObrasMarcia.map( (obrasMarcia) => {
        //console.log(obrasMarcia);
       grid.innerHTML += `
            <article>
                <h1> ${obrasMarcia.title} </h1>
                <h2> ${obrasMarcia.anoObra}</h2>
                <img src='${obrasMarcia.imageUrl}' id="imgLivro" data-img='${obrasMarcia.imageUrlGr}' />
                <br>
                <h3> <img src="Imagens/favicon.ico" alt="" id="imgIco"> ${obrasMarcia.categoria}</h3>
                <section>
                    <button id='deleteBtn' class ='deleteBtn' data-id="${obrasMarcia.id}">Comprar Obra</button>
                    <button id='editBtn' class = 'editBtn' data-id="${obrasMarcia.id}">Informações</button>
                </section>
            </article>
       `;
       
    })

}
// => Havia um <p> para obras lidas/e não lidas,(<p>Obras vistas: ${obrasMarcia.alreadyRead ? '✅' :'❌' } </p>)



/* function filterEvents(evt){
    //console.log(evt.target.id);
    
    if(evt.target.id == 'filterRead'){
        filtrarLidos(evt.target.checked);
        filterNotRead.checked = false;
    }
    if(evt.target.id == 'filterNotRead'){
        filtrarNaoLidos(evt.target.checked);
        filterRead.checked = false;
    }
}

function filtrarLidos(checked){
    if(checked == true){
        let obrasLidas = obrasMarcia.filter( obrasMarcia => obrasMarcia.alreadyRead == true);
        mostrarObras(obrasLidas);
    } else {
        mostrarObras(obrasMarcia);
    }
}

function filtrarNaoLidos(checked){
    if(checked == true){
        let obrasNaoLidas = obrasMarcia.filter( obraMarcia => obraMarcia.alreadyRead == false);
        mostrarObras(obrasNaoLidas);
    } else {
        mostrarObras(obrasMarcia);
    }
}
*/

function mostrarTecnicasMistas(){
    tipoObra.textContent = 'Técnicas Mistas'; // aparece na pag primeiro o nome do tipo de obra selecionado.
    
    mostrarFiltro = 'Técnicas Mistas'; // filtra pela tipo de obra.
    mostrarObras(); // chama a função mostrarOras preenchendo a Grid com os elementos da nova Array filtrada por Tecnicas Mistas, criado após seleção. 


    //=> codigo abaixo era o anterior. 
    /*let obrasTecMistas = obrasMarcia.filter(obra => obra.categoria === 'Técnicas Mistas');
    mostrarObras(obrasTecMistas);
    tipoObra.textContent = 'Técnicas Mistas'; */
}
 function mostrarTridimensionais (){
    tipoObra.textContent = 'Tridimensionais';  
    
    mostrarFiltro = 'Tridimensionais';
    mostrarObras();
    
    /* let obrasTridimensionais = obrasMarcia.filter(obra => obra.categoria === 'Tridimensionais');
    mostrarObras(obrasTridimensionais);

    tipoObra.textContent = 'Tridimensionais';  */
}
function mostrarInstalações(){
    tipoObra.textContent = 'Instalações';

    mostrarFiltro = 'Instalações';
    mostrarObras();

    /*  let obrasInstalações = obrasMarcia.filter(obra => obra.categoria === 'Instalações');
    mostrarObras(obrasInstalações);
    tipoObra.textContent = 'Instalações';   */ 
}
function mostrarInterverçãoUrbana (){
    tipoObra.textContent = 'Intervenção Urbana';

    mostrarFiltro = 'Intervenção Urbana';
    mostrarObras();
    
    /*let obrasInterUrbana = obrasMarcia.filter(obra => obra.categoria === 'Intervenção Urbana');
    mostrarObras(obrasInterUrbana);
    tipoObra.textContent = 'Intervenção Urbana';  */
} 
function mostrarGravuras (){
    tipoObra.textContent = 'Gravuras';

    mostrarFiltro = 'Gravuras';
    mostrarObras();

    /*let categoriaAno = obrasGravuras.filter(ano => ano.anoObra === anoObra.value);
    anoObra.value = '';   
    mostrarObras(categoriaAno); */
} 
function mostrarGravuraDigital (){
    tipoObra.textContent = 'Gravura Digital';
    
    mostrarFiltro = 'Gravura Digital';
    mostrarObras();

    /*let obrasGravuraDigital = obrasMarcia.filter(obra => obra.categoria === 'Gravura Digital');
    mostrarObras(obrasGravuraDigital);
    tipoObra.textContent = 'Gravura Digital'; */
} 
function mostrarFotografia (){
    tipoObra.textContent = 'Fotografias';

    mostrarFiltro = 'Fotografias';
    mostrarObras ();
    
    /*let obrasFotografia = obrasMarcia.filter(obra => obra.categoria === 'Fotografias');
    mostrarObras(obrasFotografia);
    tipoObra.textContent = 'Fotografias';  */
} 
function mostrarTodas (){// novo botão portifolio
    tipoObra.textContent = 'Portfólio'; // aparece na pag primeiro o nome do tipo de obra selecionado.

    mostrarFiltro = ''; // a strig fica vazia, devido exitir a opção sem ano nas Tags select/opção, que é opção que aparece todas as obras.
    mostrarObras(); // chama a função novamente e preenche a grid com os elementos da array.

}



//////////// SCRIPT PRINCIPAL

// mostrarObras(); // chamando a função ao carregar a pagina. 
//aparecerTituloObra(title);


}