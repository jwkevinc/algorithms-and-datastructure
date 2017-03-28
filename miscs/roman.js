function convertToRoman(num) {

    var o = [1000, 900, 500, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var j = ["M", "CM", "D", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    // the order of subtraction is important !
    var ans = "";
    for (var i = 0; i < o.length; i++) {
        while (o[i] <= num) {
            num -= o[i];
            ans += j[i];
        }
    }

    return ans;

}

