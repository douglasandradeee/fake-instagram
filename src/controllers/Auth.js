const {User} = require("../models")
const authController = {
  showLogin(req, res) {
    return res.render("auth/login");
  },
  showRegister(req, res) {
    return res.render("auth/register");
  },
  async registerUser(req, res) {
    try {
      const {email, name, username, password} = req.body;
      const user = await User.create({
        name,
        email,
        password,
        username,
        avatar:"link",
        create_at: new Date().toISOString(),
      })
      return res.redirect("/login");
    }  catch(err){
      console.log(err);
      return res.redirect("/registro")
    }
  },
  async login(req, res) {
    try {
      const {email, password} = req.body;
      const user = await User.findOne({
        where:{
          email
        }
      });
      if(!user){
        return res.render("auth/login", {error: "Usuário não existe!"}) 
      }
    
      if(user.password != password) {
        return res.render("auth/login", {error: "A senha está errada!"}) 
      }
      return res.redirect("/home");
    } catch(err) {
      console.log(err);
      return res.render("auth/login", {error: "Sistema indisponível tente novamente mais tarde!"})
    }
  },
};

module.exports = authController;
