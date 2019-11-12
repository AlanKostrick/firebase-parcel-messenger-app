import firebase from "../config/firebase";
import Messages from "../components/Messages";
import globalFunctions from "../global-functions/global-functions";

function navMessages() {
  //get request
  const messagesButton = document.querySelector(".nav-list__messages");
  messagesButton.addEventListener("click", function() {
    globalFunctions
      .getDatabaseCollectionContext()
      .get()
      .then(messages => {
        const auth = firebase.auth();
        auth.onAuthStateChanged(user => {
          if (user) {
            globalFunctions.getRootContext().innerHTML = Messages(messages);
          } else {
            globalFunctions.getRootContext().innerHTML = `
            <div class="jumbotron">
            <h1 class="display-4">You need to log in!</h1>
            <p class="lead">We value our content and our people, you can't just post without getting proper access.</p>
            <hr class="my-4">
            <p>In a bit smaller text...please remember we value our people, you can't just post without logging in.</p>
            <p class="lead">
              <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </p>
          </div>
            `;
          }
        });
      });
  });
}

export default {
  navMessages
};
