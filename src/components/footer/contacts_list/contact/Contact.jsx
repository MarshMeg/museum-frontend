import "./contact.css"

export default function Contact({url, img_url, title}) {
  let img = localStorage.getItem("backend-url").replace("api/", "") + img_url

  return (
    <div className="footer__contact">
      <a href={url}>
        <img src={img} alt={title}/>
      </a>
    </div>
  )
}