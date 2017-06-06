function show_fun() {
    document.getElementById('link').innerHTML = "<a href='javascript:hide_fun()'>OCULTAR</a>";
     document.getElementById('A').style.display='block';
      }
      function hide_fun() {
        document.getElementById('link').innerHTML = "<a href='javascript:show_fun()'>REVELAR</a>";        
          document.getElementById('A').style.display='none';  
      }

function show_content(){
    document.getElementById('A').style.display='block';
}

function hide_content(){
    document.getElementById('A').style.display='none';
}

function sombrear(){
    var elements = document.getElementsByTagName('p');
    for (var i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = 'red';
    }
}

function buscar() {  
    var busqueda = 'sitio';  
    
    var elements = document.getElementsByTagName('p');
    for (var i = 0; i < elements.length; i++) {
    var texto = elements[i].innerHTML
    var patron = new RegExp('('+busqueda+')','gi');  
    textoNuevo = texto.replace(patron,'<span style="background:yellow">$1</span>');  
    elements[i].innerHTML = textoNuevo;  
    }

    /*var texto = document.getElementsByTagName('p').innerHTML
    var patron = new RegExp('('+busqueda+')','gi');  
    textoNuevo = texto.replace(patron,'<span style="background:yellow">$1</span>');  
    document.getElementById('A').innerHTML = textoNuevo;*/  
}; 

function salir_del_hover(){
    var busqueda = 'sitio';     
    var elements = document.getElementsByTagName('p');
    for (var i = 0; i < elements.length; i++) {
    var texto = elements[i].innerHTML
    var patron = new RegExp('('+busqueda+')','gi');  
    textoNuevo = texto.replace(patron,'<span style="background:white">$1</span>');  
    elements[i].innerHTML = textoNuevo;   
    }
}

function hacer_hover(){
    var busqueda = 'sitio';  
    var elements = document.getElementsByTagName('p');
    for (var i = 0; i < elements.length; i++) {
    var texto = elements[i].innerHTML
    var patron = new RegExp('('+busqueda+')','gi');  
    textoNuevo = texto.replace(patron,'<span style="background:yellow">$1</span>');  
    elements[i].innerHTML = textoNuevo;  
    }
    
}