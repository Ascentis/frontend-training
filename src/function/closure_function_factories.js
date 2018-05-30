function greetingFactory(language) {
  return function (firstname, lastname) {
    if (language === "en") {
      console.log(`hello ${firstname} ${lastname}`);
    }

    if (language === "es") {
      console.log(`hola ${firstname} ${lastname}`);
    }
  };
}

var englishGreeting = greetingFactory("en");
var spanishGreeting = greetingFactory("es");

englishGreeting("John", "Wick");
spanishGreeting("Jason", "Bourn");
