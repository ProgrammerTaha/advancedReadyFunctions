const shoutGreetings = arr => {
  const shoutGreetings = [];
  arr.forEach(elem => {
    shoutGreetings.push(`${elem.toUpperCase()}!`);
  });
  return shoutGreetings;
};

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings));
