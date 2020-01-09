import { document, console } from "global";
import { storiesOf } from "@storybook/polymer";
require("../build/index.js");
import { withKnobs, text, select, object } from "@storybook/addon-knobs";

const provider = "com.ava.chartjs";
const toString = JSON.stringify;

let stories = storiesOf("PGXChart", module);
stories.addDecorator(withKnobs);
stories.add(
  "Chart Basic",
  () => {
    let titleOption = {
      text: text("Title", "Hello, PGX!"),
      position: select("Title position", {
        Top: "top",
        Bottom: "bottom",
        Left: "left",
        Right: "right"
      })
    };
    let series = object("Series", {
      category_: ["Jan", "Fab", "Mar", "Apr"],
      Income: [30, 60, 50, 100],
      Outcome: [60, 10, 50, 40]
    });
    let chart = document.createElement("pg-chart");
    chart.setAttribute("provider", provider);
    chart.setAttribute("title-options", toString(titleOption));
    chart.setAttribute("type", "line");
    chart.setAttribute("series", toString(series));
    return chart;
  },
  { timestamps: true, escapeHTML: true }
);
