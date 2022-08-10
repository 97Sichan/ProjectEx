/**
 * subMenu.js
 */

//[전체보기] 메뉴 클릭 했을 때 모든 메뉴 항목이 보이게
$(function(){
    //[전체보기] 메뉴 클릭 했을 때
    $('#showAllMenu').on('click',function (){
        if($(this).text()=='전체보기 ▼'){
            //subMenubox 보이게
            $('#subMenuBox').css('visibility','visible');
            $(this).text('메뉴닫기 ▲').css('color','blue');
        } else {
            //subMenubox 안 보이게
            $('#subMenuBox').css('visibility','hidden');
            $(this).text('전체보기 ▼').css('color','black');
        }
    }); // click 끝

}); // ready 끝