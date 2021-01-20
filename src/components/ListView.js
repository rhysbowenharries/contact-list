import React from "react";
import { Form, FormControl } from "react-bootstrap";
import Topbar from "./Topbar";

const ListView = () => {
  return (
    <div>
      <Topbar
        header="Contacts"
        headerLink="/"
        buttonLink="/create"
        buttonText="New"
      />
      <Form span="true">
        <FormControl type="text" placeholder="Search" />
      </Form>

      <h1>home</h1>
    </div>
  );
};

export default ListView;
