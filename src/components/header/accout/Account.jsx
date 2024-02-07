import AccountAPI from "../../../api/AccountAPI.js"
import { Link } from "react-router-dom";
import "./accout.css"


export default function Account({ titles_map }) {
  let account = new AccountAPI()
  let username = account.get_status()

  if (username !== "ERR401" && username) {
    return (
      <div className="account__box">
        <p>{ username } |</p>
        <Link to="/account/logout/">{ titles_map.logout }</Link>
      </div>
    )
  } else {
    return (
      <div className="account__box">
        <Link to="/account/login/">{ titles_map.login }</Link>
        <p>|</p>
        <Link to="/account/reg/">{ titles_map.reg }</Link>
      </div>
    )
  }
}