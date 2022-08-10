/*
* slideShow.js
 */

$(function(){
    // 현재 이미지의 index값 저장할 변수 생성
    var moveIndex = 0
    // 초기 슬라이더 위치 랜덤하게 지정
         // 이미지 인덱스를 랜덤하게 설정
    var randomNumber = Math.floor(Math.random()*5); // 0-4 사이의 정수 랜덤하게 생성
    moveSlide(randomNumber)

    // 슬라이드 패널을 움직여주는 사용자 정의 함수
    function moveSlide(index) {
         //전달받은 index값을 다른 변수(전역변수-현재 이미지 index)에 저장
         moveIndex = index;


         //슬라이드 이동 거리 계산
         var moveLeft = -(index * 1280); //왼쪽으로 이동거리
        // 슬라이드 이동
         $('#slidePanel').animate({'left':moveLeft},'slow');
     }


    //prev 버튼 클릭 앞 이미지로 이동
    $('#prevButton').on('click',function(){
        //현재 이미지가 첫번째 이미지면 버튼반응을 안함
        //첫번째 이미지(index =0)가 아닐 경우에만 버튼 작동
        if(moveIndex != 0)//첫번째가 아니라면
        {//현재 이미지의 인덱스 -1 한 인덱스값을 이용해서 함수 호출
            moveIndex = moveIndex-1;
            moveSlide(moveIndex);}
    });

    //next 버튼 클릭 뒤 이미지로 이동
    $('#nextButton').on('click',function(){
        //현재 이미지가 마지막 이미지면 버튼반응을 안함
        //마지막 이미지(index =4)가 아닐 경우에만 버튼 작동
        if(moveIndex != 4)//마지막 이미지가 아니라면
        {//현재 이미지의 인덱스 +1 한 인덱스값을 이용해서 함수 호출
            moveIndex = moveIndex+1;
            moveSlide(moveIndex);}
    });

    //각 컨트롤 버튼에 대해
    $('.controlButton').each(function(index){
        $(this).hover(
            function(){ // 마우스가 이미지에 진입하면
                $(this).attr('src','image/controlButton2.png');
            },
            function(){ // 마우스가 이미지에서 나오면
                $(this).attr('src','image/controlButton1.png');
            }
        ); //hover 끝
        // 클릭했을 때 현재 인덱스 값을 moveSlide()함수에 전달
        $(this).on('click',function(){
            moveSlide(index);
        }); //click 끝
    }); //each 끝

    //3초마다 자동으로 슬라이드 이동
    setInterval(function(){
        if(moveIndex != 4) // 마지막 이미지가 아니면
            moveIndex = moveIndex +1
        else //마지막 이미지
            moveIndex = 0; // 첫번재 이밎로 설정
        moveSlide(moveIndex);
    },3000); //setInterval 끝


}); //ready 끝