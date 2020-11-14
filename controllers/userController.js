import passport from "passport";
import routes from "../routes";
import User from "../models/User";

export const getJoin = (req, res) => {
    res.render("join", { pageTitle: "JOIN" });
};

export const postJoin= async (req, res, next) => {
    const {
        body: { name, email, password, password2 }
    } = req;
    if(password !== password2){
       // res.status(400);
        res.render("join", { pageTitle: "Join" });
    } else {
        try {
            const user = await User({
              name,
              email
            });
            await User.register(user, password);
            next();
          } catch (error) {
            console.log(error);
            res.redirect(routes.home);
          }
    }
};

export const getLogin = (req, res) => {
    res.render("login", {pageTitle: "LogIn"});
};
export const postLogin = passport.authenticate("local", {
    failureRedirect: routes.login,
    successRedirect: routes.home
  });

export const githubLogin = passport.authenticate('github');

export const githubLoginCallback = async (_, __, profile, cb) => {
  const { 
    _json: { id, avater_url: avaterUrl, name, email } 
  } = profile;
  try{
    const user = await User.findOne({email});
    if(user){
      user.githubId = id;
      user.avaterUrl = avaterUrl;
      user.save();
      console.log(user);
      return cb(null, user);
    }
      const newUser = await User.create({
        email,
        name,
        githubId: id,
        avaterUrl
      });
      return cb(null, newUser);
  }catch(error){
    return cb(error);
  }
};

export const postGithubLogIn = (req, res) => {
  // Successful authentication, redirect home.
  res.redirect(routes.home);
}

export const logout = (req, res) => {
    req.logout();
    res.redirect(routes.home);
};

export const me = (req, res) => {
  res.render("userDetail", { pageTitle: "USER DETAIL", user: req.user });
}

export const userDetail = (req, res) => 
  res.render("userDetail", { pageTitle: "USER DETAIL" });
export const editProfile = (req, res) => 
  res.render("editProfile", { pageTitle: "EDIT PROFILE" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "CHAGE PASSWORD" });