import React from "react";
import { Button, Box } from '@mui/material';
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";

const Form = ({ totalAmount }) => {

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        }); 

        if (!error) {
            const { id } = paymentMethod;
     

        try {

            const { data } = await axios.post("/api/charge", { id, amount: totalAmount})
            console.log(data);


        } catch(err) {
            console.log(err);
        }
    }}

   

  return (
   
    <form onSubmit={handleSubmit} style={{maxWidth: '400px', margin: "0 auto"}}>
        <CardElement />
        <Button variant="contained" color="secondary" type="submit" sx={{mt: 2, width: '100%'}}>
            Pay
        </Button>
    </form>
 
  )
};


const CheckoutForm = ({ totalAmount }) => {
    const stripePromise = loadStripe("pk_test_51MQExRBUeFOv0VolmmWbBrj0ZZpWNqxpjO3amLgwp8HxKWN5oJpmpsKRk6Zz5vKFw8xPQVjN1iIDydZGOJn677if00XceExs6H")
   
   return (
   <Elements stripe={stripePromise}>
        <Form totalAmount={totalAmount} />
    </Elements>
   );
}


export default CheckoutForm;
