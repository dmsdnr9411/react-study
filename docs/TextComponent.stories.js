import React from "react";
import TextComponent from "../src/TextComponent";
import { storiesOf } from "@storybook/react";

storiesOf("Text Component", module).add("Text Component", () => {
  return <TextComponent size="massive" />;
});
