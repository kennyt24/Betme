const User = require("../model/user");

exports.userSignUp = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: "Please provide a name and email." });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "A user with that email already exists." });
    }

    const user = new User({ name, email });
    await user.save();

    res.status(201).json({ message: "User created successfully.", user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "An error occurred while creating the user.",
      error
    });
  }
};