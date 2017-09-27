
 //variables
 var BotonInicio;
 var SecPrin;
 var carga;
 var doc;
 var datos = {};
 var datos2 = {};

 var datosGen1 = [];
 var datosGen2 = [];
 var datosGenJuri = [];

 var todos = [];

 var icono="";

 


 $(function() {
  BotonInicio = $('#botonInicio');
  SecPrin = $('#SecInicio');
  carga = $('#cargando');
  doc = $('#informacionSec');
  carga.html("Cargando...");

  datosGeneral();
  

  $("#scroll").click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

});



 function inicio(){

  doc.hide();
  SecPrin.show();
  SecPrin.addClass('animated fadeIn');
}


function parteJuridico(){

  SecPrin.hide();
  carga.show();
  carga.empty();
  carga.html("Cargando...");
  //datosJuridico();

  datosCarga(datos.juridico, null);

  $("html, body").scrollTop(0);

}

function parteCarros(){

  SecPrin.hide();
  carga.show();
  carga.empty();
  carga.html("Cargando...");
  
  icono = "ion-android-car";
  datosCarga(datos.carros, datos2.carros);

  $("html, body").scrollTop(0);
}

function parteTransportes(){

  SecPrin.hide();
  carga.show();
  carga.empty();
  carga.html("Cargando...");
  
  icono = "ion-android-bus";
  datosCarga(datos.transporte, datos2.transporte);

  $("html, body").scrollTop(0);

}

function parteMedico(){

  SecPrin.hide();
  carga.show();
  carga.empty();
  carga.html("Cargando...");
  
  icono = "ion-medkit";
  datosCarga(datos.medico, datos2.medico);

  $("html, body").scrollTop(0);

}

function parteVarios(){

  SecPrin.hide();
  carga.show();
  carga.empty();
  carga.html("Cargando...");
  
  icono = "ion-wrench";
  datosCarga(datos.varios, datos2.varios);

  $("html, body").scrollTop(0);

}

function parteOtros(){

  SecPrin.hide();
  carga.show();
  carga.empty();
  carga.html("Cargando...");
  
  icono = "ion-star";
  datosCarga(datos2.otros, null);

  $("html, body").scrollTop(0);

}


function parteDormir(){

  SecPrin.hide();
  carga.show();
  carga.empty();
  carga.html("Cargando...");
  
  icono = "ion-coffee";
  datosCarga(datos2.dormir, null);

  $("html, body").scrollTop(0);

}

function partePsico(){

  SecPrin.hide();
  carga.show();
  carga.empty();
  carga.html("Cargando...");
  
  icono = "ion-heart";
  datosCarga(datos.psicologo, datos2.psicologo);

  $("html, body").scrollTop(0);

}

//ion-ios-paw
function parteVete(){

  SecPrin.hide();
  carga.show();
  carga.empty();
  carga.html("Cargando...");
  
  icono = "ion-ios-paw";
  datosCarga(datos.veterinario, datos2.veterinario);

  $("html, body").scrollTop(0);

}

function parteEduca(){

  SecPrin.hide();
  carga.show();
  carga.empty();
  carga.html("Cargando...");
  
  icono = "ion-edit";
  datosCarga(datos.educacion, null);

  $("html, body").scrollTop(0);

}

function parteAlim(){

  SecPrin.hide();
  carga.show();
  carga.empty();
  carga.html("Cargando...");
  
  icono = "ion-android-restaurant";
  //datosCarga(datos2.alimentos);
  //console.log(datos2.alimentos);
  datosCarga(datos.alimentos, datos2.alimentos);

  $("html, body").scrollTop(0);
}


