import { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from "../components/Heading";

export default {
  title: "components/Heading",
  component: Heading,
  args: {
    children: "System",
    size: "md",
  },
  argTypes: {
    size: {
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {};

export const Small: StoryObj<HeadingProps> = {
  args: {
    size: "sm",
  },
};

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: "lg",
  },
};

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: <h1>Grande coisa...</h1>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};
