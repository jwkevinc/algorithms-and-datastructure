function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line

    var keys = Object.keys(source);

    var res = collection.filter(function(collect) {

        for (var i = 0; i < keys.length; i++) {
            if (collect.hasOwnProperty(keys[i])) {
                if (collect[keys[i]] !== source[keys[i]])
                    return false;
            } else
                return false;
        }

        return true;

    });

    return res;
}

whatIsInAName([{
    first: "Romeo",
    last: "Montague"
}, {
    first: "Mercutio",
    last: null
}, {
    first: "Tybalt",
    last: "Capulet"
}], {
    last: "Capulet"
});
