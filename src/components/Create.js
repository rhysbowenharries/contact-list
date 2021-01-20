import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

import Topbar from "./Topbar";

const Create = () => {
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
            <Form.Control column="true" sm="4" type="text" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formBasicLastName">
          <Form.Label column="true" sm="4">
            Last Name
          </Form.Label>
          <Col sm="8">
            <Form.Control column="true" sm="4" type="text" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formBasicPhone">
          <Form.Label column="true" sm="4">
            Phone
          </Form.Label>
          <Col sm="8">
            <Form.Control column="true" sm="4" type="tel" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formBasicEmail">
          <Form.Label column="true" sm="4">
            Email
          </Form.Label>
          <Col sm="8">
            <Form.Control column="true" sm="4" type="email" />
          </Col>
        </Form.Group>

        <Button
          variant="light"
          type="submit"
          id="submit-button"
          className="button"
        >
          <div id="button-text">Submit</div>
        </Button>
      </Form>
    </div>
  );
};

export default Create;
