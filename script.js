// complete the given function

function palindrome(str){
// Convert the string to lowercase and remove non-alphanumeric characters
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Compare the reversed string with the original string
  return str === str.split('').reverse().join('');
}
module.exports = palindrome
