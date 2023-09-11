import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { savePaymentMethod } from "../slices/cartSlice";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";

const PaymentScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const navigate = useNavigate();

  useEffect(() => {
    if (!shippingAddress.address) {
      navigate("/shipping");
    }
  }, [navigate, shippingAddress.address]);

  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
  };
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1 className="text-center">Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label>Select Method</Form.Label>
          <Form.Check
            type="radio"
            className="my-2"
            name="paymentMethod"
            label="PayPal or Credit Card"
            value={paymentMethod}
            checked
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;
