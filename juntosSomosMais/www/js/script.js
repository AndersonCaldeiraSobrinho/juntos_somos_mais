//funções para ativação de funcionabilidades do materialize

$('.dropdown-trigger').dropdown();

$(document).ready(function(){
    $('.collapsible').collapsible();
  });

  $(document).ready(function(){
    $('select').formSelect();
  });

  $(document).ready(function(){
    $('.modal').modal();
  });


// função para animação da troca das telas no ato do click

var localiza = $("#localiza");
var ajuda = $("#ajuda");
var contato = $("#contato");
var cAj = $(".posicao_1");
var cMp = $(".posicao_2");
var cCtn = $(".posicao_3");

$(function(){
  trocaTela(localiza);
  trocaTela(ajuda);
  trocaTela(contato);
});

function trocaTela(botao) {
    botao.on('click', function(){
        if($(this).attr("id") == "ajuda"){
          cAj.animate({
            left:"0",
            top: "8vh"
          });
          cMp.animate({
            left: "-100vw",
            top: "8vh"
          });
          cCtn.animate({
            left: "100vw",
            top: "8vh"
          });
          ajuda.animate({
            left: "0",
            width: "40vw",
            height: "25vh"
          });
          ajuda.css("background", "#990003");
          ajuda.css("border-radius", "1em 1em 0 0");
          ajuda.css("box-shadow", "0px 15px 20px #000000");
          localiza.animate({
            left:"0",
            width: "30vw",
            height: "20vh"
          });
          localiza.css("background", "#1F2324");
          localiza.css("border-radius", "0");
          localiza.css("box-shadow", "0px -13px 20px rgba(0, 0, 0, 0.27)");
          contato.animate({
            left: "0",
            width: "30vw",
            height: "20vh"
          });
          contato.css("background", "#1F2324");
          contato.css("border-radius", "0");
          contato.css("box-shadow", "0px -13px 20px rgba(0, 0, 0, 0.27)");
        }else if($(this).attr("id") == "contato"){
          cAj.animate({
            left:"100vw",
            top: "8vh"
          });
          cMp.animate({
            left: "-100vw",
            top: "8vh"
          });
          cCtn.animate({
            left: "0",
            top: "8vh"
          });
          ajuda.animate({
            left: "40vw",
            width: "30vw",
            height: "20vh"
          });
          ajuda.css("background", "#1F2324");
          ajuda.css("border-radius", "0");
          ajuda.css("box-shadow", "0px -13px 20px rgba(0, 0, 0, 0.27)");
          localiza.animate({
            left:"0",
            width: "30vw",
            height: "20vh"
          });
          localiza.css("background", "#1F2324");
          localiza.css("border-radius", "0");
          localiza.css("box-shadow", "0px -13px 20px rgba(0, 0, 0, 0.27)");
          contato.animate({
            left: "-30vw",
            width: "40vw",
            height: "25vh"
          });
          contato.css("background", "#990003");
          contato.css("border-radius", "1em 1em 0 0");
          contato.css("box-shadow", "0px 15px 20px #000000");
        }else if($(this).attr("id") == "localiza"){
          cAj.animate({
            left:"-100vw",
            top: "8vh"
          });
          cMp.animate({
            left: "0vw",
            top: "8vh"
          });
          cCtn.animate({
            left: "100vw",
            top: "8vh"
          });
          ajuda.animate({
            left: "-40vw",
            width: "30vw",
            height: "20vh"
          });
          ajuda.css("background", "#1F2324");
          ajuda.css("border-radius", "0");
          ajuda.css("box-shadow", "0px -13px 20px rgba(0, 0, 0, 0.27)");
          localiza.animate({
            left: "30vw",
            width: "40vw",
            height: "25vh"
          });
          localiza.css("background", "#990003");
          localiza.css("border-radius", "1em 1em 0 0");
          localiza.css("box-shadow", "0px 15px 20px #000000");
          contato.animate({
            left: "0",
            width: "30vw",
            height: "20vh"
          });
          contato.css("background", "#1F2324");
          contato.css("border-radius", "0");
          contato.css("box-shadow", "0px -13px 20px rgba(0, 0, 0, 0.27)");
        }else{
          alert("Erro de conexão!!!");
        }
    });
};