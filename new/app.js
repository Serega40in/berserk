$(document).ready(function() {
  $("body").css("display", "none");
  setTimeout(function() {$("body").fadeIn(700);}, 630);  
  $('.close').click(function(){
      connectFormEnd();
  });  
});

function goToBlackPage(url) {
  blackDo(); // затемняем кругом в теч сек
  setTimeout(function() {
    document.location.href = url; // переходим на др страницу через 1 сек
    $(".menu").css('visibility','hidden');
    $(".menu").css('visibility','unset'); // отключаем видимость меню чтобы не мельтешило
    $(".checkbox-toggle").prop('checked', false);  // выключаем меню 0.4 сек (параллельно)
    setTimeout(function() {
      blackEnd(); // отключаем затемнение через 0.1 сек
      $("body").css("display", "none"); // убираем body
      $("body").fadeIn(600); // появляется body в теч 0.7 сек
    }, 100);
  }, 1000);
}
function goToWhitePage(url) {
  whiteDo(); // затемняем кругом в теч сек
  setTimeout(function() {
    document.location.href = url; // переходим на др страницу через 1 сек
    $(".menu").css('visibility','hidden');
    $(".menu").css('visibility','unset'); // отключаем видимость меню чтобы не мельтешило
    $(".checkbox-toggle").prop('checked', false);  // выключаем меню 0.4 сек (параллельно)
    setTimeout(function() {
      whiteEnd(); // отключаем затемнение через 0.1 сек
      $("body").css("display", "none"); // убираем body
      $("body").fadeIn(600); // появляется body в теч 0.7 сек
    }, 100);
  }, 1000);
}
function blackDo() {
  $(".black").css('display','block');
}
function blackEnd() {
  $(".black").css('display','none');
}
function whiteDo() {
  $(".white").css('display','block');
}
function whiteEnd() {
  $(".white").css('display','none');
}


(function($) {

  var app = $.sammy('#app', function() {
    this.use('Template');

    this.around(function(callback) {
      var context = this;
      this.load('data/services.json')
          .then(function(items) {
            context.items = items;
          })
          .then(callback);
    });

    this.get('#/service/', function(context) {
      context.app.swap('');
      $.each(this.items, function(i, item) {
        context.render('templates/service.template', {id: i, item: item})
               .appendTo(context.$element());
      });
    });
    
    this.get('#/home/', function(context) {        
        var str=location.href.toLowerCase();
        context.app.swap('');
        context.render('templates/home.template', {})
               .appendTo(context.$element());
    });

    this.get('#/about/', function(context) {
        var str=location.href.toLowerCase();
        context.app.swap('');
        context.render('templates/about.template', {})
               .appendTo(context.$element());
    });

    this.get('#/services/', function(context) {
        var str=location.href.toLowerCase();
        context.app.swap('');
        context.render('templates/services.template', {})
               .appendTo(context.$element());
    });

    this.get('#/service/:id', function(context) {
      this.item = this.items[this.params['id']];
      if (!this.item) { return this.notFound(); }
      this.partial('templates/service-detail.template');
    });


    this.before('.*', function() {

        var hash = document.location.hash;
        $("nav").find("a").removeClass("current");
        $("nav").find("a[href='"+hash+"']").addClass("current");
   });

  });

  $(function() {
    app.run('#/home/');
  });

})(jQuery);


function connectFormDo() {
  $('.connect-form').css('display','block');
  setTimeout(function(){
    $('.connect-form input').css('visibility','unset');
    $('.connect-form button').css('visibility','unset');
    $('.connect-form p').css('visibility','unset');
    $('.formdiv').addClass('forclose');
  }, 550)
}

function connectFormEnd(){
    $('.connect-form').fadeOut(500); 
    $('.connect-form input').css('visibility','hidden');
    $('.connect-form button').css('visibility','hidden');
    $('.connect-form p').css('visibility','hidden');
    $('.formdiv').removeClass('forclose');
}

var isOrder = false;

function clickBtnOrd(ind) {
  console.log(ind);
  if (!isOrder) {orderDo(ind)} else {orderEnd(ind)}
}

function orderDo(ind) {
  isOrder = true;
  $('.ps-item:eq('+ ind +')').find('.i-name p').fadeOut(100);
  $('.ps-item:eq('+ ind +')').find('.form-more').fadeOut(100);
  $('.ps-item:eq('+ ind +')').find('.order').slideDown();
  $('.ps-item:eq('+ ind +')').find('.order-form').fadeIn(550);
}

function orderEnd(ind){
    isOrder = false;
    $('.ps-item:eq('+ ind +')').find('.order').slideUp(); 
    $('.ps-item:eq('+ ind +')').find('.order-form').fadeOut(100);
    $('.ps-item:eq('+ ind +')').find('.i-name p').fadeIn(1000);
    $('.ps-item:eq('+ ind +')').find('.form-more').fadeIn(1000);
}
