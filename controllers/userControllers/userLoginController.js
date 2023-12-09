const express = require('express');
const User = require("../../models/userModel");
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userLoginController = async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email: email });
        // if user not exists, return
        if (!user) {
            return json({ error: 'User not found' });
        }
        const passwordCompare = await bcryptjs.compareSync(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ error: 'Email or password is incorrect' });
        }
        // extracting password from user information
        // Extracting password and rest of the user data
        const { password: hashedPassword, ...userWithoutPassword } = user.toObject();
        // assigning auth token
        const authtoken = jwt.sign({ email: user.email }, "anyRandom");

        return res.json({
            success: true,
            authtoken,
            user: userWithoutPassword
        });
    } catch (error) {
        console.log(error.message)
        return res.json({
            success: false,
            error: error.message
        })
    }
}

module.exports = userLoginController