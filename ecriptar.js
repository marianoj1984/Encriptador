
var botonEncriptar=document.querySelector("#boton-encriptar");
var botonDesencriptar=document.querySelector("#boton-desencriptar");
var textoEncriptado=document.querySelector("#texto-encriptado");

botonEncriptar.addEventListener("click",function(event){
    event.preventDefault();
    var texto=document.querySelector("#texto");
     for(var i=0;i<texto.lenght;i++){
         if(texto[i]=="a"){
             texto[i]="alab";
         }
         console.log(texto);
     }
    textoEncriptado.textContent=texto.textContent;
});

