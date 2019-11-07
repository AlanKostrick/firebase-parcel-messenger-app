import firebase from '../config/firebase';
import Messages from '../components/Messages';
import globalFunctions from '../global-functions/global-functions';

function navMessages() {
  //get request
  const messagesButton = document.querySelector('.nav-list__messages');
  messagesButton.addEventListener('click', function() {
    globalFunctions
      .getDatabaseCollectionContext()
      .get()
      .then(messages => {
        const auth = firebase.auth();
        auth.onAuthStateChanged(user => {
          if (user) {
            globalFunctions.getRootContext().innerHTML = Messages(messages);
          } else {
            globalFunctions.getRootContext().innerHTML = `<h1>Log in to see the message board</h1>`;
          }
        });
      });
  });
}

export default {
  navMessages
};
