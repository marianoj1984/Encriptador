
var botonEncriptar=document.querySelector("#boton-encriptar");
var botonDesencriptar=document.querySelector("#boton-desencriptar");
var textoEncriptado=document.querySelector("#cuadro-secundario");
var presionado=true;

var oracionEncriptada=document.createElement("h3");
oracionEncriptada.classList.add("texto-encriptado")
textoEncriptado.appendChild(oracionEncriptada);
var boton=document.createElement("button");
    boton.innerHTML="Copiar"
    boton.classList.add("boton-copiar")

botonEncriptar.addEventListener("click",function(event){
    event.preventDefault();
    var input=document.querySelector("#texto");
    var frase=input.value;
    if(frase!=""){
        
        var oracion=crearFraseEncriptada(frase);
        oracionEncriptada.innerHTML=oracion;
        var varios=document.querySelectorAll(".texto-por-defecto")
        for(var i=0;i<varios.length;i++){
        varios[i].classList.add("invisible");
        }
        input.value="";
        
        textoEncriptado.appendChild(boton);
        boton.addEventListener("click",function(){
            var textoCopiado=document.querySelector("texto-encriptado");
            
            navigator.clipboard.writeText(oracionEncriptada.textContent);
            console.log(oracionEncriptada.textContent);
        })
    }
});
botonDesencriptar.addEventListener("click",function(event){
    event.preventDefault();
    var input=document.querySelector("#texto");
    var frase=input.value;
    if(frase!=""){
    var oracion=crearFraseDesencriptada(frase);
    
        oracionEncriptada.innerHTML=oracion;
        
        var varios=document.querySelectorAll(".texto-por-defecto")
        for(var i=0;i<varios.length;i++){
        varios[i].classList.add("invisible");
        }
        input.value="";

        textoEncriptado.appendChild(boton);
        boton.addEventListener("click",function(){
            var textoCopiado=document.querySelector("texto-encriptado");
            
            navigator.clipboard.writeText(oracionEncriptada.textContent);
            console.log(oracionEncriptada.textContent);
        })
    }
});

function crearFraseEncriptada(frase){
    var nuevaFrase="";
    for(var i=0;i<frase.length;i++){
        if(frase[i]=='a'){
            nuevaFrase+="ai";
        }else{
            if(frase[i]=="e"){
            nuevaFrase+="enter";
                }else{
                if(frase[i]=="i"){
                    nuevaFrase+="imes";
                    }else{
                    if(frase[i]=="o"){
                        nuevaFrase+="ober";
                        }else{
                        if(frase[i]=="u"){
                            nuevaFrase+="ufat";
                            }else{
                                nuevaFrase+=frase[i];
                            }
                        }
                    }
                }
            }
        }        
    return nuevaFrase;
}
function crearFraseDesencriptada(frase){
    var nuevaFrase="";
    var cont=0;
    while(cont<frase.length){
        if(frase[cont]=="a" && frase[cont+1]=="i"){
            nuevaFrase+="a";
            cont+=2;
        }
        if(frase[cont]=="e" && frase[cont+1]=="n" && frase[cont+2]=="t" && frase[cont+3]=="e" && frase[cont+4]=="r"){
            nuevaFrase+="e";
            cont+=5;
        }
        if(frase[cont]=="i" && frase[cont+1]=="m" && frase[cont+2]=="e" && frase[cont+3]=="s"){
            nuevaFrase+="i";
            cont+=4;
        }
        if(frase[cont]=="o" && frase[cont+1]=="b" && frase[cont+2]=="e" && frase[cont+3]=="r"){
            nuevaFrase+="o";
            cont+=4;
        }
        if(frase[cont]=="u" && frase[cont+1]=="f" && frase[cont+2]=="a" && frase[cont+3]=="t"){
            nuevaFrase+="u";
            cont+=4;
        }
        else{
            if(cont<=frase.length){
            nuevaFrase+=frase[cont];
            cont++;
            }else{
                break;
            }
        }
    }
    console.log(frase.length);
    console.log(nuevaFrase.length);
    return nuevaFrase;
}