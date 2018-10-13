
//3.377176, -73.495287


config = {
  apiKey: "AIzaSyDOfLv_05Bt6C2JRnD3UhfH7c2LrY6NfbE",
  authDomain: "porbarfirebase.firebaseapp.com",
  databaseURL: "https://porbarfirebase.firebaseio.com",
  projectId: "porbarfirebase",
  storageBucket: "porbarfirebase.appspot.com",
  messagingSenderId: "393018993566"
};
firebase.initializeApp(config);



var general;

var nodeusersit="usertsit";

traerdef(nodeusersit);

var nodousuario="";




function traerdef(stnode){ 
firebase.database().ref().child(String(stnode)).
once('value').then(function(snapshot) {
  var username = (snapshot.val() && snapshot.val().username) 
  || 'Anonymous';  general=snapshot.val();//generalkey=snapshot.key;
  console.log(general);
});

}






//4.646993, -74.153212
var varemail="";
var varpass="";
var miname="";
var varcarlat=0;
var varcarlng=0;

var lemail="";
var lpass="";

//setTimeout(login, 2000);
function getidvalor(stl){
return document.getElementById(String(stl)).value;

}

function escribep(latcar,lngcar){
  var d = new Date();
document.getElementById("idp").innerHTML = "lat car: "+latcar +" "+" lng car: "+lngcar +" Colombia "+d ;

}


var idrepetir=0;
function login(){
//ahorasi(st1,st2,st3);

//setTimeout(hacermarcas, 2000);
traerdef(nodeusersit);

lemail=getidvalor("idemail");
lpass=getidvalor("idpass");
alert(lemail+"  "+lpass);
console.log("general "+general);
for(var i in general){
  if(general[i].keymi==lemail&&general[i].pass==lpass){
 //   ahorasi(nodeusersit,general[i].keymi,"buscar");
    nodousuario=general[i].keymi;

setTimeout(logeado(), 1000);
}
  else{
      //alert("pas o email erroneo");
  }
}


}


function activar(){

  //ahorasi(st1,st2,st3);

//setTimeout(hacermarcas, 2000);
traerdef(nodeusersit);
lemail=getidvalor("idemail");
lpass=getidvalor("idpass");
for(var i in general){
  if(general[i].keymi==lemail&&general[i].pass==lpass){
    ahorasi(nodeusersit,general[i].keymi,"buscar");
    nodousuario=general[i].keymi;
alert("buscando");
setTimeout(reload, 2000);
}
  else{
      //alert("pas o email erroneo");
  }
}

}



function inicio(){
alert("buscando");

 ahorasi(nodeusersit,nodousuario,"buscar");
   
setTimeout(reload, 2000);

 
}





function logeado(){
traerdef(nodeusersit);

varcarlat=parseFloat(general[nodousuario].lat);
varcarlng=parseFloat(general[nodousuario].lng);

document.getElementById("idlog").style.display = "none";
document.getElementById("map").style.display = "flex";
document.getElementById("dividp").style.display = "flex";

document.getElementById("idp").style.display = "flex";

document.getElementById("idbtrefres").style.display = "flex";

//varcarlat=4.646993;
//varcarlng=-74.153212;

setTimeout(llamamapa,1000);
escribep(varcarlat,varcarlng);


}


function llamamapa(){
traerdef(nodeusersit);
varcarlat=parseFloat(general[nodousuario].lat);
varcarlng=parseFloat(general[nodousuario].lng);
simapa=true;
initMap(varcarlat,varcarlng);
escribep(varcarlat,varcarlng);
//mimapa(varcarlng,varcarlat);
}

var simapa=false;







function mimapa(lg,lt){



   var map;
  var milat=lt;//4.052760;
  var milng=lg;//-75.997735;
  var miponilatlng=[milng,milat];
    require([
      "esri/map", "esri/geometry/Circle", "esri/symbols/SimpleFillSymbol", 
      "esri/graphic", "esri/layers/GraphicsLayer",
      "dojo/dom", "dojo/dom-attr", "dojo/domReady!"
    ], function(
      Map, Circle, SimpleFillSymbol, 
      Graphic, GraphicsLayer, 
      dom, domAttr
    ) {
      map = new Map("map", {
        basemap: "streets",
        center: miponilatlng,
        slider: false,
        zoom:17
      });//[-75.997735,4.052760]
      var symbol = new SimpleFillSymbol().setColor(null).outline.setColor("blue");
      var gl = new GraphicsLayer({ id: "circles" });
      var geodesic = dom.byId("geodesic");
      map.addLayer(gl);
      map.on("click", function(e) {
        /*var radius = 60;
        var circle = new Circle({
          center: [-74.1542703,4.6474866],
          geodesic: domAttr.get(geodesic, "checked"),
          radius: radius
        });
        var graphic = new Graphic(circle, symbol);
        gl.add(graphic);*/
      });
    function hacermarcas (){
var radius = 60;
        var circle = new Circle({
          center: miponilatlng,
          geodesic: domAttr.get(geodesic, "checked"),
          radius: radius
        });
        var graphic = new Graphic(circle, symbol);
        gl.add(graphic);


    }//hacermarcas ();
    setTimeout(hacermarcas, 2000); });


  
}


