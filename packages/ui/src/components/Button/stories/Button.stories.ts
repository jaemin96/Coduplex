import { Button } from "../Button";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    pseudo: { hover: true },
  },
  argTypes: {
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    primary: true,
    size: "medium",
    children: "Click Me",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: "Click Me",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: "Click Me",
  },
};
