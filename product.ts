//  Task  4 Product Interface
interface Product {
    name: string;
    price: number;
}






// Function to calculate the total price of all products
function calculateTotalPrice(products: Product[]): number {
    // Validate input: Check if the argument is an array of Product objects
    if (!Array.isArray(products) || products.length === 0) {
        throw new Error("Input must be a non-empty array of Product objects.");
    }

    // Validate each product in the array
    if (!products.every(product => typeof product.name === "string" && typeof product.price === "number")) {
        throw new Error("Each product must have a name (string) and price (number).");
    }

    // Use reduce to calculate the total price
    return products.reduce((total, product) => total + product.price, 0);
}

// Example usage:
try {
    const exampleProducts: Product[] = [
        { name: 'Laptop', price: 1000 },
        { name: 'Headphones', price: 200 },
        { name: 'Mouse', price: 50 },
    ];
    console.log(calculateTotalPrice(exampleProducts));
    // Output: 1250
} catch (error) {
    console.error(error.message);
}



//  Task  5 Function to validate an email address
function validateEmail(email: string): boolean {
    // Basic regular expression for validating an email address
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the email against the pattern
    return emailPattern.test(email);
}

// Example usage:
console.log(validateEmail('user@example.com')); // Output: true
console.log(validateEmail('invalid-email'));    // Output: false
