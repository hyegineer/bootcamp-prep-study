let randomNumber = ''; // 랜덤 숫자
let life = 10; // 목숨
const startButton = document.querySelector('#btn-start');
const score = document.querySelector('#score');
const lifes = document.querySelectorAll('.life-wrap img');

startButton.addEventListener('click', function(){
  // 6. 게임 재시작 버튼
  if(life === 0){
    startButton.textContent = 'start!';
    startButton.classList.remove('colored');
    lifes.forEach(x => x.classList.remove('inactive'));
    life = 10;
  }

  // 1. 게임 시작 버튼 클릭시 랜덤한 세자리 숫자 만들기
  randomNumber = '';

  for(let i = 0; i < 3; i++){
    randomNumber += Math.floor(Math.random() * 10);
  }

  // 2. 숫자 입력 받기
  const inputNumber = prompt('숫자를 입력해주세요.');
 
  if(!Number(inputNumber)){
     // 숫자형태로 입력해야함
    alert('숫자를 입력해주세요'); 
    return;
  }else{ 
    // 한자리 내지 네자리 숫자는 안됌
    if(inputNumber.length !== 3){ alert('세자리 숫자를 입력해주세요.'); return}
    life--;
  }

  // 3. 스트라이크 & 볼 계산
  let strike = 0; // 스트라이크
  let ball = 0; // 볼

  for(let i = 0; i < randomNumber.length; i++){
    if(randomNumber[i] === inputNumber[i]){
      strike += 1;
    }else{
      for(let j = 0; j < inputNumber.length; j++){
        if(randomNumber[i] === inputNumber[j]){
          ball += 1;
        }
      }
    }
  }

  // 4. 화면에 스트라이크와 볼의 갯수를 표기
  score.textContent = strike === 0 && ball === 0 ? 'out!' : `${strike} Strike, ${ball} Ball`;

  // 5. 사용자가 10회까지 시도할 수 있도록 제한
  lifes[life].classList.add('inactive');

  if(life < 1){
    startButton.textContent = 'restart!';
    startButton.classList.add('colored');
  }
})