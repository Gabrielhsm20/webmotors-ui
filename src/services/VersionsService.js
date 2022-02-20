import HttpClient from './utils/HttpClient';

class VersionsService {
  constructor() {
    this.httpClient = new HttpClient('https://desafioonline.webmotors.com.br/api/OnlineChallenge');
  }

  async listVersions(params = {}) {
    return this.httpClient.get('/Version', params);
  }
}

export default new VersionsService();
