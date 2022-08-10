/*
* tabMenu.js
*/
$(function(){
    // tabContent 접근 객체 추출 - 해당 객체에 css() 적용 예정이므로 jQuery 변수에 저장
    var $tabContent = $('#tabContent div'); // tabMenu 클릭시 노출되는 이미지

    // 첫번재 메뉴 항목 선택되어 있게
    $('#tab li:first-child').addClass('selectedItem'); // tabMenu.css에 임의로 생성한 css 동적 적용

    // 탭 메뉴 항목 클릭 시
    $('#tab li').on('click',function(){
        var index = $(this).index(); // this는 #tab li지만 index() 현재 index 얻어오면 클릭이벤트가 발생된 li의 index를 반환
        //선택된 메뉴의 이미지를 파랑배경부분이 보이게 변경
        //모든 탭 메뉴 항목에 선택시 적용되었던 CSS 효과 제거
        $('#tab li').removeClass('selectedItem');
        //클릭한 항목에만 선택한 CSS 적용
        $(this).addClass('selectedItem');


        //콘텐츠 이미지 변경
        // $tabContent의 모든 div 숨기고 - 모든 content 이미지 숨기기
        $tabContent.css('display','none');
        //클릭한 탭 메뉴 항목의 index에 해당되는 div만 보이게 설정
        $tabContent.eq(index).css('display','block');
    });//click 종료



}); // ready 종료