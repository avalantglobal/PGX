import { document, console } from "global";
import { storiesOf } from "@storybook/polymer";
import { withKnobs, text, number, select } from "@storybook/addon-knobs";

let stories = storiesOf("PGDComponent", module);
stories.addDecorator(withKnobs);
stories.add("heading", () => {
  const name = text("Name", "ONEWEB");
  return `<h1>Hello ${name}!</h1>`;
});
stories.add("button", () => {
  const label = "Type";
  const optionList = {
    button: "button",
    submit: "submit",
    reset: "reset"
  };
  const defaultValue = "button";
  const btnType = select(label, optionList, defaultValue);
  const button = document.createElement("button");
  button.type = btnType;
  button.innerText = "😀 Hello";
  button.addEventListener("click", e => console.log(e));
  return button;
});
stories.add("demo-element", () => {
  const textComponent = text("Text Component", "PGD");
  return `<demo-element text="${textComponent}"></demo-element>`;
});
stories.add("qr-code", () => {
  return `<qr-code-element witdh='400'></qr-code-element>`;
});

