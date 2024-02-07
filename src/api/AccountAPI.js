import API from "./API.js";

export default class AccountAPI extends API {
  constructor(
    is_secure = false,
    config_file_path = './meta.json'
  ) {
    super(is_secure, config_file_path);
    this.url = this.url + "account/"
  }

  get_status() {
    // генерация и отправка запроса
    let req = this.request("status/")

    // приём данных из запроса
    if (req.status === 200) return JSON.parse(req.response).username

    if (req.status === 401) return "ERR401"

    console.error(`Error: ${req.response.status()}`)
    return null
  }

  // logout() {
  //     let req = new XMLHttpRequest()
  //     req.open('POST', `${this.url}logout/`)
  //     req.send()
  //
  //
  // }
  //
  // login(login, password) {
  //     let req = new XMLHttpRequest()
  // }
}