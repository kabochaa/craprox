//画像と動画の設定
var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
    if (windowwidth > 960){
      var responsiveImage = [//PC用の動画と画像
        { src: './img/main01.png',//動画が再生されなかった場合の代替画像
        video:{
          src: [//mp4で動画が再生されない時のことを考えて複数の形式の動画を設定
            './mov/info.mp4',
          ],
          loop: false,//動画を繰り返さない
          mute: true,//動画の音を鳴らさない
        }
        },
      ];
    } else {
      var responsiveImage = [//タブレットサイズ（768px）以下用の画像
        { src: './img/main01-sp.png' },
        { src: './img/main02-sp.png' },
        { src: './img/main05-sp.png' },
        { src: './img/main04-sp.png' },
      ];
}

//Vegas全体の設定
$('#slider').vegas({
    overlay: true,//画像の上に網線やドットのオーバーレイパターン画像を指定。
    transition: 'fade2',//切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
    transitionDuration: 2000,//切り替わりのアニメーション時間をミリ秒単位で設定
    delay: 5000,//スライド間の遅延をミリ秒単位で。
    animationDuration: 20000,//スライドアニメーション時間をミリ秒単位で設定
    animation: 'random',//スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
    slides: responsiveImage,//画像と動画の設定を読む
  });

// time out
if(windowwidth > 960){
  $(document).ready(function() {
    $("#timeout").fadeIn().queue(function() {
    setTimeout(function(){$("#timeout").dequeue();
    }, 1430);
    })
    $("#timeout").fadeOut();
    });
}

// header
const header = $("#js-fixed-header");

$(window).on("scroll", function () {
  // ヘッダーの高さ
  let headerHeight = header.outerHeight();
  // スクロール量
  let scroll = $(window).scrollTop();
  // ヘッダーを表示する高さ = ヘッダーの高さ + 任意の値
  let showHeight = headerHeight + 330;

  if (showHeight < scroll) {
    header.addClass("is-show");
  } else {
    header.removeClass("is-show");
  }
});

// hamburger menu
const ham = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav');

ham.addEventListener('click', function () {

  ham.classList.toggle('active');
  nav.classList.toggle('active');

});

$(function(){
  $(".en").click(function(){
    $(".en.selected").removeClass("selected");
    $(this).addClass("selected");
  });
});


// page top に戻るやつ

//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
	var scroll = $(window).scrollTop();
	if (scroll >= 100){//上から100pxスクロールしたら
		$('#page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
		$('#page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
	}else{
		if($('#page-top').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら
			$('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
			$('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
		}
	}
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});


// #page-topをクリックした際の設定
$('#page-top').click(function () {
	var scroll = $(window).scrollTop(); //スクロール値を取得
	if(scroll > 0){
		$(this).addClass('floatAnime');//クリックしたらfloatAnimeというクラス名が付与
        $('body,html').animate({
            scrollTop: 0
        }, 2000,function(){//スクロールの速さ。数字が大きくなるほど遅くなる
            $('#page-top').removeClass('floatAnime');//上までスクロールしたらfloatAnimeというクラス名を除く
        });	
	}
    return false;//リンク自体の無効化
});

// カレント表示
href = location.href;

var links = jQuery(".nav-items__item > a");

links.each(function (index, value) {
	if (value.href == href) {
		jQuery(".nav-items__item").eq(index).addClass("current");
}
});

