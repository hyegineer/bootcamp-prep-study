var word = "dolphin";
var sentence = "Where did Jane get the dolphin from, John?";

var indexOfD = sentence.indexOf("dolphin");
var indexOfN = indexOfD + (word.length - 1);

console.log(
  `sentence('${sentence}')에서의 해당 word('${word}')의 시작인덱스는 ${indexOfD}이고, 끝인덱스는 ${indexOfN}입니다.`
);
