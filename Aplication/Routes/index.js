const path = require("path");

const viewRoutes = express => {
  express.get("/", (req, res) => {
    //res.end("Hola desde web sockets!");
    res.render("index", { title: "Play ♠ _31 | Home", message: "coco" });
    //res.sendFile(path.join(__dirname,"./views/index.html"));
  });

  express.get("/admin", (req, res) => {
    res.sendFile(path.join(__dirname, "../../views/Administration/admin.html"));
  });

  express.get("/register", (req, res) => {
    //res.sendFile(path.join(__dirname, "../../views/auth/register.html"));
    res.render("auth/register", { title: "Play ♠ _31 | Register" });
  });

  express.get("/login", (req, res) => {
    //res.sendFile(path.join(__dirname, "../../views/auth/login.html"));
    res.render("auth/login", { title: "Play ♠ _31 | Login" });
  });
};

module.exports = viewRoutes;
