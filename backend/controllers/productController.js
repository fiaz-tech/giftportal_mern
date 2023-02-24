import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'
import Claimer from '../models/claimerModel.js'


// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).populate({path:'claimers',populate:{path:'user'}}).populate('user')
  res.json(products);
})


// @desc    Fetch single product
// @route   GET /api/product
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    res.json(product);
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
}) 


// @desc    Create new claim
// @route   POST /api/products/:id/claimers
// @access  Private
const createProductClaimer = asyncHandler(async (req, res) => {


  const product = await Product.findById(req.params.id).populate({path:'claimers',populate:{path:'user'}})

  if (product) {
    const alreadyClaimed = product.claimers.find(
      (r) => r.user._id.toString() === req.user._id.toString()
    )

    if (alreadyClaimed) {
      res.status(400)
      throw new Error('You have already claimed the product')
    }


    function nDate() {
      let result="";
      let d = new Date();

      result += d.getHours()+":"+d.getMinutes() +" " + d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate();
      return result;
    }

    const { comment } = req.body

    const claim = {
      user: req.user._id,
      name: req.user.name,
      timeClicked: nDate(),
      comment
    }

    const claimer = new Claimer(claim) 

    product.claimers.push(claimer)

    await claimer.save()
    
    await product.save()
    res.status(201).json({ message: 'Claim added' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})


export {
  getProducts,
  getProductById,
  createProductClaimer,
}