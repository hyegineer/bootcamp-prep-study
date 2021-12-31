// 1. 첫번째 풀이과정

function solution(s) {
  let center = s.length / 2;
  let str = '';

  if(s.length % 2 === 0){ // 짝수일 때
      str += s[Math.round(center) - 1];
      str += s[Math.round(center)];
  }else{
      str += s[Math.floor(center)];
  }

  return str;
}
/* 문자열의 길이 나누기 2한 값에서 요리조리 해서 Math.round를 했다가 Math.floor를 했다가 중구난방이다.
5초 후 미래의 내가 봐도 한심하다. 왜 저렇게 한걸까? ㅋㅋㅋㅋㅋㅋㅋㅋ ㅠㅠ 
반올림을 하나 반내림을 하나 어차피 가운데 숫자로만 이용해서 메소드 종류별로 쓸 필요가 없었는데.. */

// 2. 두번째 풀이과정

function solution(s) {
  let center = Math.floor(s.length / 2);
  let str = '';
     
  if(s.length % 2 === 0){ // 짝수일 때
      str += s[center - 1];
      str += s[center];
  }else{
      str += s[center];
  }

  return str;
}
/* 굳이 Math 객체의 메소드를 두개 쓸 필요 없이 해결이 되었다. */

// 3. 세번째 풀이과정

function solution(s) {
  let center = Math.floor(s.length / 2);
     
  return s.length % 2 === 0 ? s[center-1]+s[center] : s[center];
}

/* 삼항연산자와 연결연산자를 이용해 개행을 띄우지 않고 좀 더 간결하게 표현이 되었다. 
str 같은 굳이 필요없는 변수선언을 하지 않아서 함수처리속도가 빠를 것 같다고 생각했는데 
가산점 없는거보면 성능은 거기서 거긴가보다. */