function greetingFactory(language) {
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
