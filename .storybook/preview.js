import { addDecorator, addParameters } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { withKnobs } from "@storybook/addon-knobs";
import { contexts } from "./contexts";
import { withA11y } from "@storybook/addon-a11y";

addParameters({
  background: [{ name: "Default Theme", value: "#ffffff", default: true }],
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

addDecorator(withContexts(contexts));
addDecorator(withKnobs);
addDecorator(withA11y);
