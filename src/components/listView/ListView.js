import React from "react";
import GetContacts from "./GetContacts";
import Topbar from "../Topbar";

const ListView = () => {
  return (
    <div>
      <Topbar
        header="Contacts"
        headerLink="/"
        buttonLink="/create"
        buttonText="New"
      />
      <GetContacts />
    </div>
  );
};

export default ListView;
