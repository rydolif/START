$(function() {


//-----------------------------calculator---------------------------
$(function() {
 
(function quantityProducts() {
    var $quantityArrowMinus = $(".minus");
    var $quantityArrowPlus = $(".pluse");
    var $quantityNum = $(".num");
 
    $quantityArrowMinus.click(quantityMinus);
    $quantityArrowPlus.click(quantityPlus);
 
    function quantityMinus() {
      if ($quantityNum.val() > 1) {
        $quantityNum.val(+$quantityNum.val() - 1);

          var value = $('.number').val();
          var price = $('.number').data('price');

          var month = Math.round(price * value);
          $('.price').text(month);

      }
    }
 
    function quantityPlus() {
      $quantityNum.val(+$quantityNum.val() + 1);

        var value = $('.number').val();
        var price = $('.number').data('price');

        var month = Math.round(price * value);
        $('.price').text(month);
    }
  })();
 
});

//-----------------------------slider---------------------------
var swiper = new Swiper('.slider__container', {
  slidesPerView: 4,
  spaceBetween: 110,
  navigation: {
      nextEl: '.slider__arrow-next',
      prevEl: '.slider__arrow-prev',
  },
  breakpoints: {
    576: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});

var swiper = new Swiper('.trend__container', {
  slidesPerView: 3,
  spaceBetween: 2,
  navigation: {
      nextEl: '.trend__arrow-prev',
      prevEl: '.trend__arrow-next',
  },
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    }
  }
});

//------------------------------гамбургер-----------------------------
$('.hamburger--3dx').click(function() {
  $(this).toggleClass('is-active');
  $('nav').toggleClass('nav-active');
  $('header').toggleClass('header-menu');
});

//-------------------------------попандер---------------------------------------
  $('.modal').popup({transition: 'all 0.3s'});

//------------------------------------form-------------------------------------------
	$('input[type="tel"]').mask('+0 (000) 000-00-00');

	jQuery.validator.addMethod("phoneno", function(phone_number, element) {
	   return this.optional(element) || phone_number.match(/\+[0-9]{1}\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/);
	}, "Введите Ваш телефон");

  $(".order-form").validate({
    messages: {
      name: "Введите ваше Имя",
      phone: "Введите ваш телефон",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".order-form").find("input[name=name]").val(),
        phone: jQuery(".order-form").find("input[name=phone]").val(),
        number: jQuery(".order-form").find("input[name=number]").val(),
        product: jQuery(".order-form").find("input[name=product]").val(),
        subject: jQuery(".order-form").find("input[name=subject]").val()
      };
      ajaxSend('.order-form', t);
    }
  });

  $(".question-form").validate({
    messages: {
      name: "Введите ваше Имя",
      phone: "Введите ваш телефон",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".question-form").find("input[name=name]").val(),
        phone: jQuery(".question-form").find("input[name=phone]").val(),
        subject: jQuery(".question-form").find("input[name=subject]").val()
      };
      ajaxSend('.question-form', t);
    }
  });

  $(".consultation-form").validate({
    messages: {
      name: "Введите ваше Имя",
      phone: "Введите ваш телефон",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".consultation-form").find("input[name=name]").val(),
        phone: jQuery(".consultation-form").find("input[name=phone]").val(),
        subject: jQuery(".consultation-form").find("input[name=subject]").val()
      };
      ajaxSend('.consultation-form', t);
    }
  });

  function ajaxSend(formName, data) {
    jQuery.ajax({
      type: "POST",
      url: "sendmail.php",
      data: data,
      success: function() {
        $(".modal").popup("hide");
        $("#thanks").popup("show");
        setTimeout(function() {
          $(formName).trigger('reset');
        }, 2000);
      }
    });
  }

//----------------------------------------fixed----------------------------------
  $(window).scroll(function(){
      if($(this).scrollTop()>20){
          $('.header').addClass('header-active');
      }
      else if ($(this).scrollTop()<20){
          $('.header').removeClass('header-active');
      }
  });

});

//----------------------------------------preloader----------------------------------

$(window).on('load', function(){
  $('.preloader').delay(1000).fadeOut('slow');
});
