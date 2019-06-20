function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }
 console.log(palindrome('k a surusak'));