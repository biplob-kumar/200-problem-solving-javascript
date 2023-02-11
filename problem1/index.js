
// Write a JavaScript function that takes a string and returns the number of vowels in this string.  

var vowels = ["a", "e", "i", "o", "u"]
function countVowles(sentence) {
    let count = 0
    var letter = Array.from(sentence);
    letter.forEach(function (value) {
        if (vowels.includes(value)) {
            count++
        }
    })
    return count
}
console.log(countVowles(["a", "e", "i", "o", "u"]));




