import header from './features/header';
import auth from './features/auth';
import navMessages from './features/navMessages';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';

pageBuild();

function pageBuild() {
  header.header();
  navMessages.navMessages();
  auth.navLogin();
  auth.navLogout();
}
