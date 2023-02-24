import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MyTimer from './MyTimer';

const Product = ({product}) => {
  return (
    <Card className='my-3 rounded p-3'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>
      <div className='py-3'>
      <MyTimer />
      </div>
    
      <Card.Body>
        
          <Card.Title as='div'>
            <strong id='product_name' >{product.name}</strong>
          </Card.Title>

        <Link to={`/product/${product._id}`} className="btn btn-primary">
          I want
        </Link> 


        <div className='my-3'>
        <Card.Text id='product_sponsor'>sponsored by:  {product.sponsor}</Card.Text>
        </div>

        <div>
          {product.claimers.map(claimer => (
              <Card.Text id='product_claimer'>
                 {claimer.name} : {claimer.timeClicked}
              </Card.Text>
          ))}
        
        </div>
        

      </Card.Body>
      
      
      
    </Card >

  )
}

export default Product