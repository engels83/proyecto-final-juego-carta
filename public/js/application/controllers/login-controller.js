$(document).ready(() => {
  // validar que ya esta autenticado
  let authString = localStorage.getItem("auth");
  if (authString) {
    let auth = JSON.parse(authString);

    // validar que ya esta autenticado
    if (auth.user != "" || auth.id != "") {
      location.href = "/";
    }
  }

  $("#email-msg-validator").text("");
  $("#password-msg-validator").text("");

  $("#login").click(() => {
    //Validaciones

    let email = $("#email").val();
    let password = $("#password").val();

    if (email === "") {
      $("#email-msg-validator").text("campo Correo Vacio");
    } else if (password == "") {
      $("#password-msg-validator").text("Campo Password Vacio");
    } else {
      {
        let post = {
          correo: email,
          password: password
        };

        //POST
        $.ajax({
          method: "POST",
          url: "/api/v1/security/login",
          data: post,
          dataType: "JSON",
          success: data => {
            // guardar auth en localStorage
            localStorage.setItem("auth", JSON.stringify(data.auth));

            // redirect to home / profile
            location.href = "/";
          },
          error: error => {
            console.log(error);
            $("header")
              .addClass("bg-warning")
              .removeClass("bg-primary")
              .text("Authentication Error: user/password invalid");

            setTimeout(() => {
              $("header")
                .addClass("bg-primary")
                .removeClass("bg-warning")
                .text("");
            }, 5000);
          }
        });
      }
    }
  });
});
