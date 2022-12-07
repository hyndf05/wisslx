var gg = $('*').length;
for(let i=0;i<gg+1;i++) {
  var s = Math.random().toString(36).substring(2, 16);
  $(`*:eq(${i}):not(html,head,body,script)`).attr('wsx', s);
}