import "./App.css";
import { FaAddressBook } from "react-icons/fa";
import ContactForm from "./ContactForm";
import SearchBox from "./SearchBox";
import ContactList from "./ContactList";

export default function App() {
  return (
    <>
      <FaAddressBook size="50" />
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}
