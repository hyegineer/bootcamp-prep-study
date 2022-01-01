// 1. 페이지 로딩 시, 첫 번째 이미지 화면에 보이기
const imgObj = document.querySelector("#carousel-img");
let imgNumber = 1;

imgObj.src = `images/image-${imgNumber}.png`;

// 2. 페이지 로딩 시, 이미지 하단 dots들에 순서값 넣기
const dotsObj = document.querySelectorAll(".carousel-dots .dot");
for (let i = 0; i < dotsObj.length; i++) {
  dotsObj[i].dataset.imgNumber = i + 1;
}

document.body.addEventListener("click", function (e) {
  const className = e.target.classList; // 클릭객체 클래스명

  // 3. 좌,우측 화살표 작동
  if (className.contains("btn-arrow")) {
    if (className.contains("btn-arrow-prev")) {
      // 좌측 화살표 클릭시 이전 이미지 보여주기
      --imgNumber;

      // 1번째 이미지에서 좌측 화살표를 누를 경우, 5번째 이미지 보여주기
      if (imgNumber < 1) {
        imgNumber = 5;
      }
    }

    if (className.contains("btn-arrow-next")) {
      // 우측 화살표 클릭시 다음 이미지 보여주기
      ++imgNumber;

      // 5번째 이미지에서 우측 화살표를 누를 경우, 1번째 이미지 보여주기
      if (imgNumber > 5) {
        imgNumber = 1;
      }
    }
  }

  // 4. 이미지 하단 Dot 작동
  if (className.contains("dot")) {
    imgNumber = e.target.dataset.imgNumber;
  }
  
  // 이미지 src 변화
  imgObj.src = `images/image-${imgNumber}.png`;

  // dot에 active 효과 빼기
  for (let i = 0; i < dotsObj.length; i++) {
    dotsObj[i].classList.remove("active");
  }

  // dot에 active 효과 주기
  dotsObj[imgNumber - 1].classList.add("active");
});
