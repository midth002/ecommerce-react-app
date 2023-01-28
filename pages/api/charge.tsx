const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
    const { id, amount } = req.body;

    try { 
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: 'USD',
            payment_method: id,
            confirm: true
        }); 

    console.log(payment);

    return res.status(200).json({
        confirm: 'abc123'
    })

    } catch(err) {
        console.log(err);
        return res.status(400).json({
            message: err.message
        });
    }
}