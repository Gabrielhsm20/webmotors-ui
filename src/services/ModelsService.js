import HttpClient from './utils/HttpClient';

class ModelsService {
  constructor() {
    this.httpClient = new HttpClient('https://desafioonline.webmotors.com.br/api/OnlineChallenge');
  }

  async listModels(params = {}) {
    return this.httpClient.get('/Model', params);
  }
}

export default new ModelsService();
