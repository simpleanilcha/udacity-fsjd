var a = 4;
var b = 6;
var c = '5';
var d = 'cat';
var multiply2 = function (num1, num2) {
    console.log(num1 + " * " + num2 + " =", num1 * num2);
};
var add2 = function (num1, num2) {
    console.log(num1 + " + " + num2 + " =", num1 + num2);
};
multiply2(a, b);
multiply2(a, c);
// multiply2(a, d)
add2(a, b);
add2(a, c);
add2(a, d);
