
function encriptar() {
    var texto = ""+document.getElementById('textoAProcesar').value;
    var respuesta = "";
    for (let i = 0; i < texto.length; i++) {
        if (texto.substring(i,i+1) == "a"){
            respuesta = respuesta + "ai";
        }else if(texto.substring(i,i+1) == "e"){
            respuesta = respuesta + "enter";
        }else if(texto.substring(i,i+1) == "i"){
            respuesta = respuesta + "imes";
        }else if(texto.substring(i,i+1) == "o"){
            respuesta = respuesta + "ober"
        }else if(texto.substring(i,i+1) == "u"){
            respuesta = respuesta + "ufat"
        }else{
            respuesta = respuesta+texto.substring(i,i+1);
        }
    }
    document.getElementById('textoResultado').innerHTML=respuesta;
    document.getElementById('textoResultado').removeAttribute('hidden');
    document.getElementById('copiar').removeAttribute('hidden');
    document.getElementById('textoResultado').setAttribute('row',15)
    document.getElementById('error').setAttribute('hidden',true);
    document.getElementById('error1').setAttribute('hidden',true);
    document.getElementById('error2').setAttribute('hidden',true);
}
function desencriptar(params) {
    var texto = ""+document.getElementById('textoAProcesar').value;
    var respuesta = "";
    var lugarRespuesta = document.getElementById('textoResultado');
    for (let i = 0; i < texto.length; i++) {
        if (texto.substring(i,i+2) == "ai"){
            respuesta = respuesta + "a";
            i++;
        }else if(texto.substring(i,i+5) == "enter"){
            respuesta = respuesta + "e";
            i++;i++;i++;i++;
        }else if(texto.substring(i,i+4) == "imes"){
            respuesta = respuesta + "i";
            i++;i++;i++;
        }else if(texto.substring(i,i+4) == "ober"){
            respuesta = respuesta + "o"
            i++;i++;i++;
        }else if(texto.substring(i,i+4) == "ufat"){
            respuesta = respuesta + "u"
            i++;i++;i++;
        }else{
            respuesta = respuesta+texto.substring(i,i+1);
        }
    }
    lugarRespuesta.innerHTML=respuesta;
    autoResize(lugarRespuesta);
    document.getElementById('copiar').removeAttribute('hidden');
    document.getElementById('error').setAttribute('hidden',true);
    document.getElementById('error1').setAttribute('hidden',true);
    document.getElementById('error2').setAttribute('hidden',true);
}
function copiar(){
    var text = document.getElementById('textoResultado').value;
    navigator.clipboard.writeText(text);
    alert("Mensaje copiado con exito!");
}
function autoResize(element) {
    element.style.height = 'auto';
    element.style.height = element.scrollHeight + 'px';
}