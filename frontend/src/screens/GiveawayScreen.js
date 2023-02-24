import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { listProducts } from '../actions/productAction'
import Message from '../components/Message.js'
import Loader from '../components/Loader'


const GiveawayScreen = () => {
  
  const dispatch = useDispatch()

  const productList = useSelector(state => state.productList)
  const {loading, error, products } = productList
 

  useEffect(() => {
      dispatch(listProducts())
    }, [dispatch])

  return (
    <>
      <h1>Giveaway Portal</h1>

      {loading ? <Loader/> : error ? <Message variant= 'danger'>{error}</Message> :
        <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} >
            <Product product={product} />
          </Col>
        ))}
    </Row>
      }
    </>
  )
}

export default GiveawayScreen