function solution(s){
  let str = '';

  for(let i = 0; i < s; i++) str += i % 2 ? "박" : "수"
  
  return str;
}