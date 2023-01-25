import './App.css'
import ContactTable from './components/ContactTable/ContactTable';
import contacts from "./contacts.json";


const arrayContacts = contacts.splice(0, 5)

const App = () => {

    return (
        <ContactTable contacts={arrayContacts}/>
    )
}

export default App