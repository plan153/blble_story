(function(){
var base=document.currentScript.src.replace(/menu\.js.*$/,'');
var items=[["예수님의 비유","jesus-parables/"],["성경의 비밀","secrets/"],["히브리어 출애굽기","exodus/"],["상징사전","symbols/"],["원어 근거 점검","original-language/"],["다른 시리즈 (준비 중)","others/"]];
var path=location.pathname;
var h=document.createElement('header');h.className='gh';
h.innerHTML='<a class="brand" href="'+base+'">📖 성경이야기</a><nav class="gm">'+items.map(function(i){
 var href=base+i[1];var on=path.indexOf(new URL(href).pathname)===0;
 return '<a href="'+href+'" class="'+(on?'on':'')+(i[1]==='others/'?' soon-m':'')+'">'+i[0]+'</a>'}).join('')+'</nav>';
document.body.insertBefore(h,document.body.firstChild);
})();
