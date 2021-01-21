import React from "react";
import Button from "react-bootstrap/Button";

const emailContact = (email) => {
  console.log(`${email} you got mail`);
};
const callContact = (phone) => {
  console.log(`Calling ${phone}`);
};

export const emailButtonRender = (email) => {
  if (email) {
    return (
      <Button
        variant="light"
        id="email-button"
        className="button"
        onClick={() => {
          emailContact(email);
        }}
      >
        <div id="button-text">email</div>
      </Button>
    );
  }
};

export const callButtonRender = (phone) => {
  if (phone) {
    return (
      <Button
        variant="light"
        id="call-button"
        className="button"
        onClick={() => {
          callContact(phone);
        }}
      >
        <div id="button-text">call</div>
      </Button>
    );
  }
};
