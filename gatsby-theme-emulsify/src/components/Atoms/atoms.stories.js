import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "./Button/Button.component";
import DownIcon from "./Icons/Down.component";
import GridIcon from "./Icons/Grid.component";

/**
 * Add storybook definition for Button.
 */
storiesOf("Atoms/Button", module).add("Default", () => (
  <Button onClick={action("button-clicked")}>Click Here</Button>
));

/**
 * Add storybook definition for Icons.
 */
storiesOf("Atoms/Icons", module)
  .add("Grid", () => <GridIcon />)
  .add("Down", () => <DownIcon aria-label="Open Menu" />);
