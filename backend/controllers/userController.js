const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Sign up
exports.signup = async (req, res) => {
  try {
    const { email, mobileNumber, fullName, username, password } = req.body;

    // Check if email or mobile number already exists
    const existingUser = await User.findOne({ $or: [{ email }, { mobileNumber }] });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email or mobile number already exists.' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      email,
      mobileNumber,
      fullName,
      username,
      password: hashedPassword,
    });

    // Save user to database
    await newUser.save();

    res.status(201).json({ message: 'User signed up successfully!' });
  } catch (error) {
    console.error('Signup error:', error); // Log the error
    res.status(500).json({ message: error.message });
  }
};

// Sign-In Route
exports.signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Verify password (assuming you have a method for this)
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '5d' });

    res.status(200).json({ token });
  } catch (error) {
    console.error('Signin error:', error); // Log the error
    res.status(500).json({ message: 'Server error' });
  }
};

// Get user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('Get user by ID error:', error); // Log the error
    res.status(500).json({ message: error.message });
  }
};

// Update user's birthday
exports.updateUserBirthday = async (req, res) => {
  try {
    const { birthday } = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { birthday },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    res.status(200).json({ message: 'Birthday updated successfully!' });
  } catch (error) {
    console.error('Update user birthday error:', error); // Log the error
    res.status(500).json({ message: error.message });
  }
};
