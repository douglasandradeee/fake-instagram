module.exports = (req, res, next) => {
    const {user} = req.session

    if(typeof user == "udefined" && !user) {
        res.redirect("/login")
    }

    res.locals.user = user;  
    next()
}