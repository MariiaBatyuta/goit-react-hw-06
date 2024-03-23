import { useSelector, useDispatch } from "react-redux";
import Contacts from "../Contacts/Contacts";
import css from "./ContactList.module.css";
import { deleteContact, getContacts } from "../../redux/contactSlice";
import { getFilter } from "../../redux/filtersSlice";

export default function ContactList() {
    const contacts = useSelector(getContacts);
    const filters = useSelector(getFilter);

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