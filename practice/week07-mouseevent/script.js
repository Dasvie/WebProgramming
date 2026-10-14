// 가장 먼저 하는 일: consol에 log로 해당 파일이 연결되었는지 확인해보기

console.log("complete");
console.log($(window).width());
console.log($(window).height());
// 현재 브라우저 창의 가로 너비(px)와 세로 길이를 console에 출력함

// 현재 브라우저 창의 가로세로 길이를 변수에 따라 각각 저장해서 사용가능
let wheight = $(window).height();
let wWidth = $(window).width();

// mousemove 이벤트마다 xy 값으로 적용가능

// mousemove가 일어날 때마다 마우스 x, y 값으로 function 진행

$(document).mousemove(function (e) {
  // function(e)의 e는 event를 의미하며 , 문서(document)에서 mousemove 
  // 이벤트가 발생할 때마다 function이 실행되며, e라는 변수에 마우스 이벤트의 정보가 담김

  $("#status").html(e.pageX + "," + e.pageY);
  // #은 css 중에서 id 요소 지칭함
  // id가 status인 요소에 마우스 커서의 x,y 좌표값을 html로 출력함
  // pageX, pageY는 마우스 이벤트의 속성으로, 마우스 커서의 x,y 좌표값을 의미함

  $(".box").css("width", e.pageX);
  $(".box").css("height", e.pageY);
  // class가 box로 적용된 요소 높이, 너비
  // 마우스 커서의 x,y 좌표값으로 css 속성인 width, height를 적용함
  // box의 높이, 너비가 마우스 커서의 x,y 좌표값에 따라 변함
});

// 배경 조정 
$(document).on("mousemove", function (event) {
  // 마우스의 x y 값에 변수 지정
  let mouseX = event.pageX;
  let mouseY = event.pageY;

  // 1 마우스 값에 따라 배경 이미지 위치 조정
  $(".bg-img").css("object-position", `${mouseX / 10}% ${mouseY / 10}%`);


  // 2. 마우스 커서에 고양이가 따라다니도록 함
  // 고양이 이미지의 가로세로 너비를 각각 변수에 할당함.

  let imgWidth = $(".cat-img").width();
  let imgHeight = $(".cat-img").height();

  // 이미지에 left,top 값의 변화를 위에서 선언한 mouse X,Y 좌표값을
  // 가져와서 적용함
  //   $(".cat-img").css("left", mouseX - imgWidth + "px");
  //   $(".cat-img").css("top", mouseY - imgHeight + "px");

  $(".cat-img").css("left", mouseX - imgWidth / 2 + "px");
  $(".cat-img").css("top", mouseY - imgHeight / 2 + "px");
});
