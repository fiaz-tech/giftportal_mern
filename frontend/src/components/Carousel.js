import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1647221598091-880219fa2c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>End of the Month giveaway</h3>
          <p>The end of Febuary, 2023 is racing up on us quickly. So as we count down to the final days of the year, we thought a Speedy Giveaway Package would be perfect. 
          <Link to={'/products'} className="btn btn-primary">
          Click Here
        </Link> 
          to claim your gift. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1647221598398-934ed5cb0e4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3>End of the Month giveaway</h3>
          <p>The end of Febuary, 2023 is racing up on us quickly. So as we count down to the final days of the year, we thought a Speedy Giveaway Package would be perfect. 
          <Link to={'/products'} className="btn btn-primary">
          Click Here
        </Link> 
          to claim your gift. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1662782387214-f16622e8fe47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>End of the Month giveaway</h3>
          <p>The end of Febuary, 2023 is racing up on us quickly. So as we count down to the final days of the year, we thought a Speedy Giveaway Package would be perfect. 
          <Link to={'/products'} className="btn btn-primary">
          Click Here
        </Link> 
          to claim your gift. </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;