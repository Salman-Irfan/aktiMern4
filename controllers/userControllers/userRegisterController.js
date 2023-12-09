const express = require("express");
const User = require("../../models/userModel");
const bcryptjs = require('bcryptjs');

const userRegisterController = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Create a new user instance
        const newUser = new User({
            name,
            email,
            password,
        });

        // hash the user password before saving it in the database
        let salt = bcryptjs.genSaltSync(5);
        let hashedPassword = bcryptjs.hashSync(password, salt);

        // Update the password property of newUser
        newUser.password = hashedPassword;

        // Save the user to the database
        await newUser.save();

        // Return success response
        return res.json({
            success: true,
            message: 'User saved successfully',
            data: newUser
        });
    } catch (error) {
        // Return error response if there is an issue saving the user
        console.error(error);
        return res.status(500).json({
            success: false,
            message: 'Error saving user to the database',
            error: error.message
        });
    }
};

module.exports = userRegisterController;
