// 인트로 모션
function pageIntro(){
    $wH = $(window).height();

    $(".group_comm").css({
        height: $wH
    });
}
pageIntro();

// 해당 페이지 높이값 조절
function pageDown(){
    $wH = $(window).height();

    $(".intro_comm").animate({
        top: -$wH,
    }, 600, function(){
        $(".intro_comm").hide();
    });
}

// 디바이스 체크
function deviceChk(){
    var mobileKeyWords = new Array('iPhone', 'iPod', 'BlackBerry', 'Android', 'Windows CE', 'LG', 'MOT', 'SAMSUNG', 'SonyEricsson');
    var device_name = '';
    for (var word in mobileKeyWords){
        if (navigator.userAgent.match(mobileKeyWords[word]) != null){
            device_name = mobileKeyWords[word];
            $('html').addClass('mobile').removeClass('pc');
            break;
        } else {
            $('html').addClass('pc').removeClass('mobile');
        }
    }
}

$(function() {
    deviceChk();
    pageIntro();

    // scrollSpy
    var $w = $(window),
        $scrollDom = $('html, body'),
        $spy = $('.list_nav li'),
        $cont = $('.group_comm'),
        contOfs = [],
        congHgt = [],
        wH;

    var scrollspy = function(){
      var scrt = $w.scrollTop();
      $cont.each(function(index){
        if(scrt >  contOfs[index] - wH &&
           scrt < contOfs[index] + congHgt[index] - wH)
        {
          $spy.eq(index).addClass('on')
              .siblings().removeClass('on');
          return;
        }
      });
    };

    // 메뉴 클릭시 이동 함수
    var moveToTarget = function(index){
      $scrollDom.animate({scrollTop: contOfs[index]}, 600);
    };

    // 각 컨텐츠의 높이 및 오프셋값, 윈도우 높이값 등을 변수에 저장
    var getValue = function(){
      wH = $w.height() / 2;
      $cont.each(function(index){
        contOfs[index] = $(this).offset().top;
        congHgt[index] = $(this).height();
      });
    };

    getValue();
    scrollspy();
    $w.on('scroll', scrollspy);

    $spy.on('click', 'a', function(){
      var idx = $(this).parent().index();
      moveToTarget(idx);
    });

    $w.on('resize', function(){
      getValue();
      scrollspy();

      deviceChk();
      pageIntro();
    });
});
