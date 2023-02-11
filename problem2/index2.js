// Write a JavaScript function that takes a string and returns the longest word within the string???????

function number(names) {
    var max = [0];
    for (i = 0; i < names.length; i++) {
        if (max < names[i]) {
            max = names[i]
        }
    }
    return "maximim number =" + max
}

console.log(number(["52", "56", "66", "70", "80", "90", "98", "99"]));