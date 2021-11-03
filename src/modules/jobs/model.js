const mongoose = require('mongoose');

const { Schema } = mongoose;

const JobSchema = new Schema({
  company: {
    type: String,
    required: [true, 'Company name is required'],
    maxlength: [50, 'Cannot be more than 20 characters']
  },
  position: {
    type: String,
    required: [true, 'Position name is required'],
    maxlength: [100, 'Cannot be more than 20 characters']
  },
  status: {
  type: String,
  enum: ['interview', 'declined', 'pending'],
  default: 'pending',
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: [true, 'Please provide user'],
  },
}, {
  timestamps:true,
  collection: 'job',
  minimize: false,
});

const job = mongoose.model('Job', JobSchema);

module.exports = job;