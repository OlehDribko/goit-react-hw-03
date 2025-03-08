import style from "./Contact.module.css";

const Contact = ({ contact, deleteContact }) => {
  return (
    <div className={style.contactBox}>
      <div>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>

      <button
        onClick={() => deleteContact(contact.id)}
        className={style.deleteBtn}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
