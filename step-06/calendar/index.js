const weekly = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const daysWrap = document.querySelector("#days-wrap");
const day = document.querySelector("#day");

const today = new Date();
let todayYear = today.getFullYear();
let todayDate = today.getDate();
let todayMonth = today.getMonth();
let todayDay = today.getDay();

let changeDay = null;

/* ==================================================================== */

loadCalendar(todayYear, todayMonth);

function loadCalendar(y, m) {
  const first = new Date(y, m, 1).getDay();
  const last = new Date(y, m + 1, 0).getDate();
  const total = first + last;

  // 칸 생성
  while (daysWrap.hasChildNodes()) {
    daysWrap.removeChild(daysWrap.firstChild);
  }

  for (let i = 0; i < total; i++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    daysWrap.appendChild(div);
  }

  let cells = document.querySelectorAll("#days-wrap .cell");

  // 칸에 날짜 삽입
  for (let j = 0; j < total; j++) {
    if (first + j === total) {
      break;
    }

    cells[first + j].textContent = j + 1;
  }

  // 날짜 보여주기
  if (today.getMonth() === todayMonth) {
    changeDay = today;
    cells[first + todayDate - 1].style.color = 'red';

    day.textContent = `${changeDay.getFullYear()}/${changeDay.getMonth() + 1}/${changeDay.getDate()} (${weekly[
      changeDay.getDay()
    ].toUpperCase()})`;
  } else {
    changeDay = new Date(y, m);
    
    day.textContent = `${changeDay.getFullYear()}/${changeDay.getMonth() + 1}/1 (${weekly[
      first
    ].toUpperCase()})`;
  }
}

// // 우측 화살표를 클릭 했을때, 다음 달의 요일 및 날짜 표기
document
  .querySelector(".btn-arrow-next")
  .addEventListener("click", function () {
    loadCalendar(todayYear, ++todayMonth);
  });

// // 좌측 화살표를 클릭 했을때, 이전 달의 요일 및 날짜 표기
document
  .querySelector(".btn-arrow-prev")
  .addEventListener("click", function () {
    loadCalendar(todayYear, --todayMonth);
  });

// // 특정 날짜를 클릭 했을때, 상단의 요일 및 날짜 반영하기
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("cell")) {
    day.textContent = `${changeDay.getFullYear()}/${changeDay.getMonth() + 1}/${
      e.target.textContent
    } (${weekly[changeDay.getDay()].toUpperCase()})`;
  }
});
