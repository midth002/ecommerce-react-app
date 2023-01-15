const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export const getPrices = async () => {
    const result = await fetch(`https://api.stripe.com/v1/prices?limit=25`, {
        method: 'get',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization:
            'Bearer ' + 'sk_test_51MQExRBUeFOv0VolW6YysDb37OyAXqoiSQWVyS1och3yhilj0tPIc3guGHkx7sJAmcnCdLKU5Y8OqxDhedEWFQfX00RjlPiMlf'
        },
      }).then((response) => response.json());
    
      return result;
}