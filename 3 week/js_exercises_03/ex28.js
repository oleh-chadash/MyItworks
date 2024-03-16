function findCommonElements(arr1, arr2) {
    let commonElements = []; // Array to hold common elements

    // Outer loop iterates over the first array
    for (let i = 0; i < arr1.length; i++) {
        // Inner loop iterates over the second array
        for (let j = 0; j < arr2.length; j++) {
            // Check if the current element from the first array exists in the second array
            if (arr1[i] === arr2[j]) {
                // Check if the element is already in the result array to avoid duplicates
                if (!commonElements.includes(arr1[i])) {
                    commonElements.push(arr1[i]); // Add the common element to the result array
                }
            }
        }
    }

    // Check if there are no common elements
    if (commonElements.length === 0) {
        return false; // Return false if no common elements were found
    }

    return commonElements; // Return the array of common elements
}

// Given arrays
const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];