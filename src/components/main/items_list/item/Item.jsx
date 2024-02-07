import { Routes, Route, Link } from "react-router-dom";
import alt_img from "../not-found-image.png"
import "./item.css"

export default function Item({ name, description, img_url }) {
  if (img_url === undefined) {
    img_url = alt_img
  }

  return (
    <>
      {/*<Link to={ name }>*/}
        <div className="item__box">
          <div className="item__image">
            <img src={ img_url } alt="Not found" />
          </div>
          <div className="item__information">
            <h1>{ name }</h1>
            <p>{ description }</p>
          </div>
        </div>
      {/*</Link>*/}
    </>
  )
}