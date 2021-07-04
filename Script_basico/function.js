
function soma(a, b) {
  var result = a * b;
  return result;
}
document.write("<br />" + "Resultado da soma é  : " + soma(12, 20));
function buton() {
  //alert("obrigado por clicar")
  document.getElementById("clicou").innerHTML = "Obrigado por clicar!";

  // "clicou mesmo !";
}
//document.write(buton());
/*function butonOut(out) {
  out.innerHTML = "Obrigado por clicar!";
}*/

function redirecionar() {
  //primeira abrindo uma outra aba no navegador
  window.open("http://localhost:8080");
  /*
  // funcionar também
  window.open("index.html");
  */
  /*
  //segunda
  //Abrindo a pagina na mesma aba
  window.location.href = "http://localhost:8080";*/
}
function trocarNomeButton() {
  document.getElementById("nomeButton").innerHTML = "Trocou o nome";
}

function passarMouse() {
  alert("Texto foi mudado");

}
function mudarTextoComMouse() {
  //alert("Texto foi mudado");
  document.getElementById("textoMudado").innerHTML = "Frase trocada";

}
function voltar() {
  document.getElementById("voltar").innerHTML = "Frase voltou!";

}
function trocarElement(elemento) {
  //document.getElementById("trocarVoltar").innerHTML = "Obrigado por passar o mouse!";
  elemento.innerHTML = "Obrigado por passar o mouse!";

}
function voltarElement(elemento) {
  //document.getElementById("trocarVoltar").innerHTML = "Obrigado por passar o mouse!";
  elemento.innerHTML = "Passar o mouse!";

}
function load() {
  alert("Pagina carregada!");
}
function functionOnChange(elemento) {
  // console.log(elemento.value);
  var el = elemento.value;
  if (el == "Selecione...") {

  }
  else if (el > 0) {
    document.getElementById("change").innerHTML = elemento.value;
  }
  else {

  }

}

