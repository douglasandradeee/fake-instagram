const {Publication} = require("../models")

const mainController = {
  showHome(req, res) {
    return res.render("home");
  },
  showCreatePublication(req, res) {
    return res.render("post");
  },
  async postPublication(req, res) {
    try {
      const {filename} = req.file
      const {user} = req.session

      const newPost = await Publication.create({
        image: filename,
        user_id: user.id,
        create_at: new Date().toISOString(),
      })
      return res.redirect("/home")
      
    } catch (error) {
      console.log(err);
      return res.render("posts", {
        error: "Erro ao tentar cadastrar a publicação."
      })   
    } 
  },
};

module.exports = mainController;
