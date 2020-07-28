function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}   

function face(badbunny){
if(badbunny!="bien"){
return "sad.png";
}else{ return "happy.png"; }
}

function doit() {
   
    var alimento = getParameterByName('alimento');
document.getElementById("test1").innerHTML = alimento;
var calorias = getParameterByName('calorias');
document.getElementById("test2").innerHTML = calorias;
var grasa = getParameterByName('grasa');
document.getElementById("test3").innerHTML = grasa;
var proteina = getParameterByName('proteina');
document.getElementById("test4").innerHTML = proteina;
var carbo = getParameterByName('carbo');
document.getElementById("test5").innerHTML = carbo;
imge();
}
function alertr() {
    alert("solo puede editar una a la vez");}

    function imge() {

        if (getParameterByName("ok")=="0"){
            document.getElementById("cara").innerHTML = '<img src="happy.png" width="60" height="60">'; 
        } else {
            document.getElementById("cara").innerHTML = '<img src="sad.png" width="60" height="60">'; 
        }
    }