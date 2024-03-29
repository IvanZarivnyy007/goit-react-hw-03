// import Contact from "../Contact/Contact";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const ContactList = ({ contacts }) => {
  return (
    <div className="contact-div">
      <ul className="contact-ul">
        {contacts.map((contact) => (
          <div className="contact-div-li" key={contact.id}>
            <li className="contact-li">
              <FaUser />
              {"  "}
              <span className="contact-name">{contact.name}</span> <br />
              <FaPhoneAlt />
              {"  "}
              <span className="contact-number">{contact.number}</span>
            </li>
            <button className="button-contact" type="button">
              Delete
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
