import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";
import { documentation, preview, repository, workflow } from "../content/cataly";
import { ActionLink } from "./ActionLink";
import { Brand } from "./Brand";
import { Workflow } from "./Workflow";

const meta = {
  title: "Cataly/Primitives",
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Actions: Story = {
  render: () => (
    <div className="actions" style={{ flexWrap: "wrap" }}>
      <ActionLink href={preview} indicator="external">View release</ActionLink>
      <ActionLink href={repository} tone="outline" indicator="github">GitHub</ActionLink>
      <ActionLink href={documentation} tone="quiet" indicator="external">Read the docs</ActionLink>
    </div>
  ),
};

export const Process: Story = {
  render: () => (
    <section style={{ maxWidth: "36rem" }} aria-label="Cataly workflow">
      <Workflow steps={workflow} />
    </section>
  ),
};

export const KeyboardDisclosure: Story = {
  render: Process.render,
  play: async ({ canvas, userEvent }) => {
    const verify = canvas.getByRole("button", { name: "Completion is checked" });
    await expect(verify).toHaveAttribute("aria-expanded", "false");
    await userEvent.tab();
    await expect(canvas.getByRole("button", { name: "A request arrives" })).toHaveFocus();
    await userEvent.tab();
    await userEvent.tab();
    await userEvent.tab();
    await expect(verify).toHaveFocus();
    await userEvent.keyboard("{Enter}");
    await expect(verify).toHaveAttribute("aria-expanded", "true");
    await expect(canvas.getByRole("button", { name: "A request arrives" })).toHaveAttribute("aria-expanded", "false");
  },
};

export const Wordmark: Story = {
  render: () => <Brand />,
};
