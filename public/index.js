
 //variables
 var BotonInicio;
 var SecPrin;
 var carga;
 var doc;
 var datos = {};

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

  datosCargaJuri(datos.juridico);

  $("html, body").scrollTop(0);

}

function parteCarros(){

  SecPrin.hide();
  carga.show();
  carga.empty();
  carga.html("Cargando...");
  
  icono = "ion-android-car";
  datosCarga(datos.carros);

  $("html, body").scrollTop(0);
}

function parteTransportes(){

  SecPrin.hide();
  carga.show();
  carga.empty();
  carga.html("Cargando...");
  
  icono = "ion-android-bus";
  datosCarga(datos.transporte);

  $("html, body").scrollTop(0);

}

function parteMedico(){

  SecPrin.hide();
  carga.show();
  carga.empty();
  carga.html("Cargando...");
  
  icono = "ion-medkit";
  datosCarga(datos.medico);

  $("html, body").scrollTop(0);

}

function parteVarios(){

  SecPrin.hide();
  carga.show();
  carga.empty();
  carga.html("Cargando...");
  
  icono = "ion-wrench";
  datosCarga(datos.varios);

  $("html, body").scrollTop(0);

}

function partePsico(){

  SecPrin.hide();
  carga.show();
  carga.empty();
  carga.html("Cargando...");
  
  icono = "ion-compose";
  datosCarga(datos.psicologo);

  $("html, body").scrollTop(0);

}

//ion-ios-paw
function parteVete(){

  SecPrin.hide();
  carga.show();
  carga.empty();
  carga.html("Cargando...");
  
  icono = "ion-ios-paw";
  datosCarga(datos.veterinario);

  $("html, body").scrollTop(0);

}

function parteEduca(){

  SecPrin.hide();
  carga.show();
  carga.empty();
  carga.html("Cargando...");
  
  icono = "ion-edit";
  datosCarga(datos.educacion);

  $("html, body").scrollTop(0);

}

function parteAlim(){

  SecPrin.hide();
  carga.show();
  carga.empty();
  carga.html("Cargando...");
  
  icono = "ion-android-restaurant";
  datosCarga(datos.alimentos);

  $("html, body").scrollTop(0);
}


function datosCarga(data){

    doc.empty();
    doc.append(datosListaGen(data));
    //console.log(datosLista(arr));
    doc.show();
    doc.addClass('animated fadeIn');
    carga.hide();

    //console.log(datos);
}


function datosCargaJuri(data){

    //console.log(data);

    doc.empty();
    doc.append(datosLista(data));
    //console.log(datosLista(arr));
    doc.show();
    doc.addClass('animated fadeIn');
    carga.hide();
    //console.log(datos);
}



function datosLista(data){

  var ret="";

  $(data).each(function(index){

    var base = 
    "<div class='row justify-content-center informacionMarco'>"+
    "<div class='col-sm-5'> "+
    "<div class='imagen'> "+
    "<span class='ion-person-stalker'></span> "+
    "</div> "+
    "</div> "+
    "<div class='col-sm-5'> "+
    "<div class='texto'> "+
    "<h4>"+data[index][0]+"</h4> "+
    "<p>"+data[index][1]+" , "+ data[index][2] +" , "+ data[index][3] +"</p> "+
    "<div class='infoCon'> "+
    "<p>"+data[index][4] +" , "+ data[index][5]+"</p> "+
    "<p>"+data[index][6]+"</p> "+
    "</div> "+
    "</div> "+
    "</div> "+
    "<div class='separador'></div> "+
    "</div>";

    ret += base;

  });


  return ret;

}

function datosListaGen(data){

  var ret="";

  $(data).each(function(index){

    var base = 
    "<div class='row justify-content-center informacionMarco'>"+
    "<div class='col-sm-5'> "+
    "<div class='imagen'> "+
    "<span class='"+icono+"'></span> "+
    "</div> "+
    "</div> "+
    "<div class='col-sm-5'> "+
    "<div class='texto'> "+
    "<h4>"+data[index][0]+"</h4> "+
    "<p> Servicio: "+data[index][1]+" , "+ data[index][3] +" , "+ data[index][4] + " , "+ data[index][5] +"</p> "+
    "<div class='infoCon'> "+
    "<p> Contacto: "+data[index][2] +"</p> "+
    "</div> "+
    "</div> "+
    "</div> "+
    "<div class='separador'></div> "+
    "</div>";

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

    //arr.push('<p>'+entry[index].title.$t+'</p>' + '<p>'+res[1]+'</p>');
    var arrTem = [entry[index].title.$t, res[0], res[1], res[2], res[3], res[4], res[5]];
    arr.push(arrTem);

  });


  //$('.results').append(arr);

  }).done(function( json ) {

    //doc.empty();
    //doc.append(datosLista(arr));
    //console.log(datosLista(arr));
    //doc.show();
    //carga.hide();
    datos.juridico = arr;
    carga.hide();

    //console.log(datos);
  });

}



function datosGeneral(){

 var spreadsheetID = "1a-rZqtPUvHn-73sZEb7Epn4R9ouTiMfjPOysB-4hLYA";
 var arr=[];

 
 var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/6/public/values?alt=json";//"/od6/public/values?alt=json";

 $.getJSON(url, function(data) {

  var entry = data.feed.entry;


  $(entry).each(function(index){

    var tempo = entry[index].content.$t;
    var res = tempo.split(",");

    var resTem = res[1].split(":");
    var resTem2 = res[0].split(":");

    //arr.push('<p>'+entry[index].title.$t+'</p>' + '<p>'+res[1]+'</p>');
    var arrTem = [entry[index].title.$t, resTem2[1], resTem[1], res[2], res[3], res[4]];
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