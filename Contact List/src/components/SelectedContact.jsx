import { useEffect } from "react";
import { useState } from "react";
import { ContactRow } from "./ContactRow.jsx";
import { ContactList } from "./ContactList.jsx";
export function SelectedContact({
  contacts,
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function getContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );

        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }
    getContact();
  }, []);

  return (
    contact && (
      <>
        <table>
          <tbody>
            <tr>
              <td>{contact.name}</td>
            </tr>
            <tr>
              <td>{contact.email}</td>
            </tr>
            <tr>
              <td>{contact.phone}</td>
            </tr>
            <tr>
              <td>{contact.username}</td>
            </tr>
            <tr>
              <td>{contact.website}</td>
            </tr>
            <tr>
              <td>{contact.address.city}</td>
            </tr>
            <tr>
              <td>{contact.address.street}</td>
            </tr>
            <tr>
              <td>{contact.address.suite}</td>
            </tr>
            <tr>
              <td>{contact.address.zipcode}</td>
            </tr>
            <tr>
              <td>{contact.address.geo.lat + "/" + contact.address.geo.lng}</td>
            </tr>
            <tr>
              <td>{contact.company.name}</td>
            </tr>
            <tr>
              <td>{contact.company.catchPhrase}</td>
            </tr>
            <tr>
              <td>{contact.company.bs}</td>
            </tr>
            <tr>
              <td>
                <button
                  onClick={() => {
                    {
                      setSelectedContactId(null);
                    }
                  }}
                >
                  Click to Return to Contacts
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    )
  );
}
