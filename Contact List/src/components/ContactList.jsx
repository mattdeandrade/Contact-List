import React from "react";
import { useState } from "react";
import { ContactRow } from "./ContactRow.jsx";
import "../App.jsx";

export function ContactList({
  contacts,
  setContacts,
  selectedContactId,
  setSelectedContactId,
}) {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr></tr>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>

        {contacts.map((contact) => {
          return (
            <ContactRow
              key={contact.id}
              contact={contact}
              contacts={contacts}
              selectedContactId={selectedContactId}
              setSelectedContactId={setSelectedContactId}
            />
          );
        })}
      </tbody>
    </table>
  );
}
