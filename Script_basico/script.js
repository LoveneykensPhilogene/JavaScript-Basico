var nome = "Jean";
var idade = 34;
var sexo = "homem";

document.write("Nome :" + nome + "<br/>" + "Idade : " + idade + "<br/>" + "Sexo : " + sexo);
//array
var nome = [nome, idade, sexo];
document.write("<br/>" + nome);

//laços
document.write("<br />");
document.write("<br />" + "Contagem : ");
for (a = 0; a <= 10; a++) {
  var valor_a = [a];
  //  if (a == 0)
  document.write(valor_a + "-");
}
