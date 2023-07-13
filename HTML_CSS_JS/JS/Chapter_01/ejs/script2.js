var id = prompt("아이디를 입력해주세요.");
var password = prompt("비밀번호를 입력해주세요.");

if (id == "std01" && password == "1111") {
location.href = "login.html";
} else if (id == "std02" && password == "2222") {
location.href = "login.html";
} else if (id == "std03" && password == "3333") {
location.href = "login.html";
} else {
location.href = "error.html";
}