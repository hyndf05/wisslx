none('wc-profile');

var user_login = 0;
var news_img_now = $('.wc-news img').length;
var news_img_count = 0;
var ad_span_length = $('.wc-advertising').length;
var keywords_li_count = $('.wc-keywords li').length;
var keywords_li_is = 0;
var ad_img_now = $('.wc-advertising img').length;
var ad_img_count = 0;
var img_not_found = 0;

$('img').on('error', function(){
  var g = this;
  $(g).attr('src', 'https://uploads.hyndf05.repl.co/e/000.png');
})

$('.wc-news img').on('load',function(){
  news_img_count ++;
  console.log('newsWC' ,news_img_now, news_img_count);
  if (news_img_now == news_img_count+1) {
    none('wc-news');
  }
});

$('.wc-advertising img').on('load',function(){
  ad_img_count ++;
  console.log('adWC' ,ad_img_now, ad_img_count);
  if (ad_img_now == ad_img_count+2) {
    none('wc-advertising');
  }
});

for (let i=0;i<keywords_li_count+1;i++) {
  var g = $(`.wc-keywords li:nth-child(${i})`).length;
  if (g > 0) {
    keywords_li_is ++;
    if (keywords_li_count == keywords_li_is) {
      none('wc-keywords');
    }
  }
}

function chunkIs(){
  checkChunk();
}

function checkChunk(){
  var pageView = $('body').width();
  var ofRange = $('.chkview').width();
  if (pageView == ofRange) {
     alert('loaded.')
  } else if (pageView > ofRange) {
     alert('pageView is not denied.');
  } else if (pageView < ofRange) {
     alert('incorrect setting. contact developer to solve.');
  } else {
    aler('something went wrong.');
  }
}

$('.wc-ymusic iframe').on('load', function(){
  none('wc-ymusic');
})

$('.search-ent img').on('load', function(){
  none('search-ent');
})
  
function none(div) {
  $(`.${div} .wc-load-b`).addClass('none');
}

var ad1rand = Math.floor(Math.random() * 9);
var ad2rand = Math.floor(Math.random() * 8);

$('.wc-advertising.wc-bb-advertising > a > img').attr('src', `https://uploads.hyndf05.repl.co/wisslx/ads/736x100/${ad1rand}.png`)
$('.wc-advertising.wc-sb-advertising > a > img').attr('src', `https://uploads.hyndf05.repl.co/wisslx/ads/277x70/${ad2rand}.png`)