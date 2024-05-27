function solution(arr) {
  let zeroCount = 0;
  let oneCount = 0;

  function compress(x, y, size){
      let current = arr[x][y];
      let allSame = true;
      
      for(let i = x; i < x + size; i++){
          for(let j = y; j < y + size; j++){
              if(arr[i][j] !== current){
                  allSame = false;
                  break;
              }
          }
          if (!allSame) break;
      }
      
      if(allSame){
          if(current === 0){
              zeroCount += 1;
          }
          else{
              oneCount += 1;
          }
      }
      else{
          size = size / 2;
          compress(x, y, size);
          compress(x, y + size, size);
          compress(x + size, y, size);
          compress(x + size, y + size, size);
      }
  }
  compress(0, 0, arr.length);  
  return [zeroCount, oneCount];
}
