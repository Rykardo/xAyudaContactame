
 //variables
 var BotonInicio;
 var SecPrin;
 var carga;
 var doc;
 var datos = {};

 var datosGen = [];
 var datosGenBusca = [];

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


function partePsico(){

  SecPrin.hide();
  carga.show();
  carga.empty();
  carga.html("Cargando...");
  
  icono = "ion-heart";
  datosCarga(datos.emocional, null);

  $("html, body").scrollTop(0);

}


function parteJuridico(){

  SecPrin.hide();
  carga.show();
  carga.empty();
  carga.html("Cargando...");
  //datosJuridico();

  datosCarga(datos.legal, null);

  $("html, body").scrollTop(0);

}

function parteDormir(){

  SecPrin.hide();
  carga.show();
  carga.empty();
  carga.html("Cargando...");
  
  icono = "ion-coffee";
  datosCarga(datos.refugio, null);

  $("html, body").scrollTop(0);

}


function parteVarios(){

  SecPrin.hide();
  carga.show();
  carga.empty();
  carga.html("Cargando...");
  
  icono = "ion-wrench";
  datosCarga(datos.material, null);

  $("html, body").scrollTop(0);

}


function parteTransportes(){

  SecPrin.hide();
  carga.show();
  carga.empty();
  carga.html("Cargando...");
  
  icono = "ion-android-bus";
  datosCarga(datos.transporte, null);

  $("html, body").scrollTop(0);

}



function parteOtros(){

  SecPrin.hide();
  carga.show();
  carga.empty();
  carga.html("Cargando...");
  
  icono = "ion-star";
  datosCarga(datos.otro, null);

  $("html, body").scrollTop(0);

}







function datosCarga(data, data2){


  doc.empty();
  
  doc.append(datosListaGen(data));
  if (data2 != null){
  doc.append(datosListaGen(data2));
  }
  //console.log(datosLista(arr));
  doc.show();
  doc.addClass('animated fadeIn');
  carga.hide();

    
  }




  function datosListaGen(data){

    var ret="";

    $(data).each(function(index){

      var base = 
    "<div class='col-md-4 justify-content-center informacionMarco'> " + 
    "<div class='portlet'> " + 
    "<div class='texto text-left padded'> " + 
    "<h4 class='name'> " + data[index][0] + "</h4> " + 
    "<p class='servicios'> " + data[index][2] +"</p> " + 
    "<div class='list'> " + 
        "<p> " + "<i class='ion-ios-location blue'>" + "</i> " + data[index][3] + "</p> " + 
        "<div class='infoCon'> " + 
        "<i class='ion-ios-telephone blue'> " + "</i> " + "<p>" + data[index][1] + "</p> " + 
        "</div> " + 
    "</div> " + 
    "</div> " + 
    "</div> " + 
    "</div> ";

      ret += base;

    });



    return ret;

  }




function datosGeneral(){

 var spreadsheetID = "1MrGFsumatYrrV5Iil1lYWpFwLr6CxzMD5GRullLJMpU";
 var arr=[];

 
 var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/1/public/values?alt=json";//"/od6/public/values?alt=json";

 $.getJSON(url, function(data) {

  var entry = data.feed.entry;


  $(entry).each(function(index){

  
    var ar = entry[index].content.$t;

    
    var res=[];

    var tex = [];
    tex[0] = 'nombre: ';
    tex[1] = ', contacto: ';
    tex[2] = ', ofrece: ';
    tex[3] = ', estado: ';
    
    

    //llenado de datos en arreglo sepando por los campos
    for (var i=0; i <= 2; i++){

      var numero = ar.indexOf(tex[i]);
      var numero2 = ar.indexOf(tex[i+1]);
      if ( numero >= 0 ){

        if (numero2 >= 0){
          res.push(ar.substring(numero+tex[i].length, numero2));  
        }
        else{

          res.push(ar.substring(numero+tex[i].length, ar.length));  
        }
      }
      else{

        res.push("");
      }
    }

    
    var numero = ar.indexOf(tex[3]);
    var numero2 = ar.length;
    if ( numero >= 0){

      //seapar el nombre de la columna
      var ultimo = ar.substring(numero+tex[3].length, numero2);
      var s1 = ultimo.replace("ciudad: ", "");
      var s2 = s1.replace("municipio: ", "");
      var s3 = s2.replace("otrosdatos: ", "");

      res.push(s3); 
    }
    else{

      res.push("");
    }



    arr.push(res);


  });

  //console.log(arr);  


}).done(function( json ) {


    datosGen = arr;
    datos = datosxCategoria(arr);

    carga.hide();
    

  });

}




function datosxCategoria(data){

  var arrApoyo = [];
  var arrLegal = [];
  var arrDormir = [];
  var arrMate = [];
  var arrTrans = [];
  var arrOtros = [];

  for (el in data){

    var arr2 = data[el][2].toLowerCase();

    //console.log(arr2);
    //console.log(arr2.indexOf(" maqui"));

    if (arr2.indexOf("psicolo") >= 0 || arr2.indexOf("psico") >= 0 || arr2.indexOf("terap") >= 0 || arr2.indexOf("acompa") >= 0 || arr2.indexOf("jugue") >= 0 || arr2.indexOf("emo") >= 0){

      arrApoyo.push(data[el]);
      var Ind = data[el];
      Ind.push("apoyo emocional");
      datosGenBusca.push(Ind);
    }
    else
    //higi , insu , medi , para
    if (arr2.indexOf("lega") >= 0 || arr2.indexOf("juri") >= 0  || arr2.indexOf("pena") >= 0 || arr2.indexOf("segur") >= 0){

      arrLegal.push(data[el]);
      var Ind = data[el];
      Ind.push("asistencia legal");
      datosGenBusca.push(Ind);
    }
    
    else

    if (arr2.indexOf("refu") >= 0 || arr2.indexOf("dormir") >= 0){

      arrDormir.push(data[el]);
      var Ind = data[el];
      Ind.push("refugio");
      datosGenBusca.push(Ind);
    }
    else

    //herr , ilum , resc , valo
    if (arr2.indexOf("limpi") >= 0 || arr2.indexOf("insu") >= 0 || arr2.indexOf("gaso") >= 0 || arr2.indexOf("ropa") >= 0 || arr2.indexOf("herra") >= 0 || arr2.indexOf("tiendas") >= 0 || arr2.indexOf("carpa") >= 0 || arr2.indexOf("cobi") >= 0 || arr2.indexOf("inmo") >= 0){

      arrMate.push(data[el]);
      var Ind = data[el];
      Ind.push("materiales");
      datosGenBusca.push(Ind);
    }
    else

    if (arr2.indexOf("trans") >= 0 || arr2.indexOf("vehí") >= 0){

      arrTrans.push(data[el]);
      var Ind = data[el];
      Ind.push("transporte");
      datosGenBusca.push(Ind);
    }
    else{

      arrOtros.push(data[el]);
      var Ind = data[el];
      Ind.push("otros");
      datosGenBusca.push(Ind);

    }

  }


   return {

     emocional : arrApoyo,
     legal : arrLegal, 
     refugio: arrDormir, 
     material: arrMate, 
     transporte: arrTrans, 
     otro: arrOtros

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
  //console.log(arreglo);

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
  var arr = datosGenBusca;


  var flag = true;
  if (cad1 == '' || cad2 == ''){
    flag = false;
    cad2 = "marcaparadescartarcadenavaciaenbusqueda+-´+{}{}{}||¬¬°°";
  }


  for (el in arr){

  var ele1 = arr[el][4].toLowerCase();
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