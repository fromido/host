
 /* Libreria de Funciones Java Script */

/*Funcion que quita los ceros de la izquierda que se le pasan por parametro*/
function a_entero(nume) {
	 longi=nume.length;
	 i=0;
	 while (i<longi) {
       	if (nume.charAt(0)=="0") {
	nume=nume.substring(1);
	}else {
	return nume;}
	i++;
           }
	return 0;
	}


 /* Función que comprueba la correción ortográfica de un emilio */

function comprueba_email(email) {

   if (email=="") return true;
	
   if ((index=email.indexOf("@"))<1) return false;
   
   if (email.indexOf(".",index)==-1) return false;

   return true;

}

function vacio(idioma,objeto) {
        if (objeto.value==""){
           if (idioma=="C")
             alert("Campo obligatorio.\nIntroduzca valor.");
           else if (idioma=="V")
             alert("Campo obligatori.\nIntroduïsca valor.");
           else if (idioma=="I")
             alert("Obligatory field.\nIntroduce value.");

           objeto.focus();
           objeto.select();
           return true;
          }
        else {if (objeto.value!=null) {
            for (var i=0 ; i<objeto.value.length; i++){
            if (objeto.value.charAt(i)!= " ")
                return false;
            } /*for*/
	   if (idioma=="C")
             alert("Campo obligatorio.\nIntroduzca valor.");
	   else if (idioma=="V")
             alert("Campo obligatori.\nIntroduïsca valor.");
	   else if (idioma=="I")
             alert("Obligatory field.\nIntroduce value.");

           objeto.focus();
           objeto.select();
           return true;
            }/*if*/
           return false;
          }
        }
 
function vacio_sin_alert(objeto) {
        if (objeto.value==""){
           return true;
          }
        else {if (objeto.value!=null) {
            for (var i=0 ; i<objeto.value.length; i++){
            if (objeto.value.charAt(i)!= " ")
                return false;
            } /*for*/
           return true;
            }/*if*/
           return false;
          }
        }
 

 
/* Funcion comprueba que todos los campos de un formulario no esten vacios */

function any_empty(forms) {
       for(var i=0; i<forms.elements.length; i++) {
          if (vacio("C",forms.elements[i])) {
             forms.elements[i].focus();
             forms.elements[i].select();
             return false;
             }/*if*/       
          }
        return true;
	}



/* Funcion  comprueba que un campo sea numerico */

function checkNumber(idioma,text) {

        var str=text.value;
	for (var i=0; i<str.length; i++) {
	     var ch = str.substring(i, i + 1);
             if (ch < "0" || ch > "9") {
   	            if (idioma=="C")
		      alert("Valor numérico introducido\nincorrecto.");
   	            else if (idioma=="V")
		      alert("El valor numèric introduït \nno és correcte.");
   	            else if (idioma=="I")
		      alert("Incorrect introduced \nnumerical value.");
                    text.focus();
                    text.select(); 
                    return false;
		}
	}
        return true;
	}
 
/* Comprueba que el valor introducido coincida con un mes del año */

function checkMes(text) {

	var error = 0;       
	var str=text.value;
	if (str.length == 2){
	   if (str.substring(0,1) == "1")
	   {
	     if (str.substring(1,2) < "0" || str.substring(1,2) > "2")
	     {
		error = 1;
             }
           }
           else
	   {
	      error = 1;
           }
        }
        else
	{
	   if (str < "1" || str > "9") {
	      error = 1;
           }
        }
	if (error == 1)
	{
	   return false;
        }
        return true;
}

 


/* Funcion comprueba que un campo tenga formato fecha:DD/MM/AAAA  Version 2 */

