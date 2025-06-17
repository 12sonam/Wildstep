import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    enum: ['expedition', 'trek'],
    required: true
  },
  expedition: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Expedition'
  },
  trek: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Trek'
  },
  price: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending'
  },
  participants: [{
    name: String,
    email: String,
    phone: String,
    nationality: String,
    passportNumber: String
  }],
  specialRequirements: String,
  paymentStatus: {
    type: String,
    enum: ['pending', 'completed', 'refunded'],
    default: 'pending'
  }
}, {
  timestamps: true
});

export default mongoose.models.Booking || mongoose.model('Booking', bookingSchema); 