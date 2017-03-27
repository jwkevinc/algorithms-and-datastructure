function myReplace(str, before, after) {


    var ans = str.replace(before, function(word) {
        // Efficient way of checking if the first letter is capitalized
        if (word[0] == word[0].toUpperCase()) {
            return after[0].toUpperCase() + after.slice(1);
        } else {
            return after;
        }
    });

    return ans;
}


myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