function checkDate(idioma,text) {
         var str=text.value;
         var cad;
         var error=0;
	 var dia;
	 var mes;	
         
	if (str.length<10) {error=1}
         else {
            for (i=0;i<str.length;i++) {
                 if ((i!=2) && (i!=5)) {
                    cad=str.charAt(i);
                    if ((cad<"0") || (cad>"9"))
                         error=1;
                 }/*if*/
              } /*for*/

             if (error==0) { 

		//Para solucionar el problema de IE4 con eval(0N)
                if (str.substring(0,1)=="0")
  		   cad=str.substring(1,2);
		else
                   cad=str.substring(0,2);

		//Coprobación de la integridad del día                
		if ((eval(cad)>31) || (eval(cad)<1)){
			 error=1; }
		dia=cad;		
		
		//Comprobación de los separadores de día
                if (str.charAt(2)!='/') error=1;

		//Para solucionar el problema de IE4 con eval(0N)
		if (str.substring(3,4)=="0")
		   cad = str.substring(4,5);
		else
                   cad=str.substring(3,5);
		
		//Comprobación de la integridad del mes
                if ((eval(cad)>12) || (eval(cad)<1)) error=1;
		mes=cad;

		//Comprobación de la integridad del día en función del mes
		if ((eval(mes)==4 && eval(dia)>30) || (eval(mes)==6 && eval(dia)>30) || (eval(mes)==9 && eval(dia)>30) || (eval(mes)==11 && eval(dia)>30)) error=1;
		if (eval(mes)==2 && eval(dia)>29) error=1;

		//Comprobación de los separadores de mes
                if (str.charAt(5)!='/') error=1;
		
		//Comprobación de la integridad del año
                cad=str.substring(6,10);
                if ((eval(cad)>2100) || (eval(cad)<1900)) error=1;
                }/*if*/
             }
         if (error == 1) {
             if (idioma=="C")
               alert("Formato fecha incorrecta\n    (DD/MM/AAAA)");        
             else if (idioma=="V")
               alert("El format de la data no és correcte \n    (DD/MM/AAAA)");        
             else if (idioma=="I")
               alert("Format dates incorrect  \n  (DD/MM/YYYY)");        
             text.focus();
             text.select();
             return false;
             }
         else return true;}
 
 
/* Funcion comprueba que se ha seleccionado al menos una de las casillas de verificación de un formulario */

function verifyCheck(objform) {

     for (var i=0; i<objform.elements.length; i++) {
          if (objform.elements[i].checked) {
              objform.submit();
              return true;
              }/*if*/
           }/*for*/
     return false;
   }


/* Funcion comprueba que se ha seleccionado al menos una de las casillas de verificación de un formulario */

function verifyCheck_num(objform,num) {

     for (var i=num; i<objform.elements.length; i++) {
          if (objform.elements[i].checked) {
              objform.submit();
              return true;
              }/*if*/
           }/*for*/
     return false;
   }


 
/* Funcion que comprueba que el contenido de un campo de texto sea un número mayor que cero. */

function gtzero(idioma,text) {
  if (checkNumber(idioma,text)) {
    if (eval(text.value)==0) {
      alert("El valor númerico introducido\ndebe ser mayor de cero");        
      text.focus();
      text.select();
      return false;
    }/*if*/
    return true;
  }/*if*/
  return false;
}

 

function checkano(idioma,text) {

var str=text.value;
 if (str.length == 4)
   {
     if (!(checkNumber(text)))
      {
       return false;
      }
     if ((eval(text.value)<1996) || (eval(text.value)>2025))
      {
        if (idioma=="C")
	  alert("Año debe estar entre 1996 y 2025");
        else if (idioma=="V")
	  alert("Any ha d'estar entre 1996 i 2025");
        else if (idioma=="I")
	  alert("Year must be between 1996 and 2025");
        text.focus();
        text.select();
        return false;
      }
   }
 else
   {
       if (idioma=="C")
         alert("Campo de cuatro caracteres");
       else if (idioma=="V")
         alert("Campo de quatre caràcters");
       else if (idioma=="I")
         alert("Field of four characters");
       text.focus();
       text.select();
       return false;
  };
  return true;
}

 


/* Función que comrpueba que la fecha se haya introducido con formato MM/YYYY */

function checkDate2(idioma,text) {
     var str=text.value;
     var cad;
     var error=0;
     if (str.length<7) {error=1}
     else {
	  for (i=0;i<str.length;i++) {
	      if (i!=2) {
	       cad=str.charAt(i);
	       if ((cad<"0") || (cad>"9"))
	          error=1;
	      }/*if*/
	  } /*for*/
 	  if (error==0) {
   	     cad=str.substring(0,2);
  	     if ((eval(cad)>12) || (eval(cad)<1)) error=1;
  	     if (str.charAt(2)!='/') error=1;
  	     cad=str.substring(3,7);
    	     if ((eval(cad)>2100) || (eval(cad)<1900)) error=1;
	  }/*if*/
    }
    if (error == 1){ 
      if (idioma=="C")
        alert("Formato fecha incorrecta\n    (MM/AAAA)");
      else if (idioma=="V")
        alert("El format de la data no és correcte \n    (MM/AAAA)");
      else if (idioma=="I")
        alert("Format dates incorrect \n (MM/YYYY)");
      text.focus();
      text.select();
      return false;
    }
    else return true;
 }

 
