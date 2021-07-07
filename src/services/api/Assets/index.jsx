import axios from "axios";
const instance = axios.create({ baseURL: "http://localhost:5500" });

class AssetRequest {
  getAll = async () => {
    try {
      const data = await instance.get("/assets");
      return [data, null];
    } catch (error) {
      return [null, error];
    }
  };
}

export default AssetRequest;
