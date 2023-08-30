function palindrome(str) {
    let regex = /[\W_]/g;
  
    let newStr = str.toLowerCase().replace(regex, "");
   
    let reversed = newStr
    .split("")
    .reverse()
    .join("");
  
      if (reversed === newStr) return true;
      return false;
  }
    
  
  palindrome("eye");