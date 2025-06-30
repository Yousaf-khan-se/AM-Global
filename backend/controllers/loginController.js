const jwt = require('jsonwebtoken');
const User = require('../models/user');
const sendResetEmail = require('../utils/mailer');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    login: async (req, res) => {
        try {
            const { email, password } = req.body;

            const user = await User.findOne({ email });

            if (!user || !(await user.matchPassword(password))) {
                console.log("received invalid credentials for login");
                return res.status(400).json({ error: 'Invalid credentials for login' });
            }

            const token = jwt.sign(
                { _id: user._id, tokenVersion: user.tokenVersion },
                process.env.JWT_SECRET,
                { expiresIn: '12h' }
            );

            res.cookie('token', token, {
                httpOnly: true,
                secure: isProduction,
                sameSite: isProduction ? 'None' : 'Lax',
                maxAge: 1000 * 60 * 60 * 12 // 12 hours
            });

            res.status(200).json({ message: 'Login successful' });

        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    logout: async (req, res) => {
        try {
            const user = await User.findById(req.userId);
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            user.tokenVersion += 1;
            await user.save();

            res.clearCookie('token', {
                httpOnly: true,
                secure: isProduction,
                sameSite: isProduction ? 'None' : 'Lax',
            });

            res.status(200).json({ message: 'Logout successful' });

        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    forgetPassword: async (req, res) => {
        try {
            const { email } = req.body;

            const user = await User.findOne({ email });

            if (!user) {
                console.log("received invalid email for password reset");
                return res.status(400).json({ error: 'Invalid email for password reset' });
            }

            const resetToken = crypto.getRandomValues(new Uint8Array(32)).toString('hex');

            user.resetToken = resetToken;
            user.resetTokenExpiration = Date.now() + (1000 * 60 * 20); // 20 minutes

            await user.save();

            const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}`;

            await sendResetEmail(email, resetLink);

            res.status(200).json({ message: 'reset link send successful via provided mail' });

        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    resetPassword: async (req, res) => {
        try {
            const { password, token } = req.body;

            const user = await User.findOne({ resetToken: token, resetTokenExpiration: { $gt: Date.now() } });

            if (!user) {
                console.log("invalid or expired token for password reset");
                return res.status(400).json({ error: 'invalid or expired token for password reset' });
            }

            user.password = password;
            user.resetToken = null;
            user.resetTokenExpiration = null;
            user.tokenVersion += 1;

            await user.save();

            res.status(200).json({ message: 'the password has been changed successfully' });

        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};
