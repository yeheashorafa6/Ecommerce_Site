"use client";
import { CartContext } from "./../../../../app/_CartsContext/CartContext";
import { useUser } from "@clerk/nextjs";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useContext, useState } from "react";
import orderApis from "./../../../../utils/orderApis";
import cartApis from "./../../../../utils/cartApis";
const CheckoutForm = ({ amount }) => {
  // CONTEXT
  const { carts, setCarts } = useContext(CartContext);
  // == CONTEXT ==

  // USE USER
  const { user } = useUser();
  // == USE USER ==

  // STATES
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // == STATES ==

  // FUNCTIONS
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    // CREATE ORDER
    createOrder();

    // == CREATE ORDER ==

    // SEND EMAIL
    sendEmail();
    // == SEND EMAIL ==

    const handleError = (error) => {
      setLoading(false);
      setErrorMessage(error.message);
    };

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      handleError(submitError);
      return;
    }
    const res = await fetch("/api/create-intent", {
      method: "POST",
      body: JSON.stringify({
        amount: amount,
      }),
    });
    const clientSecret = await res.json();
    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      clientSecret,
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/payment-confirm",
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  const createOrder = () => {
    const productIds = [];
    carts.forEach((el) => {
      productIds.push(el?.products.id);
    });
    const data = {
      data: {
        username: user.fullName,
        email: user.primaryEmailAddress.emailAddress,
        amount,
        products: productIds,
      },
    };
    orderApis.CreateOrderData(data).then((res) => {
      if (res) {
        carts.forEach((el) => {
          cartApis.deleteCartItem(el?.id).then((res) => {});
        });
      }
    });
  };

  const sendEmail = async () => {
    const res = await fetch("/api/send-email", {
      method: "POST",
    });
  };

  // == FUNCTIONS ==
  return (
    <form onSubmit={handleSubmit}>
      <div className="mx-32 md:mx-[320px] mt-20">
        <PaymentElement />
        <button className="text-center bg-primary text-white p-3 rounded-md my-5 w-full font-semibold text-lg">
          Submit
        </button>
       
      </div>
    </form>
  );
};

export default CheckoutForm;
