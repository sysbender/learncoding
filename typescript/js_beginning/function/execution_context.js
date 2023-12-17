// global execution context + function execution content for each function

/**
 * memory creation
 * 1. create global object (window for browser)
 * 2. this bind to global object
 * 3. memory heap - store variable and function reference
 * 4. store function and variable in global execution context and set to undefined
 * execution
 * 1. execute code line by line
 * 2. create a new context for each function call
 */

// memory creation: variable are set undefine, function are created and initlized
// execution phrase: variable are set, function declarion are skipped, invoke function
