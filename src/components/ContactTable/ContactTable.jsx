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
                                : null
                            }
                            {
                                contacts.wonEmmy
                                ? <td>🏆</td>
                                : null
                            }
                        </tr>
                    );
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default ContactTable