export default function Header() {
  return `
             <nav class= 'nav'>
                  <h1 class= 'class='shadow p-3 mb-5 bg-white rounded nav-logo'>MyMessagesApp</h1>
                  <ul class= 'navbar navbar-expand-lg navbar-light bg-light nav-list'>
                      <li class= 'nav-link nav-list__home'>Home</li>
                      <li class= 'nav-link nav-list__messages'>Messages</li>
                      <li class= 'nav-link nav-list__signup'>Sign Up</li>
                      <li class= 'nav-link nav-list__login' data-toggle="modal" data-target="#modalLoginForm">Login</li>
                      <li class= 'nav-link nav-list__logout'>Logout</li>
                  </ul>
              </nav>
          `;
}
