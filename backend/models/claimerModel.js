import mongoose from 'mongoose'

const claimerSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    comment: { type: String, required: true },
    timeClicked:  { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
)

const Claimer = mongoose.model('Claimer', claimerSchema)

export default Claimer