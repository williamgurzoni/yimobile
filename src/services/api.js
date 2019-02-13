// Simula recebimento de dados de API

class Api {
  static getFriends() {
    return new Promise((resolve, reject) => {
      const data = require('./feed.json');
      setTimeout(() => {
        resolve(data);
      }, 100);
    });
  }
}

export default Api;