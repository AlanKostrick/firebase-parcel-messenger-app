import firebase from '../config/firebase';
import LogIn from '../components/Login';
import globalFunctions from '../global-functions/global-functions';

function navLogin() {
    const logInButton = document.querySelector('.nav-list__login');
    logInButton.addEventListener('click', function() {
        globalFunctions.getRootContext().innerHTML = LogIn();
    });

    globalFunctions.getRootContext().addEventListener('click', function() {
        if (event.target.classList.contains('login-submit')) {
            const email = document.querySelector('#defaultForm-email').value;
            const password = document.querySelector('#defaultForm-pass').value;

            const auth = firebase.auth();
            auth.signInWithEmailAndPassword(email, password).then(cred => {
                console.log(cred.user);
            });
        }
    });
}

function navLogout() {
    const logOutButton = document.querySelector('.nav-list__logout');
    logOutButton.addEventListener('click', function() {
        const auth = firebase.auth();
        auth.signOut().then(() => {
            console.log('user signed out');
        });
    });
}

export default {
    navLogin,
    navLogout
};
