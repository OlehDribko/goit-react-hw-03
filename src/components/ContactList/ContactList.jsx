import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";
import { selectFilter, selectontacts } from "../../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(selectontacts);
  const filter = useSelector(selectFilter);
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );
  return (
    <ul className={style.cotactBox}>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
