var gi = $('.wc-x-cty-category-item').length;
for(let i=0;i<gi+1;i++) {
  var s = Math.random().toString(36).substring(2, 16);
  $(`.wc-x-cty-category-item:nth-child(${i})`).attr('id', s);
}

var catHeight = $('.wc-x-cty-inner').height();
$('.wc-x-cty-category-subcategory').css('max-height', catHeight);

var ga = '';
$('.wc-x-cty-m-category-item').click(function(){
  $('.wc-x-cty-m-category-item').removeClass('selected');
  $(this).addClass('selected');
  ga = $(this).attr('id');
  $(`#${ga} > .wc-x-cty-category-subcategory`).css('display', 'block');
  $('*').removeClass('wc-x-cty-m-category-item');
})

$('.wc-x-cty-category-item').click(function(){
  $('#subcategory').addClass('ss');
})

subCreate() {
  function networksReloadedDirectory () {
    netli.net;
  }
}