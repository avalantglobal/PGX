/**
 * Convert PGDChart Axis API to ChartJS Axis API.
 * example:
 * ```json
 * { "display": true,"label":"Hello, World","color": "red","lineWidth": 5,"dashWidth": 3,"dashOffset": 30 }
 * ```
 * @param {ChartAPI.Axis} data
 */
export function axisToChartJS(data, type, axis) {
  if (typeof data !== "object") {
    return;
  }
  let objBuilder = {};
  if (typeof data.display === "boolean") {
    Object.assign(objBuilder, { display: data.display });
  }
  if (typeof data.label === "string") {
    Object.assign(objBuilder, {
      scaleLabel: { display: !!data.label, labelString: data.label }
    });
  }
  if (
    typeof data.color === "string" ||
    !isNaN(data.dashWidth) ||
    !isNaN(data.dashOffset) ||
    !isNaN(data.lineWidth) ||
    !["radar", "pie", "doughnut", "polarArea"].includes(type)
  ) {
    Object.assign(objBuilder, {
      gridLines: {
        borderDash: [
          data.dashWidth || 0,
          !isNaN(data.dashOffset) ? data.dashOffset : data.dashWidth || 0
        ],
        lineWidth: typeof data.lineWidth === "number" ? data.lineWidth : 1,
        color:
          typeof data.color === "string" ? data.color : "rgba(0, 0, 0, 0.1)",
        display: true,
        drawBorder: true,
        drawOnChartArea: true,
        drawTicks: true,
        offsetGridLines: axis.indexOf("x") >= 0,
        tickMarkLength: 10
      }
    });
  }
  return objBuilder;
}
