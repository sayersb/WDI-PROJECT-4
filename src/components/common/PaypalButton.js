/* global paypal */
import React from 'react';

class PayPalButton extends React.Component {

  componentDidMount() {
    console.log(this.props.amount);
    paypal.Button.render({
      env: 'sandbox',
      client: {
        sandbox: 'AU_mYjIkfpdm9UnQ7gQNzfjiKbAjqSMFPPpi7AchIM03oxmkPrfp5UktBkW43Igp1ItZUtD5jxSe8vTF'
      },
      payment: (data, actions) => {
        return actions.payment.create({
          transactions: [{
            amount: {
              total: String(this.props.amount),
              currency: 'GBP'
            },
            description: this.props.description
          }]
        });
      },
      onAuthorize: (data, actions) => {
        return actions.payment.execute()
          .then(() => this.props.onSuccess());
      }
    }, this.paypalButton);
  }

  render() {
    return (
      <div ref={element => this.paypalButton = element} />
    );
  }
}

export default PayPalButton;
