import { useState } from 'react';
import './App.css'
import ContactTable from './components/ContactTable/ContactTable';
import contacts from "./contacts.json";

// const arrayContacts = contacts.slice(0, 5)

const App = () => {



    return (
        <div>
            <ContactTable propscontacts={contacts}/>
        </div>
    )
}

export default App