import { useState } from 'react'
import './ContactTable.css'
// import contact from "../../contacts.json";
const ContactTable = (props) => {

    const {propscontacts} = props

    const [contacts, setStateContacts] = useState(propscontacts.slice(0,5))

    const newRandomContact = () => {
            const newContact =
            propscontacts[Math.floor(Math.random() * propscontacts.length)];

        if (!contacts.includes(newContact)) {
            setStateContacts([newContact, ...contacts]);
        }
    };

    const sortPopularity = () =>{
        const sortPopularityContacts = contacts.sort((a,b)=>{
            return b.popularity - a.popularity
        })
        setStateContacts(sortPopularityContacts)
    }


    const deleteContacts = (contactsId) => {
        const filteredContacts = contacts.filter((contact) => {
            return contact.id !== contactsId
        })
        setStateContacts(filteredContacts)
    }


    return(
        <div>
            <button onClick={newRandomContact} className='random-contact'>Add Random Contact</button>
            <button className='sort-populary'>Sort by populary</button>
            <button className=''>Sort by name</button>

            <table>
                <thead>
                    <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    <th>Won Oscar</th>
                    <th>Won Emmy</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contacts) => {
                    return (
                        <tr key={contacts.id} className="table">
                        <td>
                            <img src={contacts.pictureUrl} alt={contacts.name} className='image-contact'/>
                        </td>
                        <td>{contacts.name}</td>
                        <td>{contacts.popularity}</td>
                            {
                                contacts.wonOscar
                                ? <td>🏆</td>
                                : <td></td>
                            }
                            {
                                contacts.wonEmmy
                                ? <td>🏆</td>
                                : <td></td>
                            }
                            <td><button onClick={() => deleteContacts(contacts.id)} className="btn-delete">
                Delete
            </button></td>
                        </tr>
                    );
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default ContactTable