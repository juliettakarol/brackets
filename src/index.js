module.exports = function check(str, bracketsConfig) {
    // Create a map for opening and closing brackets
    const bracketsMap = {};
    bracketsConfig.forEach(([open, close]) => {
        bracketsMap[open] = close;
    });

    const stack = [];

    for (const char of str) {
        if (bracketsMap[char]) {
            // Check for the case where the opening and closing bracket are the same
            if (char === bracketsMap[char] && stack[stack.length - 1] === char) {
                stack.pop(); // Pop if the last opened bracket is the same
            } else {
                stack.push(char); // Push the opening bracket
            }
        } else {
            // If it's a closing bracket, check for matching
            const lastOpen = stack.pop();
            if (bracketsMap[lastOpen] !== char) {
                return false; // Not matched
            }
        }
    }
    
    // Check if the stack is empty
    return stack.length === 0;
};