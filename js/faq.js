// 각 항목 열기 / 닫기
$('.open1').click(function(){
    $(this).parent().next().stop().show();
});

$('.close1').click(function(){
    $(this).parent().next().stop().hide();
});

// 모두 열기 / 모두닫기
$('.all_open').click(function(){
    $('article p').stop().slideDown();
});
$('.all_close').click(function(){
    $('article p').stop().slideUp();
});