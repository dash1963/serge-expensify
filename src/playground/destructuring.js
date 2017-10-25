
//
//   OBJECT DESTRUCTURING
//
            // console.log('destructuring')

            // const person = {
            //     name: 'Serge',
            //     age: 45,
            //     location: {
            //       city: 'chicago',
            //       temp: 80
            //     }
            // };

            // const {name: nombre = 'Serginho', age} = person;
            // const {city, temp: temperatura}  = person.location;

            // console.log(`${nombre} is ${age}`);
            // console.log(`It is ${temperatura} degrees in ${city}`);


const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

// Rename to 'publisherName'  and Set default to 'Self-Published'
const {name:publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);  //Penguin, Self-Published


//
// ARRAY DESTRUCTURING
//

const address = ['6219 N. Lenox Ave', 'Chicago', 'Illinois', '60646'];
console.log(`You are in ${address[1]} ${address[2]}`);

const [street, city, state, zip='60602'] = address;
console.log(`You address is:\n${street}\n${city}\n${state}\n${zip}`);

const [street1, , , zip1='60601'] = address;
console.log(`You are in ${street1} ${zip1}`);


const item = ['Cofffee (hot)', '$2.00', '$2.50','$2.75'];

const [smallCoffee,small] = item;
console.log(`A small ${smallCoffee} costs ${small}`)

const [mediumCoffee, ,medium] = item;
console.log(`A medium ${mediumCoffee} costs ${medium}`)

const [largeCoffee, , ,large] = item;
console.log(`A large ${largeCoffee} costs ${large}`)