module.exports = function check(str, bracketsConfig) {
  
  if (str.length % 2 !== 0) return false;

  let array = [...str];  
  let indexFirstCloser;
  let indexCurrent;
  let kindBrackets;

  while (array.length > 0) {
    
    indexFirstCloser = array.length - 1;
    
    for (let i = 0; i < bracketsConfig.length; i++) {
      indexCurrent = array.indexOf((bracketsConfig[i])[1]);
      
      if (indexCurrent > 0 &&
        indexFirstCloser >= indexCurrent) {
        indexFirstCloser = indexCurrent;
        kindBrackets = i;
        
      }
      
    }
    
    if (array[indexFirstCloser - 1] === bracketsConfig[kindBrackets][0]) {
      array.splice(indexFirstCloser - 1, 2);      
    } else return false;
  }
  return true;
}
//console.log(check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]));
