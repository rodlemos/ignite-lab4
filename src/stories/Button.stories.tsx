import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "../components/Button";

export default {
  title: "components/Button",
  component: Button,
  args: {
    children: "Entrar",
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};
