import Contact from "./contact/Contact.jsx";
import "./contacts_list.css"

export default function ContactsList({contacts}) {
  if (!Array.isArray(contacts)) return <></>

  const contacts_map = contacts.map(
    (contact) => (
      <Contact
        key={contact.title}
        url={contact.url}
        img_url={contact.img}
        title={contact.title}
      />
    ))

  return <div className="footer__contacts">{contacts_map}</div>
}