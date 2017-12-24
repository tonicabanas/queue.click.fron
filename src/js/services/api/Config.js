import URI from 'urijs';


const baseURL = 'localhost';

class BaseConfig {

  static generateURL(path) {
    return baseURL + path;
  }

  static generateURI(path, data) {
    const uri = new URI(this.generateURL(path));
    uri.query(data);
    return uri.toString();
  }

}

export default BaseConfig;
