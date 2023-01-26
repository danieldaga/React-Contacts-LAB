import { useState } from 'react';
import './App.css'
import ContactTable from './components/ContactTable/ContactTable';
import contacts from "./contacts.json";


const App = () => {



    return (
        <div className='main'>
            <ContactTable propscontacts={contacts}/>
        </div>
    )
}

export default App