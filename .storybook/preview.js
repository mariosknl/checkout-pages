import { addDecorator, addParameters } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { contexts } from "./contexts";

addParameters({
  background: [{ name: "Default Theme", value: "#ffffff", default: true }],
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

addDecorator(withContexts(contexts));
