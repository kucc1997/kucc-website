// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'kucc-dev.firebaseapp.com',
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: 'kucc-dev.appspot.com',
  messagingSenderId: '415891298021',
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: 'G-08Y6WQMCTB',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export default getFirestore()
