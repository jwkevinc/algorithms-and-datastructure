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

// Example inventory lists
updateInventory([], [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
]);
