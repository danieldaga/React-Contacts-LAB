import { useState } from 'react';
import './App.css'
import ContactTable from './components/ContactTable/ContactTable';
import contacts from "./contacts.json";

const arrayContacts = contacts.splice(0, 5)

const App = () => {



    return (
        <div>
            <ContactTable contacts={arrayContacts}/>
        </div>
    )
}

export default App