import API from "./API.js";

export default class DataAPI extends API {
  constructor(
    is_secure = false,
    config_file_path = './meta.json'
  ) {
    super(is_secure, config_file_path);
    this.url = this.url + "data/"
  }

  get_contacts() {
    let req = this.request("contacts/")

    if (req.status === 200) {
      return JSON.parse(req.response)["contacts"]
    }
    return []
  }

  get_items() {
    let req = this.request("items/")

    if (req.status === 200) {
      return JSON.parse(req.response)["items"]
    }
    return []
  }
}