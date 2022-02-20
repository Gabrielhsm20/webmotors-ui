import HttpClient from './utils/HttpClient';

class BrandsService {
  constructor() {
    this.httpClient = new HttpClient('https://desafioonline.webmotors.com.br/api/OnlineChallenge');
  }

  async listBrands() {
    return this.httpClient.get('/Make');
  }
}

export default new BrandsService();
