import { useSelector } from "react-redux";
import { getContacts, getFilter } from "../redux/selectors";
import Contact from "./Contact";
import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = filter
    ? contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;

  return (
    <ul className={css.contacts}>
      {filteredContacts.map((contact) => {
        return (
          <li className={css.contact} key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          </li>
        );
      })}
    </ul>
  );
}
