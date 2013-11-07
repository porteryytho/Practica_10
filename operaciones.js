function suma(){
        var n1=document.getElementById("n1").value;
        var n2=document.getElementById("n2").value;

  if(n1=='' || n2 == '') { 
    alert('No puede existir un campo vacio'); 
    return false;
  }


    suma = parseInt(n1) + parseInt(n2);
        document.getElementById("res").value=suma;
        
}
function resta(){
        var n1=document.getElementById("n1").value;
        var n2=document.getElementById("n2").value;
         if(n1=='' || n2 == '') { 
    alert('No puede existir un campo vacio');
    return false;
  }
   resta=parseInt(n1) - parseInt(n2);
        document.getElementById("res").value=resta;
}
function multiplicacion(){
        var n1=document.getElementById("n1").value;
        var n2=document.getElementById("n2").value;
         if(n1=='' || n2 == '') {
    alert('No puede existir un campo vacio'); 
    return false; 
  }
         multiplicacion=parseInt(n1) * parseInt(n2);
        document.getElementById("res").value=multiplicacion;
}
function division(){
        var n1=document.getElementById("n1").value;
        var n2=document.getElementById("n2").value;
         if(n1=='' || n2 == '') { 
    alert('No puede existir un campo vacio'); 
  }else{
          if (n2=='0') {
alert('No puede dividir entre cero');

          }

        
  }
   division=parseInt(n1)/ parseInt(n2);
        document.getElementById("res").value=division;
}
function carga(){
        document.getElementById("btnsuma").onclick=suma;
        document.getElementById("btnresta").onclick=resta;
        document.getElementById("btndiv").onclick=division;
        document.getElementById("btnmul").onclick=multiplicacion;
}
function Solo_Numerico(n2){
        Numer=parseInt(n2);
        if (isNaN(Numer)){
            return "";
        }
        return Numer;
    }
    function ValNumero(Control){
        Control.value=Solo_Numerico(Control.value);
    }
    
window.onload=carga;