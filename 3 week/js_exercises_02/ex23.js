function removeDuplicates(array) {
    let uniqueArray = [];

    for (let i = 0; i < array.length; i++) { 
        if (uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }

    return uniqueArray;
}
