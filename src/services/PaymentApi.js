import axios from "axios";

class PaymentService {
  constructor() {
    this._baseUrl = "https://beera-station-webhook.herokuapp.com/";
  }

  createStripeCustomer() {
    return axios.post(
      this._baseUrl + "payment",
      {
        "Content-Type": "application/json",
      }
    );
  }

  chargeUser(amount, customerID) {
      debugger
    return axios.post(
      this._baseUrl + "charge",
      {
        amount,
        customerID,
      },
      {
        "Content-Type": "application/json",
      }
    );
  }
}

const PaymentApiService = new PaymentService();
export default PaymentApiService;