function datosCarga(data, data2){

  doc.empty();
  if (data2 != null){
  doc.append(datosListaGen(data2));
  }
  doc.append(datosListaGen(data));
    //console.log(datosLista(arr));
    doc.show();
    doc.addClass('animated fadeIn');
    carga.hide();

    //console.log(datos);
  }




  function datosListaGen(data){

    var ret="";

    $(data).each(function(index){

      var base = 
    "<div class='col-md-4 justify-content-center informacionMarco'> " + 
    "<div class='portlet'> " + 
    "<div class='texto text-left padded'> " + 
    "<h4 class='name'> " + data[index][0] + "</h4> " + 
    "<p class='servicios'> " + data[index][1] +"</p> " + 
    "<div class='list'> " + 
        "<p> " + "<i class='ion-ios-location blue'>" + "</i> " + data[index][3] + "</p> " + 
        "<div class='infoCon'> " + 
        "<i class='ion-ios-telephone blue'> " + "</i> " + "<p>" + data[index][2] + "</p> " + 
        "</div> " + 
    "</div> " + 
    "</div> " + 
    "</div> " + 
    "</div> ";

      ret += base;

    });



    return ret;

  }

  function datosJuridico(){

   var spreadsheetID = "1idg6sGkXvnrrvKQtDxbC5SNeEcMERgNnD4wXYnwfXLY";
   var arr=[];


 var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/1/public/basic?alt=json";//"/od6/public/values?alt=json";

 $.getJSON(url, function(data) {

  var entry = data.feed.entry;


  $(entry).each(function(index){
    //$('.resultado').prepend('<h2>'+this.gsx$name.$t+'</h2><p>'+this.gsx$age.$t+'</p>');
    //$('.resultado')
    var tempo = entry[index].content.$t;
    var res = tempo.split(",");
    var lugar = res[2].split(":");
    //console.log(lugar);

    //arr.push('<p>'+entry[index].title.$t+'</p>' + '<p>'+res[1]+'</p>');
    var arrTem = [entry[index].title.$t, res[0], res[1], lugar[1], res[3], res[4], res[5]];
    arr.push(arrTem);

  });


  //$('.results').append(arr);

}).done(function( json ) {




    datax = [];

    for (el in arr){

      var d = [arr[el][0] , arr[el][1] +" "+ arr[el][2] , arr[el][4] +", "+ arr[el][5] +", "+ arr[el][6] , arr[el][3] ];
      datax.push(d);
    }
    


    //carga.hide();
    datos.juridico = datax;
    carga.hide();

    datosGenJuri = datax;


    var arrTem = datosGen1.concat(datosGen2);
    var arrT = arrTem.concat(datosGenJuri);
    todos = arrT;

    console.log(todos);

    //console.log(datos);
  });

}



function datosGeneral(){

 var spreadsheetID = "1PBSEMhWjs3ZRKEmj0rPcQbPA351zJ0z8HYx46rqbS7c";
 var arr=[];

 
 var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/1/public/values?alt=json";//"/od6/public/values?alt=json";

 $.getJSON(url, function(data) {

  var entry = data.feed.entry;


  $(entry).each(function(index){

    var tempo = entry[index].content.$t;
    var res = tempo.split(",");


    //Nombre, Categoria, Datos Contacto, Ofrece, Zona, Estatus
    //limpiar datos
    //console.log(res);

    var un = [];
    var cade="";
    for (el in res){

      if (el >= 2){
        cade += res[el] + ",";
      }
    }
    
    //var ret = "data-123".replace('data-','');
    var resTem1 = res[0].replace('informacióndediversaspersonasyempresasdispuestasaayudar:','');
    var resTem2a = res[1].replace('_cpzh4:','');
    var resTem2 = resTem2a.replace('_cre1l:','');
    var cad1 = cade.replace('_cre1l:','');
    var cad2 = cad1.replace('_chk2m:','');
    var resTem3 = cad2.replace('_ciyn3:','');
    //arr.push('<p>'+entry[index].title.$t+'</p>' + '<p>'+res[1]+'</p>');
    var arrTem = [entry[index].title.$t, resTem1, resTem2, resTem3];
    arr.push(arrTem);


  });

  //console.log(arr);  

  for (el in arr){
    var arrt = arr[el]
    for (el2 in arrt){

      if ( typeof arrt[el2] == 'undefined' ){

        arr[el][el2] = "";
      }
    }
  }
  //console.log(arr[0][0]);

}).done(function( json ) {

    //doc.empty();
    //doc.append(datosLista(arr));
    //console.log(datosLista(arr));
    //doc.show();
    //carga.hide();
    //console.log(arr);
    datos = datosxCategoria(arr);
    datosGen1 = arr;

    //segunda seccion de carga de datos
    datosGeneralRescate();
    

  });

}


