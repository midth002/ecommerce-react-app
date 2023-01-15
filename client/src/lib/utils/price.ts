export const getPrice = async (product_priceId) => {
    const result = await fetch(`https://api.stripe.com/v1/prices/${product_priceId}`, {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          'Bearer ' + 
          'sk_test_51MQExRBUeFOv0VolW6YysDb37OyAXqoiSQWVyS1och3yhilj0tPIc3guGHkx7sJAmcnCdLKU5Y8OqxDhedEWFQfX00RjlPiMlf'
      },
    }).then((response) => response.json());
    return result;
  };