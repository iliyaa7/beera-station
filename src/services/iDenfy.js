import axios from "axios";

class IdenfyService {
  constructor() {
    this._baseUrl = 'https://ivs.idenfy.com/';
    this._apiKey = 'W9nYbKUCJKQ';
    this._apiSecret = 'IAPOFLqE7mXH0qfYpjuj';
    this._clinetId = 'idenfySampleClientID';
  }

  getAuthToken() {
    return axios.post(
        this._baseUrl + 'api/v2/token',
        {clientId: this._clinetId},
        {
          auth: {
            username: this._apiKey,
            password: this._apiSecret,
          },
        },
      );
  }

  getVerificationData(scanRef) {
    return axios.post(
        this._baseUrl + 'api/v2/data',
        {scanRef: scanRef},
        {
          auth: {
            username: this._apiKey,
            password: this._apiSecret,
          },
        },
      );
  }
}

const IdenfyApiService = new IdenfyService();
export default IdenfyApiService;
