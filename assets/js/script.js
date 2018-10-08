function valide (){
  var fisrt = document.getElementById('first').value;
  var second = document.getElementById('second').value;
  var result = parseInt (first) * (second);

  if (isNaN(result)){
    alert ('veuiller entrer des nombres');
  }else{
    alert ('le resultat et : ' + result);
  }
}
