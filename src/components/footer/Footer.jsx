import ContactsList from "./contacts_list/ContactsList.jsx";
import DataAPI from "../../api/DataAPI.js";
import "./footer.css"

export default function Footer({language}) {
  let contacts = new DataAPI().get_contacts()

  return (
    <footer>
      <ContactsList contacts={contacts}/>
    </footer>
  )
}