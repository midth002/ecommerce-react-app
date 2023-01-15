export const getPrice = async (product_priceId) => {
    const result = await fetch(`https://api.stripe.com/v1/prices/${product_priceId}`, {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          'Bearer ' +
          'sk_test_51LAbiTGHZy3akc3nREvfOp259FlzTqInBGDxTC7owmSvHmb5Mi7oDOLxf0OuZvFKdHUf4Z4L9EGkWIbXaN6Lheco00LzdU4dG7',
      },
    }).then((response) => response.json());
    return result;
  };