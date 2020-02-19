import React from "react";
import { storiesOf } from "@storybook/react";

import Site from "./Site.js";

const site = {
  siteMetadata: {
    title: "Emulsify Gatsby"
  }
};

/**
 * Add storybook definition for Sections.
 */
storiesOf("Templates/Layout", module).add("Default", () => (
  <Site site={site} />
));
