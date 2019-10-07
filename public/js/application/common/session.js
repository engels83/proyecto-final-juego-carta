$(document).ready(() => {
  let authString = localStorage.getItem("auth");
  let $navBarList = $("#navBarList");
  if (authString) {
    let auth = JSON.parse(authString);
    // validar que ya esta autenticado
    if (auth.user != "" || auth.id != "") {
      let $userItem = `
        <li class="nav-item dropdown mx-0 mx-lg-1">
          <a class="nav-link dropdown-toggle btn btn-primary py-3 px-3 js-scroll-trigger" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Hola <b>${auth.user}</b> </a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Profile</a>            
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" id="logout" href="#">Logout</a>
          </div>
        </li>`;
      $navBarList.append($userItem);
    } else {
      window.location("/login");
    }
  } else {
    let $registerItem = `
      <li class="nav-item mx-0 mx-lg-1">
        <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/register">Register</a>
      </li>`;
    let $loginItem = `
      <li class="nav-item mx-0 mx-lg-1">
        <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/login">Login</a>
      </li>`;

    $navBarList.append($registerItem);
    $navBarList.append($loginItem);
  }

  $("#logout").click(() => {
    localStorage.removeItem("auth");
    location.href = "/";
  });
});