function  ahorasi(st1,st2,st3){
firebase.database().ref().child(String(st1)).child(String(st2)).child(String(st3)).set(String(Math.random())+String(Math.random()));


}

function reload(){


location.reload();
}






function initMap(slt,sln) {
  var uluru = {lat: slt, lng: sln};//{lat: 4.657883333333333, lng: -74.06214833333334};
 map = new google.maps.Map(document.getElementById('map'), {
    zoom:11,
    center: uluru,
    styles:[

{
  "featureType": "landscape.natural",
  "elementType": "geometry.fill",
  "stylers": [
      {
          "visibility": "on"
      },
      {
          "color": "#e0efef"
      }
  ]
},
{
  "featureType": "poi",
  "elementType": "geometry.fill",
  "stylers": [
      {
          "visibility": "on"
      },
      {
          "color": "#c0e8e8"
      }
  ]
},
{
  "featureType": "poi",
  "elementType": "labels",
  "stylers": [
      {
          "visibility": "on"
      }
  ]
},
{
  "featureType": "poi",
  "elementType": "labels.icon",
  "stylers": [
      {
          "visibility": "on"
      }
  ]
},
{
  "featureType": "poi.business",
  "elementType": "labels.icon",
  "stylers": [
      {
          "visibility": "off"
      }
  ]
},
{
  "featureType": "poi.medical",
  "elementType": "labels.icon",
  "stylers": [
      {
          "visibility": "on"
      }
  ]
},
{
  "featureType": "poi.place_of_worship",
  "elementType": "labels.icon",
  "stylers": [
      {
          "visibility": "off"
      }
  ]
},
{
  "featureType": "poi.school",
  "elementType": "labels.icon",
  "stylers": [
      {
          "visibility": "off"
      }
  ]
},
{
  "featureType": "poi.sports_complex",
  "elementType": "labels.icon",
  "stylers": [
      {
          "visibility": "off"
      }
  ]
},
{
  "featureType": "road",
  "elementType": "geometry",
  "stylers": [
      {
          "lightness": 100
      },
      {
          "visibility": "simplified"
      }
  ]
},
{
  "featureType": "road",
  "elementType": "labels",
  "stylers": [
      {
          "visibility": "on"
      }
  ]
},
{
  "featureType": "road.arterial",
  "elementType": "labels",
  "stylers": [
      {
          "visibility": "on"
      }
  ]
},
{
  "featureType": "road.arterial",
  "elementType": "labels.text",
  "stylers": [
      {
          "visibility": "on"
      }
  ]
},
{
  "featureType": "road.arterial",
  "elementType": "labels.icon",
  "stylers": [
      {
          "visibility": "off"
      }
  ]
},
{
  "featureType": "road.local",
  "elementType": "labels",
  "stylers": [
      {
          "visibility": "on"
      }
  ]
},
{
  "featureType": "road.local",
  "elementType": "labels.text",
  "stylers": [
      {
          "visibility": "on"
      }
  ]
},
{
  "featureType": "road.local",
  "elementType": "labels.icon",
  "stylers": [
      {
          "visibility": "off"
      }
  ]
},
{
  "featureType": "transit.line",
  "elementType": "geometry",
  "stylers": [
      {
          "visibility": "on"
      },
      {
          "lightness": 700
      }
  ]
},
{
  "featureType": "transit.station.bus",
  "elementType": "labels.icon",
  "stylers": [
      {
          "visibility": "off"
      }
  ]
},
{
  "featureType": "water",
  "elementType": "all",
  "stylers": [
      {
          "color": "#7dcdcd"
      }
  ]
},
{
  "featureType": "water",
  "elementType": "geometry.fill",
  "stylers": [
      {
          "color": "#44b8db"
      }
  ]
}

    ]
  });/*
  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
     title: 'Hello World!',
      draggable: true
  });*/
//arraymarkes.push();
var image="https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/32/Map-Marker-Marker-Inside-Chartreuse.png";

if(simapa){
    var marker = new google.maps.Marker({
      position:{lat:slt, lng:sln},
    //  icon: icons[feature.type].icon,
      map: map,
      title:"mi carro",
      name:"minombre",

      icon: image,

         animation: google.maps.Animation.DROP
    });





marker.addListener('click', function(e) {
map.setZoom(16);
map.setCenter(this.getPosition());



});


}









}