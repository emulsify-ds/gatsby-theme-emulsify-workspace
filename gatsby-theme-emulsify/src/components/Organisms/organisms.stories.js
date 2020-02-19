import React from "react";
import { storiesOf } from "@storybook/react";

import Header from "./Header/Header.component";
import Main from "./Main/Main.component";
import Tabs from "./Main/Tabs.component";

const tabs = [
  {
    node: {
      id: 1,
      fields: { slug: "cool-tab" },
      frontmatter: { tab: "Cool" }
    }
  },
  {
    node: {
      id: 2,
      fields: { slug: "rad-tab" },
      frontmatter: { tab: "Radical" }
    }
  },
  {
    node: {
      id: 3,
      fields: { slug: "righteous-tab" },
      frontmatter: { tab: "Righteous" }
    }
  }
];

/**
 * Add storybook definition for Sections.
 */
storiesOf("Organisms/Sections", module)
  .add("Header", () => <Header siteTitle={"Emulsify Gatsby"} />)
  .add("Main", () => <Main />)
  .add("Tabs", () => <Tabs tabs={tabs} id={2} />);
