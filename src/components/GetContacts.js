import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_CONTACTS } from "../GraphQL/Queries";

const GetContacts = () => {
  const { loading, error, data } = useQuery(LOAD_CONTACTS);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    if (data) {
      setContacts(data.contacts);
    }
  }, [data]);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error :(</p>;

  return contacts.map(({ id, firstName, lastName, email, phone }) => (
    <div key={id}>
      <p>
        {firstName} {lastName} {email} {phone}
      </p>
    </div>
  ));
};

export default GetContacts;
