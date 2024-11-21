//  Task  2 Function to calculate the total and average of an array of numbers
function calculateTotalAndAverage(numbers) {
    // Validate input: Check if the argument is an array and not empty
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new Error("Input must be a non-empty array of numbers.");
    }

    // Validate that all elements in the array are numbers
    if (!numbers.every(num => typeof num === "number")) {
        throw new Error("All elements in the array must be numbers.");
    }

    // Use reduce to calculate the total
    const total = numbers.reduce((sum, number) => sum + number, 0);

    // Calculate the average
    const average = total / numbers.length;

    // Return the result as an object
    return { total, average };
}

// Example usage:
try {
    const exampleNumbers = [5, 15, 25, 35];
    console.log(calculateTotalAndAverage(exampleNumbers));
    // Output: { total: 80, average: 20 }
} catch (error) {
    console.error(error.message);
}





//Task  3  Function to remove duplicates from an array
function removeArrayDuplicates(array) {
    // Validate input: Check if the argument is an array
    if (!Array.isArray(array)) {
        throw new Error("Input must be an array.");
    }

    // Use Set to remove duplicates and convert back to an array
    return [...new Set(array)];
}

// Example usage:
try {
    const exampleArray = ['Apple', 'Banana', 'Apple', 'Orange'];
    console.log(removeArrayDuplicates(exampleArray));
    // Output: ['Apple', 'Banana', 'Orange']
} catch (error) {
    console.error(error.message);
}
