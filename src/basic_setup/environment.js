/* JavaScript can run both on client side (in browser) or on server-side (node)
 * All the example used can run in both environment. The result might have slight difference
 */

// run with client is simply open Chrome console, then copy/paste the code
self === this;
self === window.self;
console.log(this); // Show be Window object of the browser

// run with server, you'll need to install Node.js running environment. Run with ```node example.js```
console.log(this); // will be empty object {}
