require("../build/index.js");
import { configure, addDecorator } from "@storybook/polymer";
import { setOptions } from "@storybook/addon-options";
import "@storybook/addon-console";
import { withKnobs } from "@storybook/addon-knobs";

addDecorator(withKnobs);

setOptions({
  name: `ONEWEB PGX`,
  selectedAddonPanel: "storybooks/storybook-addon-knobs"
});

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);
