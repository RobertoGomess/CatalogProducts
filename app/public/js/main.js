M.AutoInit();

$(window).on('load', function() {
    
    $("#loading").fadeOut(1000);

    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});

    $('.expandir-card').on('click', function(){
      var card = $(this).closest('.card');
      console.log($(this).parent().parent().parent());
      if(card.hasClass('card-expandido')){
        card.removeClass('card-expandido');
        $(this).text('fullscreen');
      }else{
        card.addClass('card-expandido');
        $(this).text('fullscreen_exit');
      }
    });

  });