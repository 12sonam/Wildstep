import mongoose from 'mongoose';

const trekkingSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    region: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      enum: ['Easy', 'Moderate', 'Hard', 'Very Hard'],
      required: true,
    },
    maxAltitude: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    itinerary: [{
      day: Number,
      title: String,
      description: String,
      distance: String,
      elevation: String,
      accommodation: String,
    }],
    includes: [String],
    excludes: [String],
    bestSeasons: [String],
    highlights: [String],
    trailFeatures: [String],
    requiredFitness: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Trekking = mongoose.model('Trekking', trekkingSchema);

export default Trekking; 