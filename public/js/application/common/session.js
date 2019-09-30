$(document).ready(() => {
  let authString = localStorage.getItem("auth");
  let $navBarList = $("#navBarList");
  if (authString) {
    let auth = JSON.parse(authString);
    // validar que ya esta autenticado
    if (auth.user != "" || auth.id != "") {
      let $userItem = `
        <li class="nav-item mx-0 mx-lg-1">
            <button class="btn btn-warning py-3 px-3 js-scroll-trigger">Hola <b>${auth.user}</b> </button>
        </li>`;
      $navBarList.append($userItem);
    } else {
      window.location("/login");
    }
  } else {
    let $registerItem = `
      <li class="nav-item mx-0 mx-lg-1">
        <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#">Register</a>
      </li>`;
    let $loginItem = `
      <li class="nav-item mx-0 mx-lg-1">
        <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#">Login</a>
      </li>`;

    $navBarList.append($registerItem);
    $navBarList.append($loginItem);
  }
});
