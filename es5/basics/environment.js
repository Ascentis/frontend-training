/* JavaScript can run both on client side (in browser) or on server-side (node)
 */

// The following example can only run in browser (Chrome) environment, because ```self``` is not available in node env
// run with client (browser like Chrome) is simply open Chrome console, then copy/paste the code
console.log(self === this); // true
console.log(self === window.self); // true
console.log(this); // Show be Window object of the browser

// run with server, you'll need to install Node.js running environment. Run with ```node example.js```
console.log(this); // will be empty object {}
