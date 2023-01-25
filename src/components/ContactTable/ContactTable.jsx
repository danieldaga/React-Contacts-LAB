import './ContactTable.css'
// import contacts from "../../contacts.json";

const ContactTable = (props) => {

    const {contacts} = props

    return(

        <table>
            <thead>
                <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
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
                    </tr>
                );
                })}
            </tbody>
        </table>
    )
}
export default ContactTable