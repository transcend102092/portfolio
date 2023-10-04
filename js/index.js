//이미지 슬라이드
var swiper = new Swiper(".sns_swiper", {
    spaceBetween:10,
    slidesPerView: 4,
    
    loop :true,
    cssMode: true,
    autoHeight: true,
    followFinger: true,
    mousewheel: true,
    navigation: {
      nextEl: ".sns-button-next",
      prevEl: ".sns-button-prev",
    },
    mousewheel: true,
    keyboard: true,
  });


// bx슬라이드
//dp
$(document).ready(function(){
  $(".slide_list").bxSlider({
    //   auto: true,
      pager: false,
      controls: true,
      autoControls : false,
      minSlides: 1,
      maxSlides: 4,
      moveSlides: 1,
      slideWidth: 242.5,
      slideMargin: 10,
      infinityLoop: true,
      touchEnabled : (navigator.maxTouchPoints > 0),
  });
  });

//sns
$(document).ready(function(){
  $(".sns_slide_list").bxSlider({
    //   auto: true,
      pager: false,
      controls: true,
      autoControls : false,
      minSlides: 1,
      maxSlides: 4,
      moveSlides: 1,
      slideWidth: 242.5,
      slideMargin: 10,
      infinityLoop: true,
      touchEnabled : (navigator.maxTouchPoints > 0),
  });
  });

//po
$(document).ready(function(){
  $(".po_slide_list").bxSlider({
    //   auto: true,
      pager: false,
      controls: true,
      autoControls : false,
      minSlides: 1,
      maxSlides: 3,
      moveSlides: 1,
      slideWidth: 326.5,
      slideMargin: 10,

      infinityLoop: true,
      touchEnabled : (navigator.maxTouchPoints > 0),
  });
  });
  //이미지 슬라이드 END

  
//banner
$(document).ready(function(){
  $(".bn_slide_list").bxSlider({
    //   auto: true,
      pager: false,
      controls: true,
      autoControls : false,
      minSlides: 1,
      maxSlides: 1,
      moveSlides: 1,
      slideWidth: 1000,
      slideMargin: 10,

      infinityLoop: true,
      touchEnabled : (navigator.maxTouchPoints > 0),
    });
  //banner 더보기 
  $('.bt_more').click(()=>{
    $('#bn_list .img_wrap').toggleClass('img_expention')
    $('#bn_list .gra').toggleClass('gra_off')
  })
  $('.bt_more').click(function(){
    $('.bt_more').toggleClass('active')
})
});




// 이미지 팝업

$(function(){
    //sns
    

    //dp
    // 변수 선언
    var dpimageButton = $('.dp-item-box .dp-item-img a');
    var dppopup = $('.dp-popup');
    var htmlAndBody = $('html, body');

    // 팝업 생성
    dpimageButton.on('click', function(e){
    e.preventDefault();
    var dppopupImg = dppopup.find('> .dp-popup-inner > img');
    var dpimage = $(this).find('> img:last-child');
    var src = dpimage.attr('src');
    var alt = dpimage.attr('alt');
    dppopupImg.attr('src', src).attr('alt', alt);
    dpcreatePopup();
    $('.dp-popup').animate({scrollTop : top}, 0);
    });

    // 팝업 제거
    dppopup.on('click', function(){
    dpremovePopup();
    });
    
    // 팝업창 검은배경과 닫기 버튼을 제외한 나머지 부분 클릭시 닫히지 않도록 하기
    dppopup.find('> .dp-popup-inner').on('click', function(e){
    e.stopPropagation();
    })

    // 팝업 생성 함수
    function dpcreatePopup(){
    dppopup.addClass('active');
    htmlAndBody.css('overflow-y', 'hidden');
    
    }
    // 팝업 제거 함수
    function dpremovePopup(){
    dppopup.removeClass('active');
    htmlAndBody.css('overflow-y', 'visible');
    }

    // SNS
    // 변수 선언
    var snsimageButton = $('.sns-item-box .sns-item-img a');
    var snspopup = $('.img-popup');
    var htmlAndBody = $('html, body');

    // 팝업 생성
    snsimageButton.on('click', function(e){
    e.preventDefault();
    var snspopupImg = snspopup.find('> .popup-inner > img');
    var snsimage = $(this).find('> img:last-child');
    var src = snsimage.attr('src');
    var alt = snsimage.attr('alt');
    snspopupImg.attr('src', src).attr('alt', alt);
    snscreatePopup();
    });

    // 팝업 제거
    snspopup.on('click', function(){
    snsremovePopup();
    });
    
    // 팝업창 검은배경과 닫기 버튼을 제외한 나머지 부분 클릭시 닫히지 않도록 하기
    snspopup.find('> .popup-inner').on('click', function(e){
    e.stopPropagation();
    })

    // 팝업 생성 함수
    function snscreatePopup(){
    snspopup.addClass('active');
    htmlAndBody.css('overflow-y', 'hidden');
    
    }
    // 팝업 제거 함수
    function snsremovePopup(){
    snspopup.removeClass('active');
    htmlAndBody.css('overflow-y', 'visible');
    }

    //po

    // 변수 선언
    var poimageButton = $('.po-item-box .po-item-img a');
    var popopup = $('.po-popup');
    var htmlAndBody = $('html, body');

    // 팝업 생성
    poimageButton.on('click', function(e){
    e.preventDefault();
    var popopupImg = popopup.find('> .po-popup-inner > img');
    var poimage = $(this).find('> img:last-child');
    var src = poimage.attr('src');
    var alt = poimage.attr('alt');
    popopupImg.attr('src', src).attr('alt', alt);
    pocreatePopup();
    $('.po-popup').animate({scrollTop : top}, 0);
    });

    // 팝업 제거
    popopup.on('click', function(){
    poremovePopup();
    });
    
    // 팝업창 검은배경과 닫기 버튼을 제외한 나머지 부분 클릭시 닫히지 않도록 하기
    popopup.find('> .po-popup-inner').on('click', function(e){
    e.stopPropagation();
    })

    // 팝업 생성 함수
    function pocreatePopup(){
    popopup.addClass('active');
    htmlAndBody.css('overflow-y', 'hidden');
    
    }
    // 팝업 제거 함수
    function poremovePopup(){
    popopup.removeClass('active');
    htmlAndBody.css('overflow-y', 'visible');
    }


})
// 이미지팝업 END


// gotop
$(function(){
  $(window).scroll(function(){

      if($(this).scrollTop() >= 1000){
          $('.go_top').fadeIn();
      }
      else{
          $('.go_top').fadeOut();
      }
  })

  $('.go_top').click(function(e){
      e.preventDefault();
      $('html, body').stop().animate({scrollTop:0},400)
  })
  
})