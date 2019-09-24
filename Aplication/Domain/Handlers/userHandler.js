const md5 = require("md5");

class UserHandler {
  // 1 register
  static async register(userName, email, password) {
    let passwordHash = md5(password);
    const result = await this.create({
      nombre: userName,
      correo: email,
      password: passwordHash
    });

    return result;
  }

  // 2. login
  static async login(correo, password) {
    // 1. buscar el registo por email
    let registro = await this.findOne({ correo });

    let errorMessage = {
      message: "Usuario o password no coinciden",
      status: 400
    };
    // 1.2 si obtengo el registro, comparo los hash
    if (registro) {
      // si los hash coinciden, retorno el nombre del usuario
      if (md5(password) == registro.password) {
        errorMessage.message = "Success";
        errorMessage["auth"] = { user: registro.nombre, id: registro._id };
        errorMessage.status = 200;
      }
    }
    return errorMessage;
  }

  static async isAuth(auth) {
    if (!auth) return false;

    if (auth.user == "" || auth.id == "") return false;

    try {
      let result = await this.findOne({ nombre: auth.user, _id: auth.id });
      if (!result) return false;

      return true;
    } catch (e) {
      return false;
    }
  }
}

module.exports = UserHandler;
