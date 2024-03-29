// DOM 객체 할당 video, btn => 두 개의 id값
// 콘솔 캡쳐 넘버링
var video = $('#tiffany_video');
var btn = $('#tiffany_btn');
console.log(video);
console.log(btn);

// 이벤트 연결
btn.click(function(){
    // 초기상태 => Video(paused) / Button(play)
    if(video.get(0).paused){
        video.get(0).play();
        btn.html('<i class="fa fa-pause-circle-o" aria-hidden="true"></i>');
    }else{ // Video가 playing 상태면
        //pause(): Video pause
        video.get(0).pause();
        btn.html('<i class="fa fa-play-circle-o" aria-hidden="true"></i>');
    }
});

$('a[href="#"]').click(function(e){
    e.preventDefault();
});

//탭메뉴
var tab = $('.tab_menu').find('li');

function tab_cf(num){
    for(i=0;i<=tab.length;i++){
        if(num == i){
           // active�대옒�� 二쇨린
           tab.eq(i).addClass('active'); 

           $('.tab_content0'+i).show();
        }else{

           tab.eq(i).removeClass('active'); 

           $('.tab_content0'+i).hide();
        }
    
    }
}
// 탭메뉴 동그라미
$('.tab_menu').children().eq(0).click(function(){
    $('.circle').stop().animate({left:'43px'},'fast');
});
$('.tab_menu').children().eq(1).click(function(){
    $('.circle').stop().animate({left:'265px'},'fast');
});
$('.tab_menu').children().eq(2).click(function(){
    $('.circle').stop().animate({left:'478px'},'fast');
});

//Section FAQ 
$('.faqs dl dt').click(function(){
    if($(this).hasClass('active')){
        $(this).removeClass('active');
        // 플러스 화살표
        $(this).children().children('span').eq(1).css({'transform':'translateY(4px) rotate(90deg)'});

        $(this).siblings('dd').slideUp();
    }else{
        $(this).addClass('active');

        $(this).children().children('span').eq(1).css({'transform':'translateY(4px) rotate(180deg)'});

        $(this).siblings('dd').slideDown();
    }
});
