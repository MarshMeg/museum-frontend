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
    if (typeof req === "object") return req.username
    if (typeof req === "string") {
      console.log(req)
      return null
    }
  }

  login(
    username = "", email = "",
    password
  ) {
    let body
    if (username !== "") body = {"username": username, "password": password}
    else body = {"email": email, "password": password}
    let req = this.request("login/", "POST", body)
  }
}