const User = require("../model/user");

exports.userSignUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email ) {
      return res.status(400).json({ message: "Please fill all fields." });
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    const user = new User({ name, email});
    await user.save();
    
    res.status(201).json({ message: "User created successfully",});
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};