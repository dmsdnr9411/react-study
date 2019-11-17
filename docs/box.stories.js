import React from "react";

import { storiesOf } from "@storybook/react";
import Box from "../src/box";

storiesOf("Box", module).add("basic input", () => {
  return <Box />;
});
