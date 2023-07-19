import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required!'],
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: [true, 'Email is required!'],
      unique: true,
      max: 50,
    },
    password: {
      type: String,
      required: [true, 'Password is required!'],
      min: 6,
    },
    city: String,
    state: String,
    country: String,
    occupation: String,
    phoneNumber: String,
    transactions: Array,
    role: {
      type: String,
      enum: ['user', 'admin', 'superadmin'],
      default: 'admin',
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', UserSchema);

export default User;
