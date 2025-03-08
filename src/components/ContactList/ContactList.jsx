import Contact from "../Contact/Contact";
import style from './ContactList.module.css'

const ContactList = ({ contacts, deleteContact }) => {
  

  return (<ul className={style.cotactBox}>
    {contacts.map((contact) => (
      <li key={contact.id}>
        <Contact contact={contact} deleteContact={deleteContact} />
      </li>
    ))}
  </ul>)
};

export default ContactList;
