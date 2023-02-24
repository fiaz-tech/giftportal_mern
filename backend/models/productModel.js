import mongoose from 'mongoose'


const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    sponsor: {
      type: String,
      required: true,
    },

    claimers: [
      {
        type: mongoose.Schema.Types.ObjectId,
      ref: 'Claimer',
      }
    ]
    
  },
  {
    timestamps: true,
  }
)

const Product = mongoose.model('Product', productSchema)


export default Product