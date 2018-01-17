import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBe6tiUic9sH0ZrBJo3bOpvytxPM_Ia-mo',
  authDomain: 'expensify-b6502.firebaseapp.com',
  databaseURL: 'https://expensify-b6502.firebaseio.com',
  projectId: 'expensify-b6502',
  storageBucket: 'expensify-b6502.appspot.com',
  messagingSenderId: '429333778314'
};

firebase.initializeApp(config);

const database = firebase.database();

// child_removed
database.ref('expenses').on('child_removed', snapshot => {
  console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', snapshot => {
  console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref('expenses').on('child_added', snapshot => {
  console.log(snapshot.key, snapshot.val());
});

// database.ref('expenses')
//   .once('value')
//   .then(snapshot => {
//     const expenses = [];

//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

// database.ref('expenses').on('value', snapshot => {
//   const expenses = [];

//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses);
// });

// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 109500,
//   createdAt: 3248764923743
// });
