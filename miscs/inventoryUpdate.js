function updateInventory(arr1, arr2) {

    // We flatten the array and use .indexOf to locate the item instead of iterating over the entire list.
    var a = [];
    if (arr1.length > 1) {
         a = arr1.reduce(function(prev, curr) {
            return prev.concat(curr);
        });
    }

    // Update the Inventory 
    arr2.forEach(function(item) {
        var idx = a.indexOf(item[1]);
        if (idx != -1)
            a[idx - 1] += item[0];
        else
            a = a.concat(item);
    });
    
    // put it back into 2D Array
    var res = [];
    for (var i = 0; i < a.length; i += 2) {
        res.push([a[i], a[i + 1]]);
    }

    // sort by the 2nd value (index 1) of 2D array
    res.sort(function(a, b) {
        if (a[1] > b[1]) 
            return 1;
        if (a[1] < b[1]) 
            return -1;
        return 0;
    });
    
    
    return res;
}

/* Test Cases */
/*
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]).length should return an array with a length of 6.
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []) should return [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]].
updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) should return [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].
updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]) should return [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]]
*/
