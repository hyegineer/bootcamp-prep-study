const weekly = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const daysWrap = document.querySelector("#days-wrap");
const day = document.querySelector("#day");

const today = new Date();
let todayYear = today.getFullYear();
let todayDate = today.getDate();
let todayMonth = today.getMonth();
let todayDay = today.getDay();

/* ==================================================================== */

loadCalendar(todayYear, todayMonth);

function loadCalendar(y, m){
  const first = new Date(y, m, 1).getDay();
  const last = new Date(y, m + 1, 0).getDate();
  const total = first + last;

  // 칸 생성
  while(daysWrap.hasChildNodes()){
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
}

// // 우측 화살표를 클릭 했을때, 다음 달의 요일 및 날짜 표기
document.querySelector('.btn-arrow-next').addEventListener('click', function(){
  loadCalendar(year, ++month)
})

// // 좌측 화살표를 클릭 했을때, 이전 달의 요일 및 날짜 표기
document.querySelector('.btn-arrow-prev').addEventListener('click', function(){
  loadCalendar(year, --month)
})

// // 특정 날짜를 클릭 했을때, 상단의 요일 및 날짜 반영하기
