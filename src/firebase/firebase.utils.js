import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCLR3ABCZBAMulsD41-rRxpZ7cygXljnHI',
  authDomain: 'crawn-clothing-db.firebaseapp.com',
  databaseURL: 'https://crawn-clothing-db.firebaseio.com',
  projectId: 'crawn-clothing-db',
  storageBucket: 'crawn-clothing-db.appspot.com',
  messagingSenderId: '651334253432',
  appId: '1:651334253432:web:6e994c275466d60512268d',
  measurementId: 'G-6VBS2287R0'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exist) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

// [
//   {
//     users: {
//       // colection

//       kjh67djh: {
//         // document

//         displayName: 'yhua', // document
//         cartItem: {
//           //colection
//           akddfdfaksjd: {
//             //document
//             name: 'blue shoes'
//           },
//           akddfdfaksjd: {
//             name: 'blue shoes'
//           }
//         }
//       }
//     }
//   }
// ];
