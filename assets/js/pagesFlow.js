$(function(){
    $('#cadastro').submit(function(event){
      event.preventDefault();
      
      $("#topbar").text("");
      $("#toggleTop").prop("checked", false);
      
      $.ajax({
        url: $('#cadastro').attr('action'),
        type: 'post',
        crossDomain: true,
        data : $('#cadastro').serialize(),
        success: function(data, textStatus, xmlHttpRequest){
          $("#resposta").append("Usuária cadastrada com sucesso! Cheque seu email para confirmar a criação da conta :) (rosto sorrindo)");
        },
        error: function(xmlHttpRequest, textStatus, errorThrown){
          var result = $.parseJSON(xmlHttpRequest.responseText);
          $.each(result, function(k, v) {
              $("#topbar").append(v + "</br>");
          });
          
          $("#toggleTop").prop("checked", true);
        }
      });
    });
});