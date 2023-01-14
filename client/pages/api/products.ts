const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req:any, res:any) {
    if(req.method === 'GET') {
        try {
            const products = await stripe.products.list({
                active: true, 
                limit: 25, 
                expand: ['data.product']
            });
            res.status(200).json(products);
        } catch (err:any) {
            res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader('Allow', 'GET');
        res.status(405).end('Method Not Allowed');
    }
}

