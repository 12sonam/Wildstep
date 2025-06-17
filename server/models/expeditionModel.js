import mongoose from 'mongoose';

const expeditionSchema = mongoose.Schema(
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
    altitude: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
      required: true,
    },
    location: {
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
      altitude: String,
      accommodation: String,
    }],
    includes: [String],
    excludes: [String],
    requiredGear: [String],
    bestSeasons: [String],
    highlights: [String],
  },
  {
    timestamps: true,
  }
);

const Expedition = mongoose.model('Expedition', expeditionSchema);

export default Expedition; 