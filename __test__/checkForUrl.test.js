// Import the js file to test
import { checkForUrl } from "../src/client/js/urlChecker.js"

// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests    
describe("Testing the url checker functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Testing the checkForUrl() function", () => {
        // Define the input for the function, if any, in the form of variables/array
        window.alert = jest.fn();
        var input = 'http://www.google.com';
        var isUrl = checkForUrl(input);
        expect(global.alert).toHaveBeenCalledTimes(1);
        expect(isUrl).toBe(true);
    })
});

