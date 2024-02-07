import Account from "./accout/Account.jsx";
import logo from "../../images/logo_dark_them.svg"
import { Link } from "react-router-dom";
import './header.css';

import language_map from "./titles_map.json"

export default function Header({ language }) {
  let titles_map = language_map[language]

  return (
    <header>
      <div className="header__logo">
        <img src={ logo } alt=""/>
        <p>Завьяловский школьный музей</p>
      </div>
      <nav className="header__navbar">
        <Link to={ "/"+language+"/main" }>{ titles_map.nav.main }</Link>
        <Link to={ "/"+language+"/items" }>{ titles_map.nav.items }</Link>
      </nav>
      <div className="header__user">
        <Account titles_map={ titles_map.account }/>
      </div>
    </header>
  )
}