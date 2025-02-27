
import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import validator from 'validator';

// login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: "User doesn't exist" })
        }
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.json({ success: false, message: "Invalid crandintial" });
        }
        const token = createToken(user._id, user.name);
        res.json({ success: true, token });

        // set token in http only cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: false, // set to true if using https
            sameSite: "Lax",
            maxAge: 2 * 24 * 60 * 60 * 1000, // 2 days

        });
        res.status(200).json({ message: "User login successfully" });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Errro" })
    }
}

// cratge jwt token

const createToken = (id, name) => {
    return jwt.sign({ id, name }, process.env.JWT_SECRET, { expiresIn: '2d' })
}



// register user
const registerUser = async (req, res) => {
    const { name, password, email } = req.body;
    try {
        // chacking user is already or not
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exist" });
        }
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: 'Please enter a valid email' });
        }
        if (password.length < 8) {
            return res.json({ success: false, message: 'Please enter a strong password' });
        }

        // hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);

        // crate user 
        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword
        })
        const user = await newUser.save();
        const token = createToken(user._id, user.name,user.profileImage)

        res.cookie("token", token, {
            httpOnly: true,
            secure: false, // set to true if using https
            sameSite: "Lax",
            maxAge: 2 * 24 * 60 * 60 * 1000, // 2 days

        });

        res.json({ success: true, token, user });
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }
}


export { loginUser, registerUser }