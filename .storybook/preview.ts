import type { Preview } from "@storybook/react-vite";
import "../src/styles/global.css";

document.documentElement.classList.add("dark", "cataly-theme");

const preview: Preview = {
  parameters: {
    backgrounds: { disable: true },
    layout: "padded",
    a11y: { test: "error" },
  },
};

export default preview;
