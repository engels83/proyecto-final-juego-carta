const path = require("path");

const viewRoutes = express => {
  express.get("/", (req, res) => {
    res.end("Hola desde web sockets!");

    //res.sendFile(path.join(__dirname,"./views/index.html"));
  });

  express.get("/admin", (req, res) => {
    res.sendFile(path.join(__dirname, "../../views/Administration/admin.html"));
  });

  express.get("/registro", (req, res) => {
    res.sendFile(path.join(__dirname, "../../views/auth/register.html"));
  });

  express.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "../../views/auth/login.html"));
  });
};

module.exports = viewRoutes;
