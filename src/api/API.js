import META from "./meta.json"

export default class API {
  constructor(
    is_secure = false,
    config_file_path = './meta.json'
  ) {
    this.url = localStorage.getItem("backend-url")
    let url_ = localStorage.getItem("backend-url-th")
    if (!this.url || url_ === "0") {
      if (!url_) localStorage.setItem("backend-url-th", "1")

      let protocol, port
      let configs = META["BACKEND"]

      if (is_secure === true) {
        protocol = configs["SECURE_PROTOCOL"]
        port = configs["SECURE_PORT"]
      } else {
        protocol = configs["PROTOCOL"]
        port = configs["PORT"]
      }

      this.url = protocol + configs["HOSTNAME"] + ":" + port + "/" + configs["API_PATH"]
      localStorage.setItem("backend-url", this.url)
    } else {
      localStorage.setItem("backend-url-th", "0")
    }
  }

  request(
    url, method = "GET",
    body = {}, headers = [""],
  ) {
    let req = new XMLHttpRequest()
    req.open(method, this.url + url, false)
    req.send()

    if (method === "GET") return req
  }
}