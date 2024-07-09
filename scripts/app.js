
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
    document.getElementById('copiar').removeAttribute('hidden');
    document.getElementById('error').style.visibility = 'hidden';
    document.getElementById('error1').style.visibility = 'hidden';
    document.getElementById('error2').style.visibility = 'hidden';
}
function desencriptar(params) {
    var texto = ""+document.getElementById('textoAProcesar').value;
    var respuesta = "";
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
    document.getElementById('textoResultado').innerHTML=respuesta;
    document.getElementById('copiar').removeAttribute('hidden');
    document.getElementById('error').style.visibility = 'hidden';
    document.getElementById('error1').style.visibility = 'hidden';
    document.getElementById('error2').style.visibility = 'hidden';
}
function copiar(){
    var text = document.getElementById('textoResultado').value;
    navigator.clipboard.writeText(text);
    alert("Mensaje copiado con exito!");
}