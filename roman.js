var o = [1000, 500, 100, 50, 10, 9, 5, 4, 1];
var j = ["M", "D", "C", "L", "X", "IX", "V", "IV", "I"];


// the order of subtraction is important
function roman(num) {
    var ans = "";
    for (var i = 0; i < o.length; i++) {
        while (o[i] <= num) {
            num -= o[i];
            ans += j[i];
        }
    }
    console.log(ans);
}