function lsDate(text1,text2) {
         var str1=text1.value;
         var str2=text2.value;
         var cad1,cad2;
         var error=0;
         
         cad1 = str1.substring(6,10)
         cad2 = str2.substring(6,10);
         
         if (eval(cad1) > eval(cad2))
         {
            error = 1;
         }
         else 
         { 
           if (eval(cad1) == eval(cad2))
           {
               cad1 = str1.substring(3,5);
               cad2 = str2.substring(3,5);
               if (eval(cad1) > eval(cad2))
               {
                  error = 1;
               }
               else
               {
                   if (eval(cad1) == eval(cad2))
                   {
                     cad1 = str1.substring(0,2);
                     cad2 = str2.substring(0,2);
                     if (eval(cad1) > eval(cad2))
                     {
                         error = 1;
                     }
                   }
              }
           }
         } 
         if (error == 1) return false;
         else return true;
        }



/* Funcion comprueba que un campo tenga formato dirección IP:NNN.NNN.NNN.NNN */

function checkIP(idioma,text) 
{

  var str=text.value;
  var cad;
  var error=0;
  var pos1=-1;
  var pos2=-1;
  var pos3=-1;
  var pos4=-1;
  
  for (i=0; i<str.length; i++)
  {
    if (str.charAt(i)==".")
	{
	   if (pos1==-1) pos1 = i;
	   else if (pos2==-1) pos2 = i;
	   else if (pos3==-1) pos3 = i;
	   else if (pos4==-1) pos4 = i;
	}
	else if ((str.charAt(i)<"0") || (str.charAt(i)>"9")) error=1; 
  }
  if (pos3==-1)  error=1;
  if (pos4>0) error = 1;
  if (error==0)
  {
     if (!dominioCorrecto(str.substring(0,pos1))) error=1;
     if (!dominioCorrecto(str.substring(pos1+1,pos2))) error=1;
     if (!dominioCorrecto(str.substring(pos2+1,pos3))) error=1;
     if (!dominioCorrecto(str.substring(pos3+1))) error=1;
	 
  }
  if (error == 1) 
  {
       if (idioma=="C")
          alert("Formato dirección IP incorrecta\n    (NNN.NNN.NNN.NNN)");
       else if (idioma=="V")
          alert("El format de l'adreça IP  no és correcte\n    (NNN.NNN.NNN.NNN)");
       else if (idioma=="I")
          alert("The format of direction IP is incorrect \n  (NNN.NNN.NNN.NNN)");

       text.focus();
       text.select();
       return false;
  }
  else return true;
}


function dominioCorrecto(cad)
{
    if (cad.length<=0 || cad.length>=4) return(false);
    if ((eval(cad)>255) || (eval(cad)<0)) return(false);
	else return(true);
}

function checkPan(pan)
{
   var cad = pan.value;
   if (!checkNumber('C',pan)) return(false);   

   if (cad.length<16) 
   {
     alert('El nmero de PAN debe tener 16 dgitos');
     pan.focus();
     return(false);
   }
   if (cad.substring(0,6)!='479261' &&
       cad.substring(0,6)!='445917' && cad.substring(0,6)!='636171' && cad.substring(0,6)!='404367')
   {
        alert('El nmero de PAN es incorrecto');
        pan.focus();
        return(false);
   }
   return true;
}  


function checkHour(hora)
{
   var cad = hora.value;
   var bien = true;

   if (cad.length!=5) bien = false;

   if (cad.substring(2,3)!=':') bien = false;

   if (eval(cad.substring(0,2))<0 || eval(cad.substring(0,2))>23) bien=false;
   if (eval(cad.substring(3,5))<0 || eval(cad.substring(3,5))>59) bien=false;
   
   if (!bien)
   {
     alert('Formato de hora debe ser HH:MI');
     hora.focus();
     return(false);
   }
   return (true);

}  


