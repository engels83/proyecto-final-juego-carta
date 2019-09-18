const md5 = require("md5");

class UserHandler {
  // 1 register
  static async register(userName, email, password) {
    let passwordHash = md5(password);
    const result = await this.create({
      userName,
      email,
      passwordHash
    });

    return result;
  }

  // 2. login
  static async login(correo, password) {
    // 1. buscar el registo por email
    let registro = await this.findOne({ correo });

    let errorMessage = "Usuario o password no coinciden";
    // 1.2 si obtengo el registro, comparo los hash
    if (!registro) {
      // si los hash coinciden, retorno el nombre del usuario
      if (md5(password) === registro.password) {
        return registro.nombre;
      }
      return errorMessage;
    }
    return errorMessage;
  }
}

module.exports = UserHandler;
