import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyApqJCq17xaqELktH7bhGEjAb8nAi_6cKs',
    authDomain: 'message-poster.firebaseapp.com',
    databaseURL: 'https://message-poster.firebaseio.com',
    projectId: 'message-poster',
    storageBucket: 'message-poster.appspot.com',
    messagingSenderId: '356380662980',
    appId: '1:356380662980:web:da873328a10940608bfd91',
    measurementId: 'G-LLN54RV6BB'
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
