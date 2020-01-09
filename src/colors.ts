export function defaultColors(type: string, index: number, alpha = 0.8) {
  let colors = [
    "hsla(156, 44%, 75%, " + alpha + ")",
    "hsla(359, 59%, 75%, " + alpha + ")",
    "rgba(255, 99, 132, " + alpha + ")",
    "rgba(255, 159, 64, " + alpha + ")",
    "rgba(255, 205, 86, " + alpha + ")",
    "rgba(75, 192, 192, " + alpha + ")",
    "rgba(54, 162, 235, " + alpha + ")",
    "rgba(153, 102, 255, " + alpha + ")",
    "rgba(121, 103, 147, " + alpha + ")",
    "rgba(189, 223, 107, " + alpha + ")",
    "rgba(153, 102, 255, " + alpha + ")",
    "rgba(121, 103, 147, " + alpha + ")",
    "rgba(189, 223, 107, " + alpha + ")",
    "rgba(181, 203, 187, " + alpha + ")"
  ];
  let color = colors[index];
  if (!["line", "bar", "radar", "area", "horizontalBar"].includes(type)) {
    return [colors][index];
  }
  return color;
}

export function getColor({ type, colors, columnsColor, index, border }) {
  if (columnsColor instanceof Array && columnsColor.length >= index) {
    return columnsColor[index];
  }
  if (
    columnsColor &&
    typeof columnsColor === "string" &&
    columnsColor.length > 3
  ) {
    return columnsColor;
  }
  if (colors instanceof Array) {
    if (["pie", "doughnut", "polarArea"].includes(type)) {
      return colors;
    } else {
      return colors[index];
    }
  }
  if (typeof colors === "string") {
    return colors;
  }
  return defaultColors(type, index, border ? 1 : 0.8);
}
