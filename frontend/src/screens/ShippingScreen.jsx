import React, { useState } from "react";

import {
  Form,
  Button,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CheckoutSteps from "../Components/CheckoutSteps";
import { login, register } from "../actions/userActions";
import FormContainer from "../Components/FormContainer";
import { saveShippingAddress } from "../actions/cartActions";

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [zipcode, setZipCode] = useState(shippingAddress.zipcode);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();

  function submitHandler(e) {
    e.preventDefault();

    //DISPATCH SHIPPING
    dispatch(saveShippingAddress({ address, city, zipcode, country }));
    history.push("/payment");
  }
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <FormGroup controlId="address">
          <FormLabel>Name</FormLabel>
          <FormControl
            type="text"
            required
            placeholder="Enter Address"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          ></FormControl>
        </FormGroup>

        <FormGroup controlId="city">
          <FormLabel>City</FormLabel>
          <FormControl
            type="text"
            placeholder="Enter City"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          ></FormControl>
        </FormGroup>

        <FormGroup controlId="zipcide">
          <FormLabel>ZipCode</FormLabel>
          <FormControl
            type="text"
            placeholder="Enter ZipCode"
            value={zipcode}
            onChange={(e) => {
              setZipCode(e.target.value);
            }}
          ></FormControl>
        </FormGroup>

        <FormGroup controlId="country">
          <FormLabel>Country</FormLabel>
          <FormControl
            type="text"
            placeholder="Enter Country"
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          ></FormControl>
        </FormGroup>

        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;
