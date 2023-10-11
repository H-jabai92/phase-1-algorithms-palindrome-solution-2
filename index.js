


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

function comp(word) {
    const wordAr = word.split("")
    if (wordAr[0] == wordAr[wordAr.length-1]) {
        return true
    } else {
        return false
    }
    
}
    console.log(comp("mome"))


// You can run `node index.js` to view these console logs
// if (require.main === module) {
//   // add your own custom tests in here
//   console.log("Expecting: true");
//   console.log("=>", isPalindrome("racecar"));

//   console.log("");

//   console.log("Expecting: false");
//   console.log("=>", isPalindrome("robot"));
// }

// module.exports = isPalindrome;
