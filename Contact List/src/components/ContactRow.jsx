import React from "react";
import { useState } from "react";
import { SelectedContact } from "./SelectedContact.jsx";

export function ContactRow({
  contact,
  contacts,
  selectedContactId,
  setSelectedContactId,
}) {
  return (
    <tr
      onClick={() => {
        setSelectedContactId(contact.id);

        return <SelectedContact />;
      }}
    >
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}
