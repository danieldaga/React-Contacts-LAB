import './ContactTable.css'
import contacts from "../../contacts.json";

const ContactTable = (props) => {

    const {contacts} = props

    return(

        <table>
            <tr>
                <td>Picture</td>
                <td>Name</td>
                <td>Popularity</td>
            </tr>
            <tr>
                <td>{contacts.pictureUrl}</td>
                <td>{contacts.name}</td>
                <td>{contacts.popularity}</td>
            </tr>
        </table>
    )
}
