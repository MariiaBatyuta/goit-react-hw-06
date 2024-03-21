import { useSelector, useDispatch } from "react-redux";
import Contacts from "../Contacts/Contacts";
import { deleteContact } from "../redux/contactSlice";
import css from "./ContactList.module.css";

export default function ContactList() {
    const contacts = useSelector((state) => state.contacts);
    const filters = useSelector((state) => state.filter);

    const dispatch = useDispatch();

    const handleDeleteContact = (id) => {
        dispatch(deleteContact(id));
    };

    let filtredContacts = [];
    if (contacts.length > 0) {
        filtredContacts = contacts.filter(
        contact => contact.name.toLowerCase().split(` `).filter(n => n.includes(filters.filter.toLowerCase())).length > 0);
    }
        
    return (
        <div>
            <ul className={css.contactsContainer}>
                {contacts && filtredContacts.map((contact) => (
                    <li key={contact.id} className={css.contactsList}>
                        <Contacts
                            id={contact.id}
                            name={contact.name}
                            number={contact.number}
                            onDelete={handleDeleteContact} 
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}