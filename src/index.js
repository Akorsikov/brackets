module.exports = function check(str, bracketsConfig) {
  
  if (str.length % 2 !== 0) return false;
  
  let tempStack;
  let kindBrackets;

    function isOpening (char, arrSquare) {
      for (let i = 0; i < arrSquare.length; i++) {
        if (arrSquare[i][0] === char) {
          kindBrackets = i;          
          return true;
        }
      }
      return false;
    }

    function isClosing (char, arrSquare) {
      for (let i = 0; i < arrSquare.length; i++) {
        if (arrSquare[i][1] === char) {          
          kindBrackets = i;          
          return true;
        }        
      }
      return false;
    }
    // Инициализация стека
    const stack = [];
    // Проходим по каждому символу в строке
    for (let bracket of str) {
      // Смотрим открывающий или закрывающий
      
      if (isOpening(bracket, bracketsConfig)) {
        if (bracketsConfig[kindBrackets][0] !== bracketsConfig[kindBrackets][1]) {
          stack.push(bracket);
        } else if (bracket === stack[stack.length - 1]) {
          stack.pop();
        } else stack.push(bracket);
        
      } else if (isClosing(bracket, bracketsConfig)) {
        // Если для закрывающего не нашлось открывающего, значит баланса нет       
        if (stack.pop() !== bracketsConfig[kindBrackets][0]) return false;        
      }
    }
    
    return stack.length === 0;
  };