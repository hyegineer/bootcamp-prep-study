/*

  Quiz #1
  아래 코드에서 경고창이 나타나게 하기 위해 코드를 수정해보세요.

*/

// const isTrue = false; // 이 부분을 고쳐보세요.
const isTrue = true;

if (isTrue) {
  alert("Hi I can see you!");
}

/*

  Quiz #2
  아래 코드에서 경고창이 나타나지 않게 하기 위해 코드를 수정해보세요.

*/

// const isFalse = new Boolean(false); // 이 부분을 고쳐보세요.
// Boolean 객체를 굳이 생성해서 만들어서 사용하지 말 것. MDN에서도 new Boolean은 사용하지 말라고 권장하고 있다.
// 값이 false인 Boolean 객체는 값이 false라도, 막상 Boolean 함수로 판별하면 참이 나오기 때문에 혼란 야기
const isFalse = false; 

if (isFalse) {
  alert("Hi I can see you!");
}

/*

  Quiz #3
  아래 코드에서 경고창이 나타나지 않게 하기 위해 코드를 수정해보세요.

*/

const myName = "ken";
const yourName = "hyegineer"; // 여러분의 이름으로 변경해보세요.

// `===`은 양측이 같은지 판별해주는 비교 연산자입니다.
// 비교 연산자를 이용해 비교한 결과를 `isFalse`라는 변수에 대입하고 있습니다.
// 비교 연산자는 항상 `true` 혹은 `false` 중 하나의 결과를 도출합니다.
const isFalse = (myName === yourName);

if (isFalse) {
  alert("Hi I can see you!");
}