// document dom 시작은 내부에서 할때 / 외부로 다하고 해야할땐 window
window.addEventListener("load", function(){
    var carousels = document.getElementsByClassName("carousel");

    //캐러셀 이벤트를 등록
    for(var i=0; i<carousels.length; i++){
        addEventToCarousel(carousels[i]);
    }
});

//이미지 크기를 받아서 슬라이드 버튼이벤트에 등록하는 로직 구현
function addEventToCarousel(carouselElem){
    var ulElem = carouselElem.querySelector("ul");
    var liElems = ulElem.querySelectorAll("li");

    // 너비값 조정
    // clientWidth 는 요소의 내용 영역의 너비를 측정함
    var liWidth = liElems[0].clientWidth; // liWidth : 600, 첫번째 그림 값 자동저장
    var adjustedWidth = liElems.length*liWidth;
    ulElem.style.width = adjustedWidth;


    // 슬라이드 버튼 이벤트 등록
    var slideButtons = carouselElem.querySelectorAll(".slide");
    // slide left/right 모두 적용하기 위해서 for문 사용
    for(var i=0; i<slideButtons.length; i++){
        slideButtons[i].addEventListener(
            "click", createListenerSlide(carouselElem)
        );
    }
}

// 이벤트가 발생한 left/right 버튼에 따라 슬라이드가 작동하도록 구현하는 함수
function createListenerSlide(carouselElem){
    return function(event) {
        // event.currentTarget 는 현재 이벤트가 발생하는 요소를 나타냄
        // 즉 현재 클릭한 버튼 
        // 이전 chapter4-11 참고
        var clickedButton=event.currentTarget;

        //li 요소 가져오기
        var liElems = carouselElem.querySelectorAll("li")
        // li 요소 내의 이미지의 갯수
        var liCount = liElems.length;
        // <div class="carousel" data=0> -> index 값 0 가져오기
        var currentIndex = carouselElem.attributes.data.value; // attributes :속성

        // 슬라이드 버튼 체크
        // 0,1,2,3,4  -> 인덱스 번호는 4개이므로 0~3 이나와야하기에 -1
        if(clickedButton.className.includes("right") && currentIndex < liCount -1){
            currentIndex++;
            // 현재 그림의 위치(currentIndex)로 이미지 스크롤
            scrollDiv(carouselElem, currentIndex);
        }else if(clickedButton.className.includes("left") && currentIndex > 0){
            currentIndex--;
            scrollDiv(carouselElem, currentIndex);
        }

        // 인디케이터 업데이트
        updateIndicator(carouselElem, currentIndex);
        // 슬라이드 버튼 보여줌 여부 결정 로직
        updateSlideButtonVisible(carouselElem, currentIndex, liCount);

        // 새롭게 보여지는 이미지 인덱스 값을 현재 data값으로 업데이트
        carouselElem.attributes.data.value = currentIndex;
    };
}

function scrollDiv(carouselElem, nextIndex){
    var scrollable= carouselElem.querySelector("div");
    var liWidth= scrollable.clientWidth;
    var newLeft= liWidth*nextIndex; // 600*3 = 1800
    scrollable.scrollTo({left: newLeft, behavior:"smooth"});
}

function updateIndicator(carouselElem, currentIndex){
    var indicators = carouselElem.querySelectorAll("footer > div");

    for(var i=0; i<indicators.length; i++){
        if(currentIndex == i){
            indicators[i].className= "active";
        } else {
            indicators[i].className= "";
        }
    }
}

function updateSlideButtonVisible(carouselElem, currentIndex, liCount){
    var left= carouselElem.querySelector(".slide-left")
    var right= carouselElem.querySelector(".slide-right")

    if(currentIndex > 0){
        left.style.display="block";
    } else {
        left.style.display="none";
    }

    if(currentIndex < liCount - 1){
        right.style.display="block";
    } else {
        right.style.display="none";
    }
}