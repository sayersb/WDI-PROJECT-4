/* global paypal */
import React from 'react';

class PayPalButton extends React.Component {

  componentDidMount() {
    paypal.Button.render({
      env: 'sandbox',
      client: {
        sandbox: 'access_token$sandbox$ktn2r9x5bhsxx29z$942906951467897d82b8aeaf89848e2e'
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
