import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../App/Features/CartSlice";
import { Link } from "react-router-dom";
import './style.css';

const ProductCard = () => {
const items = useSelector((state) => state.allCart.items);
const dispatch = useDispatch();

return (
    <div>
      <MDBContainer className="mt-5">
        <MDBRow className="mb-3">
          {items.map((item) => (
            <MDBCol size="md" key={item.id}>
              <MDBCard className="card">
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image hover-overlay"
                >
                  <MDBCardImage src={item.img} fluid alt={item.title} className="card-image" />
                  <a>
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </a>
                </MDBRipple>
                <MDBCardBody>
                  <MDBCardTitle>{item.title} </MDBCardTitle>
                  <MDBCardText>{item.price}</MDBCardText>

                  <Link to='/cart'>
                  <MDBBtn onClick={() => dispatch(addToCart(item)) } color="dark">
                    Add to Cart
                  </MDBBtn>
                  </Link>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default ProductCard;