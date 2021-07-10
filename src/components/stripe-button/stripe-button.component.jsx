import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const publishableKey =
    "pk_test_51J2KUISDY0O5KUVZ374ejGvLnHgNl27XroH9jjF69vR6KRDm6ZKXFQ0RJ2i7faqvnrlBEmHym3DOc5mFKud8zmVO00A0mjffPa";

  const onToken = token => {
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Hostel Mart Ltd."
      billingAddress
      shippingAddress
      description={`Your total is ₹${price}`}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      currency="INR"
    />
  );
};
export default StripeCheckoutButton;
