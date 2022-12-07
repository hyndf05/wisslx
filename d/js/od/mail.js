$('.mzp:not(#rvAll)').addClass('none');
$('.option-item').click(function(){
  var gtd = 'r' + $(this).attr('id');
  var gtdt = $(this).text();
  $('.mzp').addClass('none');
  $(`#${gtd}`).removeClass('none');
  $('title').text(`${gtdt} : WISSLX Mail`);
})
$('#vTo2').click(function(){
  $('.mzp').addClass('none');
  $(`#rvTo`).removeClass('none');
})
function root(func, data, read, user, gets, summary, dataurl, hr, coded, embed){
console.log(embed);
}