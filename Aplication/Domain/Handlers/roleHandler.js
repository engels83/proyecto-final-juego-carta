class RoleHandler {
  // add new one
  static async add(name, description) {
    let result = {
      message: "Error",
      data: {},
      status: 401
    };

    try {
      let res = await this.create({ name, description });
      (result.message = "success"), (result.data = res), (result.status = 200);
    } catch (err) {
      (result.message = err.message), (result.data = {}), (result.status = 500);
    } finally {
      return result;
    }
  }

  static async findRoleByName(name) {
    let result = await this.findOne({ name });
    return result;
  }
}

module.exports = RoleHandler;
