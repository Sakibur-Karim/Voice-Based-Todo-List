// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCpQkOMCpP_ImEpHbU4LyKOpuWqJLTmsTc',
  authDomain: 'todo-list-acb40.firebaseapp.com',
  projectId: 'todo-list-acb40',
  storageBucket: 'todo-list-acb40.appspot.com',
  messagingSenderId: '117835076599',
  appId: '1:117835076599:web:9237a902a220c84f6914f2',
  measurementId: 'G-NT0Y4ZCR3G',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const database = getFirestore(app)
