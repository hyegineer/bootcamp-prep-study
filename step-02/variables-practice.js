/*

  Quiz #1
  콘솔에 표기된 오류 메시지를 잘 읽고 아래 코드가 정상적으로 작동하기 위해 필요한 내용을 추가해보세요.

*/

const myName = "정길동";
// myName이 not defined 정의되지 않아 오류가 났다. introduction보다 먼저 정의를 해줘야 오류가 안남
const introduction = "제 이름은 " + myName + "입니다.";

alert(introduction);

/*

  Quiz #2
  콘솔에 표기된 오류 메시지를 잘 읽고 아래 코드가 정상적으로 작동하도록 수정해주세요.

*/

// const age = 30; // TODO: 이 줄을 고쳐주세요.
let age = 30;
// const 가 아니라 let으로 선언해야한다. 왜냐면 const는 변수 재할당 및 재선언이 안되는데 let은 되기 때문!

alert(`현재 제 나이는 ${age}살 입니다.`);

age = age + 1;

alert(`내년에 제 나이는 ${age}살 입니다.`);

/*

  Quiz #3
  콘솔에 표기된 오류 메시지를 잘 읽고 아래 코드가 정상적으로 작동하도록 수정해주세요.

*/

const course = "Bootcamp";
// 자리 바꿔야함, 위에서 선언해야지 아래 alert 내장함수가 course라는 변수 읽을 수 있음
alert(`Hi I am getting ready for ${course}`);

// const course = "Bootcamp";

/*

  Quiz #4
  콘솔에 표기된 오류 메시지를 잘 읽고 아래 코드가 정상적으로 작동하도록 수정해주세요.

  오류가 발생하지 않고 경고창이 나타난다면, 경고창에 표기되는 메시지는 크게 관계없습니다.
  가장 중요한 것은 어떤 이유에서 발생한 오류였는지 이해하는 것입니다.
  
*/

// Identifier 'course' has already been declared 라는 에러가 뜸.

// const course = "Bootcamp";
let course = "Bootcamp"; // 변수에 재할당을 가능하게 할 때는 let으로 선언해야한다.
// const course = "Bootcamp Prep";
course = "Bootcamp Prep"; // 그리고 let을 앞에 작성하지않고 이미 선언했던 변수에 재할당을 시켜줌

alert(`Hi I am getting ready for ${course}`);
// 그러면 오류를 뱉지않는다

/* 느낀점: 콘솔에러를 보고 해결하는 방법을 숙지할 수 있어서 좋았다! */
