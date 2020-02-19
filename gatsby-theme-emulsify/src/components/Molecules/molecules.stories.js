import React from "react";
import { storiesOf } from "@storybook/react";

import MainMenu from "./Menus/MainMenu.component";
import ListItem from "../Atoms/ListItem/ListItem.component";

/**
 * Add storybook definition for Menus.
 */
storiesOf("Molecules/Menus", module)
  .add("Main Menu", () => (
    <MainMenu>
      <ListItem item="Welcome" itemLink="#" icon>
        <MainMenu>
          <ListItem item="About" itemLink="#" icon />
          <ListItem item="Why are You Here?" itemLink="#" icon />
        </MainMenu>
      </ListItem>
      <ListItem item="Guidelines" itemLink="#" icon>
        <MainMenu>
          <ListItem item="Accessibility" itemLink="#" icon />
          <ListItem item="Coding Standards" itemLink="#" icon />
        </MainMenu>
      </ListItem>
      <ListItem item="Components" itemLink="#" icon>
        <MainMenu>
          <ListItem item="Accordion" itemLink="#" icon />
          <ListItem item="Card" itemLink="#" icon />
        </MainMenu>
      </ListItem>
    </MainMenu>
  ))
  .add("Main Menu Large", () => (
    <MainMenu large>
      <ListItem item="Site 1" itemLink="#" />
      <ListItem item="Site 2" itemLink="#" />
    </MainMenu>
  ));
