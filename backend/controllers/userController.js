const User = require('../models/user');

module.exports = {

    createUser: async (req, res) => {
        try {
            const existingUser = await User.findOne({ email: req.body.email });

            if (existingUser || await User.findOne({ phone: req.body.phone })) {
                return res.status(409).json({ error: 'User already exists' });
            }

            const user = await User.create(req.body);
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
            });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    getAllUsersById: async (req, res) => {
        try {

            const user = await User.findById(req.userId);
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const ids = req.params.ids ? req.params.ids.split(',') : [];

            const users = await User.find({ _id: { $in: ids } });
            if (users.length === 0) {
                return res.status(404).json({ error: 'No users found with the provided IDs' });
            }

            res.status(200).json(users);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    getUserById: async (req, res) => {
        try {
            const user = await User.findById(req.userId);
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    updateUserById: async (req, res) => {
        try {
            const user = await User.findByIdAndUpdate(req.userId, req.body, {
                new: true
            });

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const updatedFields = Object.keys(req.body).reduce((acc, key) => {
                acc[key] = user[key];
                return acc;
            }, {});

            res.status(200).json(updatedFields);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    deleteUserById: async (req, res) => {
        try {
            const user = await User.findByIdAndDelete(req.userId);
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            res.status(200).json({ message: 'User and related data deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};
