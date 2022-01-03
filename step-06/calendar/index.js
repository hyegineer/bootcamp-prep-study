const today = new Date();
const weekly = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

/* ==================================================================== */

// 오늘의 현재 요일 표기
const day = today.getDay();
// 오늘의 현재 날짜 표기
const date = today.getDate();
// 오늘의 현재 월 표기
const month = today.getMonth();
// 오늘의 현재 연도 표기
const year = today.getFullYear();

/* ==================================================================== */

const firstOfMonth = new Date(year, month, 1).getDay();
const lastOfMonth = new Date(year, month + 1, 0).getDate();
const totalOfMonth = firstOfMonth + lastOfMonth;

// 날짜 칸 만들기
for (let i = 0; i < totalOfMonth; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  if (i === date + firstOfMonth - 1) {
    div.style.color = "red";
  }
  document.querySelector("#days-wrap").appendChild(div);
}

let cells = document.querySelectorAll("#days-wrap .cell");

for (let j = 0; j < totalOfMonth; j++) {
  if (firstOfMonth + j === totalOfMonth) {
    break;
  }

  cells[firstOfMonth + j].textContent = j + 1;
}

// // 우측 화살표를 클릭 했을때, 다음 달의 요일 및 날짜 표기
// // 좌측 화살표를 클릭 했을때, 이전 달의 요일 및 날짜 표기
// // 특정 날짜를 클릭 했을때, 상단의 요일 및 날짜 반영하기
