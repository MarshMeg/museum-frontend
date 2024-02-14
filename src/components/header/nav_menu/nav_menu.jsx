import {Link} from "react-router-dom";

export default function NavMenu({lang_map, lang}) {
  return (
    <>
      <ul id="nav">
        <li className="nav_link">
          <Link to={"/" + lang + "/main"}>
            {lang_map.main}
          </Link>
        </li>
        <li className="nav_link">
          <Link to={"/" + lang + "/items"}>
            {lang_map.items}
          </Link>
        </li>
      </ul>
    </>
  )
}