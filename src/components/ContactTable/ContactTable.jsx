import { useState } from 'react'
import './ContactTable.css'
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
        const sortPopularityContacts =[...contacts].sort((a,b)=>{
            return b.popularity - a.popularity
        })
        setStateContacts(sortPopularityContacts)
    }

    const namePopularity = () =>{
        const namePopularityContacts = [...contacts].sort((a,b)=>a.name.localeCompare(b.name))
        setStateContacts(namePopularityContacts)
    }

    const deleteContacts = (contactsId) => {
        const filteredContacts = contacts.filter((contact) => {
            return contact.id !== contactsId
        })
        setStateContacts(filteredContacts)
    }


    return(
        <div className='container'>
            <div className='button-container'>
            <button onClick={newRandomContact} className='buttons-up'><span>Add Random Contact</span></button>
            <button onClick={()=>sortPopularity()} className='buttons-up'><span>Sort by populary</span></button>
            <button onClick={()=>namePopularity()} className='buttons-up'><span>Sort by name</span></button>
            </div>

            <div className='table-container'>
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
               <span> Delete</span>
            </button></td>
                        </tr>
                    );
                    })}
                </tbody>
            </table>
            </div>
        </div>
    )
}
export default ContactTable