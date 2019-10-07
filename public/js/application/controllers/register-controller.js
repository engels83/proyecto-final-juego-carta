$(document).ready(() => {
  function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  }

  $("#register").click(() => {
    //Validaciones
    let nickname = $("#nickname").val();
    let email = $("#email").val();
    let password = $("#password").val();
    let passwordConfirm = $("#repeat-password").val();

    $("#nickname-msg-validator").text("");
    $("#email-msg-validator").text("");
    if (nickname == "" || nickname.length < 3) {
      $("#nickname-msg-validator").text("Nickname incompleto o no valido");
    } else if (!ValidateEmail(email)) {
      $("#email-msg-validator").text("Email incompleto o no valido");
    } else if (password != passwordConfirm) {
      $("#password-msg-validator").text("password no coinciden");
    } else {
      let post = {
        userName: nickname,
        email: email,
        password: password
      };

      //POST
      $.ajax({
        method: "POST",
        url: "/api/v1/security/registro",
        data: post,
        dataType: "JSON",
        success: data => {
          location.href = "/login";
        },
        error: error => {
          console.log(error);
        }
      });
    }
  });
});
