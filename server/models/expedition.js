import mongoose from 'mongoose';

const expeditionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  altitude: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  difficulty: {
    type: String,
    enum: ['Easy', 'Moderate', 'Difficult', 'Very Difficult', 'Extreme'],
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  maxGroupSize: {
    type: Number,
    required: true
  },
  currentBookings: {
    type: Number,
    default: 0
  },
  images: [{
    type: String
  }],
  itinerary: [{
    day: Number,
    title: String,
    description: String,
    altitude: Number,
    distance: Number,
    accommodation: String
  }]
}, {
  timestamps: true
});

export default mongoose.models.Expedition || mongoose.model('Expedition', expeditionSchema); 