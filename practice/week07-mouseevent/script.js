// 가장 먼저 하는 일: consol에 log로 해당 파일이 연결되었는지 확인해보기

console.log("complete");
console.log($(window).width());
console.log($(window).height());
// 현재 브라우저 창의 가로 너비(px)와 세로 길이를 console에 출력함

// 마우스가 움직일 때 고양이만 커서를 따라오도록 함
$(document).on("mousemove", function (event) {
  let mouseX = event.clientX;
  let mouseY = event.clientY;

  // 고양이 이미지의 가로세로 너비를 각각 변수에 할당함.
  let imgWidth = $(".cat-img").width();
  let imgHeight = $(".cat-img").height();

  $(".cat-img").css("left", mouseX - imgWidth / 2 + "px");
  $(".cat-img").css("top", mouseY - imgHeight / 2 + "px");
});
