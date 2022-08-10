
/*
index.js
 */

$(function(){
    // 윈도우 스크롤 시 메인 메뉴 고정
    $(window).on('scroll',function(){
        if($(document).scrollTop() >=$('#headerBox').height()){ //headerBox가 안보이는 상태
            $('#mainMenuBox').addClass('mainMenuFixed mainMenuShadow')
        } else { //headerBox가 보이는 상태
            $('#mainMenuBox').removeClass('mainMenuFixed mainMenuShadow')
        }

    });

    //moveToTop 이미지 클릭 시 Top 이동
    $('#moveToTop').on('click',function(){
       $('html, body').animate({scrollTop:0},500);
    });
});