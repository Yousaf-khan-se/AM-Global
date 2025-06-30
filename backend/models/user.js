const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    country: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    currentJobTitle: { type: String },
    areaOfInterest: { type: String },
    tokenVersion: { type: Number, default: 0 },
    privacyPolicy: { type: Boolean, default: false },
    resetToken: { type: String, default: null, },
    resetTokenExpiration: { type: Date, default: null }
}, { timestamps: true });

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
