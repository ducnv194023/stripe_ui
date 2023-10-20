const stripe = require('stripe')('sk_test_51NOCRdJ5ODp9JTmN45oGtRw2mmE5zOKi6K5ga6nH3jP99GhfQS1MtDIdCxD7Wx0mJZ8rMKqzHlhGSCT515ZlL9fQ00jsVnCV7t');

function paymentMethod  () {
    stripe.invoices.pay(
        'in_1Nl2KmJ5ODp9JTmNFxq6Xssl'
      ).then(function(result) {
        // Handle result.error or result.paymentMethod
        console.log(result)
      });
}

paymentMethod()
