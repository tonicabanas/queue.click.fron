import axios from 'axios';
import Config from './Config';


class MyService {

  static get() {
    return new Promise((resolve) => {
      const endpoint = '/end-point';
      axios({
        method: 'GET',
        url: Config.generateURL(endpoint),
      }).then((response) => {
        resolve(response.data);
      });
    });
  }

}

export default MyService;