function datosGeneralRescate(){

  var spreadsheetID = "1PBSEMhWjs3ZRKEmj0rPcQbPA351zJ0z8HYx46rqbS7c";
  var arr=[];


  var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/3/public/basic?alt=json";//"/1/public/basic?alt=json";//"/od6/public/values?alt=json";

    $.getJSON(url, function(data) {

    var entry = data.feed.entry;


      $(entry).each(function(index){

      var ar = entry[index].content.$t;

      //ofrezconecesito: Ofrezco, queofrece: Manos, Asistencia médica, ciudad: México , delegaciónmunicipio: Ecatepec , nombre: Jessica , contacto: https://mobile.facebook.com/jerialas?ref_component=mbasic_home_header&ref_page=%2Fwap%2Fhome.php&refid=7&ref=opera_speed_dial, colonia: Emiliano Zapata, estado: México 

      var res=[];

      var sec = ar.split("ciudad: ");
      var sec1 = sec[0].split("queofrece: ");
      var sec2 = sec[1].split(",");


      res.push(sec1[1]);
      res.push(sec2[0]);


      var tex = [];
      tex[0] = ' delegaciónmunicipio: ';
      tex[1] = ' nombre: ';
      tex[2] = ' contacto: ';
      tex[3] = ' colonia: ';
      tex[4] = ' estado: ';



      for (var i=0; i <= 3; i++){

      var numero = sec[1].indexOf(tex[i]);
      var numero2 = sec[1].indexOf(tex[i+1]);
      if ( numero >= 0 ){

        if (numero2 >= 0){
          res.push(sec[1].substring(numero+tex[i].length, numero2-1));  
        }
        else{

          res.push(sec[1].substring(numero+tex[i].length, sec[1].length));  
        }
      }
      else{

        res.push("");
      }
      }


      var numero = sec[1].indexOf(tex[4]);
      var numero2 = sec[1].length;
      if ( numero >= 0){

      res.push(sec[1].substring(numero+tex[4].length, numero2));  
      }
      else{

      res.push("");
      }


      arr.push(res);

      });


    }).done(function() {


        datax = [];

        for (el in arr){

          var d = [arr[el][3] , arr[el][0] , arr[el][4] , arr[el][1] +" "+ arr[el][2] +" "+ arr[el][5] +" "+ arr[el][6]];
          datax.push(d);
        }

        //console.log(datax);
        datos2 = datosxRescate(datax);

        datosGen2 = datax;

        datosJuridico();

    });


}


function datosxCategoria(data){

  var arrAlimentos = [];
  var arrMedico = [];
  var arrTrans = [];
  var arrPsico = [];
  var arrVete = [];
  var arrCarros = [];
  var arrEduca = [];
  var arrVarios =[];

  for (el in data){

    var arr2 = data[el][1].toLowerCase();

    //console.log(arr2);
    //console.log(arr2.indexOf(" maqui"));

    if (arr2.indexOf("come") >= 0 || arr2.indexOf("alim") >= 0){

      arrAlimentos.push(data[el]);
    }

    //higi , insu , medi , para
    if (arr2.indexOf("higi") >= 0 || arr2.indexOf("insu") >= 0  || arr2.indexOf("medi") >= 0 || arr2.indexOf("para") >= 0 || arr2.indexOf("fune") >= 0){

      arrMedico.push(data[el]);
    }

    if (arr2.indexOf("trans") >= 0){

      arrTrans.push(data[el]);
    }

    if (arr2.indexOf("psico") >= 0 ){

      arrPsico.push(data[el]);
    }

    if (arr2.indexOf("vete") >= 0){

      arrVete.push(data[el]);
    }

    if (arr2.indexOf("maqui") >= 0){

      arrCarros.push(data[el]);

    }

    if (arr2.indexOf("educ") >= 0){

      arrEduca.push(data[el]);
    }

    //herr , ilum , resc , valo
    if (arr2.indexOf("herr") >= 0 || arr2.indexOf("ilum") >= 0 || arr2.indexOf("resc") >= 0 || arr2.indexOf("valo") >= 0){

      arrVarios.push(data[el]);
    }

  }

  return { alimentos : arrAlimentos , medico : arrMedico, transporte: arrTrans, psicologo: arrPsico, veterinario: arrVete, carros: arrCarros, educacion: arrEduca, varios: arrVarios };
}



