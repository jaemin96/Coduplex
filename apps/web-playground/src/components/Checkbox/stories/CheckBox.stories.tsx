import { CheckBox } from "..";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof CheckBox> = {
  title: "Components/CheckBox",
  component: CheckBox,
  parameters: {
    layout: "centered",
    pseudo: { hover: true },
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "체크박스",
    checked: false,
    id: "check",
  },
};

export const Checked: Story = {
  args: {
    label: "체크박스",
    checked: true,
    id: "check",
  },
};
