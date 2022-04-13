
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $('.js-top-scroll');
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 120) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });
  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  // ヘッダー
  $(window).on('scroll', function () {
    if ($('.slider1').height() < $(this).scrollTop()) {
      $('.header').css('background', 'rgba(17,17,17,1)');
    } else {
      $('.header').css('background', 'rgba(17,17,17,0.5)');
    }
  });

  // ドロワーメニューアイコンをクリックしたらメニューを開く・閉じる
  $(function() {
    $(".js-drawer-open").on('click',function () {
      if($('.js-drawer-open').hasClass('is-open')){
        $('.js-drawer-menu').fadeOut(300);
        $(this).removeClass('is-open');
        $("html").removeClass("is-fixed");
      }else{
        $('.js-drawer-menu').fadeIn(300);
        $(this).addClass('is-open');
        $("html").addClass("is-fixed");
      }
    });
  });

  // ドロワーメニュー内のリンクをクリックしたらメニューを閉じる
  $(function() {
    $(".js-drawer-menu a").on("click", function() {
    let $screenwidth = $(window).width();
    let $breakpoint_md = 767;
    if ($screenwidth < $breakpoint_md){
      if($('.js-drawer-open').hasClass('is-open')){
        $('.js-drawer-menu').fadeOut(300);
        $('.js-drawer-open').removeClass('is-open');
        $("html").removeClass("is-fixed");
      }else{
        $('.js-drawer-menu').fadeIn(300);
        $('.js-drawer-open').addClass('is-open');
        $("html").addClass("is-fixed");
      }
    }
    });
  });
  // //ドロワーメニュー
  // $('.navbar_toggle').on('click', function () {
  //   $(this).toggleClass('open');
  //   $('.menu').toggleClass('open');
  // });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)
  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });



});