function datosxRescate(data){

  var arrAlimentos = [];
  var arrMedico = [];
  var arrTrans = [];
  var arrPsico = [];
  var arrVete = [];
  var arrCarros = [];
  var arrEduca = [];
  var arrVarios =[];
  var arrOtros = [];
  var arrDormir = [];

  for (el in data){

    var arr2 = data[el][1].toLowerCase();

    //console.log(arr2);
    //console.log(arr2.indexOf(" maqui"));

    if (arr2.indexOf("comi") >= 0 || arr2.indexOf("agua") >= 0){

      arrAlimentos.push(data[el]);
    }
    else
    //higi , insu , medi , para
    if (arr2.indexOf("cura") >= 0 || arr2.indexOf("medi") >= 0  || arr2.indexOf("asis") >= 0 || arr2.indexOf("sangre") >= 0 || arr2.indexOf("arti") >= 0 || arr2.indexOf("cubre") >= 0 || arr2.indexOf("enfer") >= 0){

      arrMedico.push(data[el]);
    }
    else

    if (arr2.indexOf("trans") >= 0){

      arrTrans.push(data[el]);
    }
    else

    if (arr2.indexOf("psicolo") >= 0 || arr2.indexOf("psico") >= 0 || arr2.indexOf("terap") >= 0 || arr2.indexOf("acompa") >= 0){

      arrPsico.push(data[el]);
    }
    else

    if (arr2.indexOf("masco") >= 0){

      arrVete.push(data[el]);
    }
    else

    if (arr2.indexOf("maqui") >= 0){

      arrCarros.push(data[el]);

    }
    else

    if (arr2.indexOf("refu") >= 0 || arr2.indexOf("dormir") >= 0){

      arrDormir.push(data[el]);
    }
    else

    //herr , ilum , resc , valo
    if (arr2.indexOf("mano") >= 0 || arr2.indexOf("volun") >= 0 || arr2.indexOf("resc") >= 0 || arr2.indexOf("evalu") >= 0){

      arrVarios.push(data[el]);
    }
    else{

      arrOtros.push(data[el]);

    }

  }


   return {
   alimentos : arrAlimentos,
   medico : arrMedico, 
   transporte: arrTrans, 
   psicologo: arrPsico, 
   veterinario: arrVete, 
   carros: arrCarros, 
   varios: arrVarios,
   dormir: arrDormir,
   otros : arrOtros
    }
}


function busca(){


  var selectedText = $("#busco").find("option:selected").text();
    
  var cad1 = selectedText;
  var cad2 = $("#ubicacion").val();

  var st1 = cad1.toLowerCase();
  var st2 = cad2.toLowerCase();

  console.log(st1 +"-->" + st2 );

  arreglo = buscar(st1, st2);
  console.log(arreglo);

  SecPrin.hide();
  carga.show();
  carga.empty();
  carga.html("Cargando...");
  //datosJuridico();

  datosCarga(arreglo.busca1, arreglo.busca2);

}

function buscar(cad1, cad2){

  var arrBusca1 = [];
  var arrBusca2 = [];



  //var arrTem = datosGen1.concat(datosGen2);
  //var arr = arrTem.concat(datosGenJuri);
  //console.log(arr);
  var arr = todos;


  var flag = true;
  if (cad1 == '' || cad2 == ''){
    flag = false;
    cad2 = "marcaparadescartarcadenavaciaenbusqueda+-´+{}{}{}||¬¬°°";
  }


  for (el in arr){

  var ele1 = arr[el][1].toLowerCase();
  var ele2 = arr[el][3].toLowerCase();

  
  
  if (flag){

    if (ele1.indexOf(cad1) >= 0 && ele2.indexOf(cad2) >= 0){

      arrBusca1.push(arr[el]);
      
    }
  }
  else{

    if (ele1.indexOf(cad1) >= 0 || ele2.indexOf(cad2) >= 0){

      arrBusca2.push(arr[el]);
      

    }
  }

  }


   return { busca1 : arrBusca1, busca2 : arrBusca2}


}