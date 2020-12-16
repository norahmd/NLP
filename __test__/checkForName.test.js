// Import the js file to test
import { checkForName } from "../src/client/js/nameChecker.js"

// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests    
describe("Testing the name checker functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Testing the checkForName() function", () => {
        // Define the input for the function, if any, in the form of variables/array
        window.alert = jest.fn();
        var input = 'Janeway'
        checkForName(input)
        expect(global.alert).toHaveBeenCalledTimes(1);
})});
