import { storiesOf } from "@storybook/polymer";
import {
    withKnobs,
    number,
    color,
    options,
    boolean,
    text
} from "@storybook/addon-knobs";

let stories = storiesOf("Demo Elements", module);
stories
    .addDecorator(withKnobs)
    .add("Default QRCode", () => {
        let width = number("Width", 250, { min: 0, max: 999 });
        return `<demo-qrcode width="${width}"></demo-qrcode>`;
    })
    .add("Demo Table", () => {
        let bgColor = color("Color", "#222");
        let bool = boolean("Disabled", true);
        let width = text("Width", 250, "GID10");
        var demoTable = document.createElement("demo-table");
        demoTable.setAttribute("width", width);
        demoTable.setAttribute("bg-color", bgColor);
        demoTable.setAttribute("disabled", bool);
        return demoTable;
    })

.add("Table Editor", () => {
    // let hasOrderNo = boolean("Order No", true, 'Table Config');
    // let columnNumber = number("Number Of Column", 3, { min: 0, max: 999 }, 'Table Config');
    // columnNumber="${columnNumber}"
    let headerBgColor = color("Header Background Color", '#343a40', 'Table Styles');
    let headerTextColor = color("Header Text Color", '#ffffff', 'Table Styles');
    let valueBgColor = color("Background Color", '#ffffff', 'Table Styles');
    let valueTextColor = color("Text Color", '#000000', 'Table Styles');
    let valueLinkColor = color("Link Color", '#ffc107', 'Table Styles');
    let valueBtnViewColor = color("Button View Color", '#17a2b8', 'Table Styles');
    let valueBtnViewTextColor = color("Text View Color", '#ffffff', 'Table Styles');


    let hasPaging = boolean('Paging', false, 'Paging');
    let hasPerPage = number('PerPage', 10, {}, 'Paging');


    let hasCheckbox = boolean('Can Checkbox', true, 'Config');
    let hasView = boolean('Can View', false, 'Config');

    return `<table-editor    confighasperpage="${hasPerPage}"    confighaspaging="${hasPaging}" valuebtnviewcolor="${valueBtnViewColor}" valuebtnviewtextcolor="${valueBtnViewTextColor}"   valuelinkcolor="${valueLinkColor}"  valuetextcolor="${valueTextColor}" valuebgcolor="${valueBgColor}" headertextcolor="${headerTextColor}"  headerbgcolor="${headerBgColor}" ></table-editor>`;
})