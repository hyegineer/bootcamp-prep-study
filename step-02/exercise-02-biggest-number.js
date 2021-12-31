var a = 10;
var b = 50;
var c = 120;

consoleMaxNumber();

function consoleMaxNumber() {
  if (a > b) {
    if (a > c) {
      console.log("가장 큰 수: " + a);
    }
  }

  if (b > a) {
    if (b > c) {
      console.log("가장 큰 수: " + b);
    }
  }

  if (c > a) {
    if (c > b) {
      console.log("가장 큰 수: " + c);
    }
  }
}

// 돌아는 가는데 이렇게 되면 변수가 더더욱 많아질 때 어떻게 해결하지?
// 언젠가 질문할 수 있을 때 질문해야겠다.. TODO question
