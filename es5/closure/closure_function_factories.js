/**
 * We can use JS closure to have a function factory
 * "Function Factory" is for generating functions, which means the returned value is a function
 * Not all language can do it, only language has function as "first class member" have this support.
 * This is a key concept of functional programming: function can be returned, and can be passed as argument
 */
function greetingFactory(language) {
  // language is "remembered by closure", when call englishGreeting or spanishGreeting, corresponding "language" is used
  // This is a js specific behavior, closure in simplest word: still remember things when outside the function scope
  return function(firstName, lastName) {
    if (language === 'en') {
      console.log(`hello ${firstName} ${lastName}`);
    }

    if (language === 'es') {
      console.log(`hola ${firstName} ${lastName}`);
    }
  };
}

var englishGreeting = greetingFactory('en');
var spanishGreeting = greetingFactory('es');

englishGreeting('John', 'Wick');
spanishGreeting('Jason', 'Bourn');
