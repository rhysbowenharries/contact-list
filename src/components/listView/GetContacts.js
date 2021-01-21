import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_CONTACTS } from "../../GraphQL/Queries";
import { Form, FormControl } from "react-bootstrap";

import { emailButtonRender, callButtonRender } from "./ButtonOptions";

const GetContacts = () => {
  const { loading, error, data } = useQuery(LOAD_CONTACTS);
  const [contacts, setContacts] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    if (data) {
      setContacts(data.contacts);
    }
  }, [data]);

  function fuzzyFilter(term) {
    return (x) => {
      return (
        x.firstName.toLowerCase().includes(term.toLowerCase()) ||
        x.lastName.toLowerCase().includes(term.toLowerCase()) ||
        (x.email !== null &&
          x.email.toLowerCase().includes(term.toLowerCase())) ||
        (x.phone !== null && x.phone.includes(term)) ||
        !term
      );
    };
  }
  const listRender = () => {
    if (loading) return <p>Loading ...</p>;
    if (error) return <p>Error :(</p>;

    return contacts
      .filter(fuzzyFilter(term))
      .map(({ id, firstName, lastName, email, phone }) => (
        <div key={id}>
          <p>
            {firstName} {lastName}
            {emailButtonRender(email)}
            {callButtonRender(phone)}
          </p>
        </div>
      ));
  };

  return (
    <>
      <Form className="search-bar" span="true">
        <FormControl
          type="text"
          placeholder="Search"
          onChange={(e) => setTerm(e.target.value)}
        />
      </Form>
      {listRender()}
    </>
  );
};

export default GetContacts;
