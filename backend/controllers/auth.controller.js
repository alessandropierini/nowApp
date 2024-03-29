import User from "../models/User.js";
import passport from "passport";

export const signup = async (req, res) => {
    let errors = [];
    const { name, email, password, confirm_password } = req.body;
    if (password !== confirm_password) {
      errors.push({ text: "Passwords do not match." });
    }
  
    if (password.length < 4) {
      errors.push({ text: "Passwords must be at least 4 characters." });
    }
  
    if (errors.length > 0) {
      return res.render("auth/signup", {
        errors,
        name,
        email,
        password,
        confirm_password,
      });
    }
  
    // Look for email coincidence
    const userFound = await User.findOne({ email: email });
    if (userFound) {
      res.send("The Email is already in use.");
    }
  
    // Saving a New User
    const newUser = new User({ name, email, password });
    newUser.password = await newUser.encryptPassword(password);
    await newUser.save();
    res.send("You are registered.");
  };


  export const signin = passport.authenticate("local", {
    successRedirect: "/notes",
    failureRedirect: "/auth/signin",
  });
  
  export const logout = async (req, res, next) => {
    await req.logout((err) => {
      if (err) return next(err);
      res.send("You are logged out now.");
    });
  };
  