console.log("complete");

// 재생 버튼
$(".button-play").on("click", function () {

// css에서 past 관리하기
$("body").toggleClass("past");
$(".title-box").removeClass("plain");

// 기차소리 딱 맞춰서 나와야함 
document.getElementById("trainSound").currentTime = 0;
document.getElementById("trainSound").play();
});
 
// 모든 반응은 영화구성에 맞춰서 1979에 
$(".title-box").on("click", function () {
$(".title-box").toggleClass("plain");
});

// etc
$(".button-synopsis").on("click", function () {
$(".synopsis").toggleClass("open");
});