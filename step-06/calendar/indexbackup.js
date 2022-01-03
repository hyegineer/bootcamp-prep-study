console.log("hello, vanilla.");

// TODO
const today = new Date();
const weekly = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

// 오늘의 현재 요일 표기
const day = today.getDay();

// 오늘의 현재 날짜 표기
const date = today.getDate();

// 오늘의 현재 월 표기
const month = today.getMonth();

// 오늘의 현재 연도 표기
const year = today.getFullYear();

// 현재 월의 1일이 무슨 요일인지 판별하고, 해당 요일 라벨링에 1일 표기하기
const firstDay = new Date(year, month, 1).getDay();
console.log(weekly[firstDay])

for(let i = 0; i <= 37; i++){
  const div = document.createElement('div');

  div.classList.add('cell');
  document.querySelector('#days-wrap').appendChild(div);
}

const cells = document.querySelectorAll('#days-wrap .cell');


cells[firstDay].textContent = 1;
cells[firstDay + 1].textContent = 2;
cells[firstDay + 2].textContent = 3;
cells[firstDay + 3].textContent = 4;
cells[firstDay + 4].textContent = 5;
cells[firstDay + 5].textContent = 6;
cells[firstDay + 6].textContent = 7;
cells[firstDay + 7].textContent = 8;
cells[firstDay + 8].textContent = 9;
cells[firstDay + 9].textContent = 10;
cells[firstDay + 10].textContent = 11;
cells[firstDay + 11].textContent = 12;
cells[firstDay + 12].textContent = 13;
cells[firstDay + 13].textContent = 14;
cells[firstDay + 14].textContent = 15;
cells[firstDay + 15].textContent = 16;
cells[firstDay + 16].textContent = 17;
cells[firstDay + 17].textContent = 18;
cells[firstDay + 18].textContent = 19;
cells[firstDay + 19].textContent = 20;
cells[firstDay + 20].textContent = 21;
cells[firstDay + 21].textContent = 22;
cells[firstDay + 22].textContent = 23;
cells[firstDay + 23].textContent = 24;
cells[firstDay + 24].textContent = 25;
cells[firstDay + 25].textContent = 26;
cells[firstDay + 26].textContent = 27;
cells[firstDay + 27].textContent = 28;
cells[firstDay + 28].textContent = 29;
cells[firstDay + 29].textContent = 30;
cells[firstDay + 30].textContent = 31;


// // 현재 월의 마지막 날짜까지 달력에 표기하기
// const lastDay = new Date(year, month + 1, 0).getDate();
// console.log(lastDay)

// let thisMonthDays = [
//   {day: 6, date: 1},
//   {day: 0, date: 2},
//   {day: 1, date: 3},
//   {day: 2, date: 4},
// ];

// for(let i = 0; i <= lastDay; i++){
//   if(i === 0){
//     continue;
//   }
//   let dateObj = {};
// }

// weekly[6] = 1;
// weekly[0] = 2;
// weekly[1] = 3;
// weekly[2] = 4;
// weekly[3] = 5;
// weekly[4] = 6;
// weekly[5] = 7;
// weekly[6] = 8;
// weekly[0] = 9;
// weekly[1] = 10;
// weekly[2] = 11;
// weekly[3] = 12;
// weekly[4] = 13;
// weekly[5] = 14;
// weekly[6] = 15;
// weekly[0] = 16;
// weekly[1] = 17;

// // 우측 화살표를 클릭 했을때, 다음 달의 요일 및 날짜 표기
// // 좌측 화살표를 클릭 했을때, 이전 달의 요일 및 날짜 표기
// // 특정 날짜를 클릭 했을때, 상단의 요일 및 날짜 반영하기