import { getColor } from "./colors";
import { supportTypes } from "./types";

export function prepareDataset({
  columns,
  columnsColor,
  options,
  type,
  colors,
  fillArea,
  series
}) {
  return columns.slice(1).map((item, index) => {
    var backgroundColor = getColor({
      type: type,
      colors: colors,
      columnsColor,
      index,
      border: false
    });
    var borderColor = getColor({
      type: type,
      colors: colors,
      columnsColor,
      index,
      border: true
    });
    let dataObj = {
      label: item,
      backgroundColor: backgroundColor,
      fill: !!fillArea,
      borderColor: borderColor,
      data: series.map(s => s[index])
    };
    if (options) {
      let chartType = !!fillArea ? "area" : type;
      let combine = supportTypes()[chartType];
      if (combine) {
        options.forEach(ot => {
          if (ot.col === item) {
            var combindType = ot.type;
            if (combine.includes(chartType)) {
              var fill = ot.type === "area";
              if (ot.type === "area") {
                combindType = "line";
              }
              Object.assign(dataObj, { type: combindType, fill: fill });
            }
          }
        });
      }
    }
    return dataObj;
  });
}
