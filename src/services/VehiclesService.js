import HttpClient from './utils/HttpClient';

class VehiclesService {
  constructor() {
    this.httpClient = new HttpClient('https://desafioonline.webmotors.com.br/api/OnlineChallenge');
  }

  async listVehicles(params = {}) {
    return this.httpClient.get('/Vehicles', { ...params, Page: 1 });
  }
}

export default new VehiclesService();
