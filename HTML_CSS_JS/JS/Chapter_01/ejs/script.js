id=prompt("아이디 입력");
if(id == "admin"){
    password=prompt("비밀번호 입력");
    if(password == "12345"){
        location.href="login.html"; //location: 페이지 넘길때 js 쓰는 것, 위치 지정
    }else{
        location.href="error.html"
    }
}else{
    location.href="error.html"
}

// 세션: 쇼핑몰 장바구니 처럼 기간, 정보의 유지기간을 주고 정보담기 / 쿠키: 헨젤과 그레텔처럼 발자취 쿠키를 의미 모든 행동 클릭등의 사용자 정보가 담김