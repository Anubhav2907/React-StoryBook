import React from "react";
import { Button } from "@chakra-ui/core";
import { action, actions } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";
export default {
  title: "Chakra/Button",
  component: Button,
  argTypes: {
    variantColor: { control: "text" },
  },
};

export const Success = () => (
  <Button onClick={action("Click Handler")} variantColor="green">
    Success
  </Button>
);
export const Danger = () => (
  <Button {...actions("onClick", "onMouseOver")} variantColor="red">
    Danger
  </Button>
);
export const Log = () => (
  <Button onClick={() => console.log("Button Clicked")} variantColor="blue">
    Log
  </Button>
);
export const Knobs = () => (
  <Button variantColor="purple" disabled={boolean("Disabled", false)}>
    {text("Label", "Button Label")}
  </Button>
);
