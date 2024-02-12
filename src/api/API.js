import metadata from "./meta.json"

export default class API {
  constructor(
    is_secure = true,
    config = {}
  ) {
    this.url = localStorage.getItem("backend-url")
    let url_ = localStorage.getItem("backend-url-th")
    if (!this.url || url_ === "0") {
      if (!url_) localStorage.setItem("backend-url-th", "1")

      let protocol, port
      let configs = metadata["BACKEND"]

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
    // отправляю запрос к backend-у
    let req = new XMLHttpRequest()
    req.open(method, this.url + url, false)

    if (body === {}) req.send()
    else req.send(JSON.stringify(body))

    // принимаю данные
    let return_req
    if (method === "GET")  return_req = true
    if (method === "POST") return_req = false

    if (req.status === 200) {
      if (return_req === true) {
        try {
          return JSON.parse(req.response)
        } catch (e) {
          console.error(e)
          return {}
        }
      }
      if (return_req === false) return req.status
    }
    else if (req.status === 0) return "net::ERR_CONNECTION"
  }
}