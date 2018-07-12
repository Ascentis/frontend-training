// object literal simply mean using {} to create object (instead of new keyword)

// without using object literals
var person = new Object();
person.firstName = 'John';
person.lastName = 'Wick';
person['city'] = 'NYC';

console.log('person', person);

// use object literals can make syntax more concise
var person2 = { firstName: 'John', lastName: 'Wick', city: 'NYC' };
console.log('person2', person2);

/* It's easy to see that using object literal is a simpler and concise way to init Object
 * They actually do the exactly same thing, so less code to reach same goal is always better
 */
