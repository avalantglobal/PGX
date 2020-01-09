import { document, console } from "global";
import { storiesOf } from "@storybook/polymer";
import { withKnobs, text, number, select } from "@storybook/addon-knobs";

let stories = storiesOf("PGComponent", module);
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
stories.add("QRCode", () => {
  const width = number("Width", 250);
  const content = text("Content", "PageDesigner");
  const optionList = {
    Low: "L",
    Medium: "M",
    Quartile: "Q",
    High: "H",
  };
  const defaultValue = "L";
  const level = select("Error lv.", optionList, defaultValue);
  return `<pg-qrcode width="${width}" content="${content}" errcorrectionlevel="${level}"></pg-qrcode>`;
});
