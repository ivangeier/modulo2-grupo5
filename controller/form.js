const api = new Api();

$('#cep').blur(function () {
  if (
    $('#cep')
      .val()
      .match(/^[0-9]+$/)
  ) {
    api
      .buscaCEP($('#cep').val())
      .then(function (data) {
        if (data.erro) {
          $('#cep').addClass('erro');
        } else {
          $('#estado').val(data.uf);
          $('#cidade').val(data.localidade);
          $('#bairro').val(data.bairro);
          $('#rua').val(data.logradouro);
        }
      })
      .catch(function () {
        $('#cep').addClass('erro');
      });
  } else {
    $('#cep').addClass('erro');
  }
});

$('.buscarFilme').click((e) => {
  e.preventDefault();
  let titulo = $('.inputFilme').val();
  if (titulo != '') {
    localStorage.setItem('titulo', titulo);
    $('.inputFilme').val('');
    window.location.assign('info.html');
  }
});

$('#cep').keyup(function () {
  $('#cep').removeClass('erro');
});
