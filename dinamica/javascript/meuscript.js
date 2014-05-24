function inserir()
{
var x = document.getElementById("Aprender");
var option = document.createElement("option");
option.text = $('#nome').val();
x.add(option);
$('#nome').val('');
}
