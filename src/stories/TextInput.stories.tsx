import { Meta, StoryObj } from "@storybook/react";
import {
  TextInputComponent,
  TextInputProps,
  TextInputRootProps,
} from "../components/TextInput";
import { EnvelopeSimple } from "phosphor-react";

export default {
  title: "components/TextInput",
  component: TextInputComponent.Root,
  args: {
    children: [
      <TextInputComponent.Icon>
        <EnvelopeSimple />
      </TextInputComponent.Icon>,
      <TextInputComponent.Input placeholder="Digite seu e-mail" />,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInputComponent.Input placeholder="Digite seu e-mail" />,
  },
};
