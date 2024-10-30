const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

router.post("/api/users", async (req, res) => {
    const { name, email, age } = req.body;
  
    try {
      //Create a new User using the User modele
      const newUser = new User({
        name,
        email,
        age,
      });
  
      //Save user to the database
      const savedUser = await newUser.save();
  
      //Respond with the saved user data
      res.status(201).json(savedUser);
    } catch (err) {
      //Handle an error
      res.status(500), json({ message: "Error saving user", error: err.message });
    }
  });

  //Fetch all users
  router.get("/api/users", async (req, res) => {
  try {
    const user = await User.find(); //retrieve all user
    res.status(200).json(user); //respond with the user data
  } catch (err) {
    //Handle an error
    res
      .status(500)
      .json({ message: "Error fetching users", error: err.message });
  }
});



//Get a single user
router.get("/api/users/:id", async (req, res) => {
    try {
      const user = await User.findById(req.params.id); //Find user by ID
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(user); //respond with the user data
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error fetching User", error: error.message });
    }
  });

  //Update a single user
router.put("/api/users/:id", async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id,
          {
              name: req.body.name,
              email: req.body.email,
              age: req.body.age,
          },
          { new: true }
      );
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(updatedUser); //respond with the updated user data
    } catch (err) {
      res.status(500).json({ message: 'Error updating user', error:err.message});
      
    }
  });

  //Delete a single user
  router.delete('/api/users/:id', async function(req, res) {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.id); //find and delete the user by id
  
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found'});
      }
  
      res.status(204).json( { message: 'user deleted successfully' });
    } catch (err) {
      response.status(500).json({ message: 'Error deleting user', error: error.message });
    }
  });

  module.exports = router;




