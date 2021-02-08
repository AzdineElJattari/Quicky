import React, { useState } from "react";
import { Menu, Icon } from "semantic-ui-react";

export default function Navbar() {
  const [activateItem, setActivateItem] = useState("home");

  const handleItemClick = (e, { name }) => setActivateItem(name);

  return (
    <Menu inverted stackable color="blue" size="huge">
      <Menu.Item
        name="home"
        active={activateItem === "home"}
        onClick={handleItemClick}
      />
      <Menu.Item>
        <span style={{cursor: "pointer"}}>
          {" "}
          <Icon name="shopping cart" />
        </span>
      </Menu.Item>
      <Menu.Item
        name="profile"
        active={activateItem === "profile"}
        onClick={handleItemClick}
      />
    </Menu>
  );
}
