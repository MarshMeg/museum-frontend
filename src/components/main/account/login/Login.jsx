import AccountAPI from "../../../../api/AccountAPI.js";
import "./login.css"

const lang_map = {
  "ru": {
    "login": "Имя пользователя или адрес эл. почты",
    "password": "Пароль",
    "button": "Войти"
  },
  "en": {
    "login": "Username or email",
    "password": "Password",
    "button": "Login"
  },
  "ud": {
    "login": "",
    "password": "",
    "button": ""
  }
}

export default function Login({ lang }) {
  let user_account_data = {
    "login": "",
    "password": ""
  }
  let varChanged = varChange.bind(this)
  let login_ = login.bind(this)

  function varChange(event) {
    user_account_data[event.target.id] = event.target.value
  }

  function login(event) {
    let login, password
    login = user_account_data.login
    password = user_account_data.password

    let login_type = ""
    if   ("@" in login) login_type = "email"
    else                login_type = "username"

    let account = new AccountAPI()
    if (login_type === "email") account.login("", login, password)
    else account.login(login, "", password)
  }


  let title_map = lang_map[lang]
  return (
    <>
      <form id="login_form" onSubmit={ login }>
        <label id="login">
          { title_map.login } <br/>
          <input onChange={ varChanged } type="text" id="login" />
        </label>
        <label id="password">
          { title_map.password } <br/>
          <input onChange={ varChanged } type="password" id="password" />
        </label>
        <input id="submit" type="submit" value={title_map.button} />
      </form>
    </>
  )
}