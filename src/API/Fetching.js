class Fetching {
  static async getAccessToken(url) {
    const config = require("./config.json");
    const accessKey = config.accessKey;
    const clientId = config.clientId;
    const deviceId = config.deviceId;
    try {

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          'AccessKey': accessKey,
        },
        body: JSON.stringify({
            "idClient": clientId,
            "paramName": "device",
            "paramValue": deviceId,
            "latitude": 0,
            "longitude": 0,
            "sourceQuery": 0
          })
      });
      if (!response.ok) {
        throw new Error('Failed to fetch access token');
      }
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }
  static async getBonuses(url) {
    const config = require("./config.json");
    const accessKey = config.accessKey;
    const clientId = config.clientId;
    const deviceId = config.deviceId;
    try {

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          'AccessKey': accessKey,
        },
       
      });
      if (!response.ok) {
        throw new Error('Failed to fetch access token');
      }
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }
}

export default Fetching;
