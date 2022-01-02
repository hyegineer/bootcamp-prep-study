let randomNumber = '076';

document.querySelector('#btn-start').addEventListener('click', function(){
  
  // 게임 시작 버튼 클릭시 랜덤한 세자리 숫자 만들기
  // randomNumber = '';

  // for(let i = 0; i < 3; i++){
  //   randomNumber += Math.floor(Math.random() * 10);
  // }

  // 숫자 입력칸 만들기
  const inputNumber = prompt('숫자를 입력해주세요.');
 
  if(!Number(inputNumber)){ // 숫자형태로 입력해야함
    alert('숫자를 입력해주세요');
  }else{ // 한자리 내지 네자리 숫자는 안됌
    if(inputNumber.length !== 3){ alert('세자리 숫자를 입력해주세요.');}
    console.log(randomNumber.length, inputNumber.length)
  }

  // 스트라이크 로직
  let strike = 0;

  for(let i = 0; i < randomNumber.length; i++){
    if(randomNumber[i] === inputNumber[i]){
      strike += 1;
    }
  }

  console.log('스트라이크는', strike, '개 입니다');

  // 볼 로직
  let ball = 0;

  for(let i = 0; i < randomNumber.length; i++){
    for(let j = 0; j < inputNumber.length; j++){
      if(randomNumber[i] === inputNumber[j]){
        ball += 1;
      }
    }
  }

  console.log('볼은', ball, '개 입니다');
})

// 각 자리 별로 비교하고, 같은 자리에 같은 숫자가 몇개 있는지 판별합니다. (스트라이크 갯수)
// 예를 들어 
// 352
// 351
// 일 때, 1번째 자리 X 두번째 자리 O 세번째 자리 O - 스트라이크 2

// 각 자리 별로 비교하고, 다른 자리에 같은 숫자가 몇개 있는지 판별합니다. (볼 갯수)
// 예를 들어
// 352
// 039 // 다른 자리에 같은 숫자 3 하나 - 볼 1
// 239 // 다른 자리에 같은 숫자 2, 3 - 볼 2 
// 111 // 다른 자리에 죄다 다른 숫자 - 볼 0