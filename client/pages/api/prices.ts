const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req:any, res:any) {
    if (req.method === 'GET') {
        try {
            const prices = await stripe.prices.list({
                limit: 25,
            });
            res.status(200).json(prices);
        } catch (e: any) {
            res.status(e.statusCode || 500).json(e.message)
        } 
    } else {
        res.setHeader('Allow', 'GET');
        res.status(405).end('Method Not Allowed');
    }
}