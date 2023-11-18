import React, { useEffect } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../App/Features/CartSlice';



export default function Navbar() {

  const {cart, totalQuantity} = useSelector((state) => state.allCart);


  const dispatch = useDispatch();

useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <MDBNavbar light bgColor="light">
      <MDBContainer fluid>
      <Link to='/'><MDBNavbarBrand>E-Cart</MDBNavbarBrand></Link>  
        <span>
        <Link to='/' className='text-dark'>  All Product </Link>
        </span>
        <Link to='/cart' className='text-white'>
        <MDBBtn color="dark">
          Cart ({totalQuantity}) 
        </MDBBtn>
        </Link> 
      </MDBContainer>
    </MDBNavbar>
  );
}