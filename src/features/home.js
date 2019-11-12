import Home from "../components/Home";
import globalFunctions from "../global-functions/global-functions";

function home() {
  const homeButton = document.querySelector(".nav-list__home");
  homeButton.addEventListener("click", function() {
    globalFunctions.getRootContext().innerHTML = Home();
  });
}

export default {
  home
};
