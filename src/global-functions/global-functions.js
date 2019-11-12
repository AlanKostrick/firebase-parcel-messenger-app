import firebase from '../config/firebase';

function getDatabaseCollectionContext() {
    const db = firebase.firestore();
    const messagesRef = db.collection('messages');
    return messagesRef;
}

function getRootContext() {
    const root = document.querySelector('#root');
    return root;
}

export default {
    getDatabaseCollectionContext,
    getRootContext
};
