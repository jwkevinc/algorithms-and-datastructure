function translatePigLatin(str) {

    var vowels = ['a', 'e', 'i', 'o', 'u'];

    for (var i = 0; i < str.length; i++) {
        var idx = vowels.indexOf(str[i]);
        if (idx != -1) {
            if (i === 0)
                return (str + "way");
            else {
                var front = str.substr(0, i) + "ay";
                var ans = str.substr(i, str.length - 1) + front;
                return ans;
            }
            break;
        }
    }

    return str;
}

translatePigLatin("consonant");
