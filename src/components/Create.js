import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useMutation } from "@apollo/client";

import Topbar from "./Topbar";
import { CREATE_CONTACT } from "../GraphQL/Mutations";

const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [addContact, { error }] = useMutation(CREATE_CONTACT);

  const createContact = () => {
    addContact({
      variables: {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email,
      },
    });

    if (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Topbar
        header="New Contact"
        headerLink="/create"
        buttonLink="/"
        buttonText="Back"
      />
      <Form>
        <Form.Group as={Row} controlId="formBasicFirstName">
          <Form.Label column="true" sm="4">
            First Name
          </Form.Label>
          <Col sm="8">
            <Form.Control
              column="true"
              sm="4"
              type="text"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formBasicLastName">
          <Form.Label column="true" sm="4">
            Last Name
          </Form.Label>
          <Col sm="8">
            <Form.Control
              column="true"
              sm="4"
              type="text"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formBasicPhone">
          <Form.Label column="true" sm="4">
            Phone
          </Form.Label>
          <Col sm="8">
            <Form.Control
              column="true"
              sm="4"
              type="tel"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formBasicEmail">
          <Form.Label column="true" sm="4">
            Email
          </Form.Label>
          <Col sm="8">
            <Form.Control
              column="true"
              sm="4"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Col>
        </Form.Group>

        <Button
          variant="light"
          type="submit"
          className="button"
          onClick={createContact}
        >
          <div id="button-text">Submit</div>
        </Button>
      </Form>
    </div>
  );
};

export default Create;
