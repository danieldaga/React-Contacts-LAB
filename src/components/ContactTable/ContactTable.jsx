import { useState } from 'react'
import './ContactTable.css'
import contact from "../../contacts.json";
const ContactTable = (props) => {

    const {contacts} = props
    // const [stateContacts, setStateContacts] = useState(contact)
    // const firstFive = stateContacts.slice(0, 5)
    // const addRandom = () => {
    //     const randomIndex = Math.floor(Math.random() * stateContacts.length);
    //     const randomContact = stateContacts[randomIndex];
    //     firstFive.push(randomContact);
    // };


    return(
        <div>
            <button className='random-contact'>Add Random Contact</button>
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