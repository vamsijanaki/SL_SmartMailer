// Function to validate the input fields

exports.validateFields = async (data, fields) => {
    console.log(data);
    // Define errors
    let errors = {};
    // Loop through fields
    for (let field of fields) {
        // Check if field is empty
        if (isEmpty(data[field])) {
            // Add error
            errors[field] = `${field} field is required`;
        }
    }
    // Check if errors is not empty
    if (!isEmpty(errors)) {
        // Throw error
        throw errors;
    }
}

// Function to check if input is empty
const isEmpty = (input) => {
    // Check if input is undefined, null or empty
    return (
        input === undefined || 
        input === null || 
        (typeof input === 'object' && Object.keys(input).length === 0) || 
        (typeof input === 'string' && input.trim().length === 0)
    );
}

// Function to check if input is an email
exports.isEmail = (email) => {
    // Define regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Return result
    return regex.test(email);
}



