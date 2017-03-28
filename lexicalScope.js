function flatten(arr) {

    var res = [];
    var arr2 = arr;
    flatten2(arr2);

    // Lexical Scoping 
    function flatten2(arr) {

        arr.forEach(function(value) {
            if (Array.isArray(value)) {
                flatten2(value);
            } else {
                res.push(value);
            }
        });
    };
}
