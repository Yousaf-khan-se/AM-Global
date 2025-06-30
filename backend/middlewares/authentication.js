const jwt = require('jsonwebtoken');
const User = require('../models/user');

module.exports = async (req, res, next) => {
    try {

        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({ error: 'Access denied. Login Again!' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded._id);

        if (!user) {
            return res.status(401).json({ error: 'User not found!' });
        }

        if (decoded.tokenVersion !== user.tokenVersion) {
            return res.status(401).json({ error: 'Invalid token!' });
        }

        req.userId = decoded._id;
        req.tokenVersion = decoded.tokenVersion;

        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid or expired token' });
    }
};
