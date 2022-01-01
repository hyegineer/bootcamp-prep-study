document.querySelector('#change-button').addEventListener('click', function(){
  document.querySelector('#app').style.backgroundColor = `#${generateHex()}`;
  document.querySelector('#hex-code').textContent = `#${generateHex()}`;
})

function generateHex(){
  const hexCodes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']; // 구성하는 숫자 및 알파벳

  // 배열 length 중 랜덤한 index 추출해서 반복문 6번 돌리면 되지 않을까?!
  // const randomCode = Math.random();
  let result = '';

  for(let i = 0; i < 6; i++){
    let randomCode = Math.floor(Math.random() * hexCodes.length)

    result += hexCodes[randomCode];
  }

  return result;
}