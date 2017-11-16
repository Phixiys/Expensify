// const person = {
//   name: "Sasa",
//   age: 38,
//   location: {
//     city: "Stockholm",
//     temp: 5
//   }
// };

// const { name, age } = person;
// console.log(`${name} is ${age}.`);

// const { city, temp } = person.location;
// if (city && temp) {
//   console.log(`It's ${temp} in ${city}`);
// }


// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName); // Penguin, Self-Published


/**
 *  Array Destructuring
 */

//  const adress = [ '1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147' ];

//  const [ , city, state = 'New York' ] = adress;

//  console.log(`You are in ${city} ${state}`);




 const item = [ 'Coffee (iced)', '$3.00', '$3.50', '$3.75' ];

 const [ itemName, , mediumPrice ] = item;

 console.log(`A medium ${itemName} costs ${mediumPrice}`);