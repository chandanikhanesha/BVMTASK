const mongoose = require("mongoose");

const EmployeeSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },

  profilePicture: {
    type: String,
  },
  phoneNumber: Number,
  description: String,

  createdAt: { type: Date, required: true, default: Date.now },
});

module.exports = mongoose.model("Employee", EmployeeSchema);
