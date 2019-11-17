import React from "react";

import { storiesOf } from "@storybook/react";
import { Button } from "@storybook/react/demo";

storiesOf("Button Sample", module).add("with Text", () => {
  return <Button>Sample Button</Button>;
});
