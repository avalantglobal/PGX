/// <reference path="index.d.ts" />
import ChartJs from "chart.js";

(function(ctx: chartAPI.WindowCtx) {
  if (ctx.ChartCtx && ctx.ChartCtx.define) {
    console.log("registered");
    ctx.ChartCtx.define(
      "com.oneweb.chartjs",
      function(): chartAPI.ChartProvider {
        var flatColor = function(h) {
          var PHI = 0.618033988749895;
          var s, v, hue;
          if (h === undefined) {
            hue = Math.floor(Math.random() * (360 - 0 + 1) + 0) / 360;
            h = (hue + hue / PHI) % 360;
          } else h /= 360;
          v = Math.floor(Math.random() * (100 - 20 + 1) + 20);
          s = (v - 10) / 100;
          v /= 100;

          var r, g, b, i, f, p, q, t;
          i = Math.floor(h * 6);
          f = h * 6 - i;
          p = v * (1 - s);
          q = v * (1 - f * s);
          t = v * (1 - (1 - f) * s);
          switch (i % 6) {
            case 0:
              r = v;
              g = t;
              b = p;
              break;
            case 1:
              r = q;
              g = v;
              b = p;
              break;
            case 2:
              r = p;
              g = v;
              b = t;
              break;
            case 3:
              r = p;
              g = q;
              b = v;
              break;
            case 4:
              r = t;
              g = p;
              b = v;
              break;
            default:
              r = v;
              g = p;
              b = q;
          }
          r = Math.round(r * 255);
          g = Math.round(g * 255);
          b = Math.round(b * 255);

          var finalColor =
            "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

          this.h = h;
          this.s = s;
          this.v = v;
          this.r = r;
          this.g = g;
          this.b = b;
          this.hex = finalColor;
        };
        function getRandomColor(alpha = 1, FLAT = false, deg = 90) {
          if (FLAT) {
            var x = new flatColor(deg);
            console.log(
              "x:",
              "rgba(" + x.r + "," + x.g + "," + x.b + "," + alpha + ")"
            );
            return "rgba(" + x.r + "," + x.g + "," + x.b + "," + alpha + ")";
          }
          var o = Math.round,
            r = Math.random,
            s = 255;
          return (
            "rgba(" +
            o(r() * s) +
            "," +
            o(r() * s) +
            "," +
            o(r() * s) +
            "," +
            alpha +
            ")"
          );
        }
        let defaultOptionList = {
          bar: {
            scales: { yAxes: [{ ticks: { beginAtZero: true } }] },
            elements: { line: { tension: 0, borderWidth: 1 } }
          },
          line: {},
          doughnut: {},
          radar: {},
          pie: {},
          polarArea: {},
          bubble: {}
        };
        function defaultOptionByType(type) {
          return (
            defaultOptionList[type] || {
              elements: { line: { tension: 0, borderWidth: 3 } }
            }
          );
        }
        function defaultColors(type, index, alpha = 0.8) {
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
          if (
            !["line", "bar", "radar", "area", "horizontalBar"].includes(type)
          ) {
            return [colors][index];
          }
          return color;
        }

        /**
         * Convert PGDChart Axis API to ChartJS Axis API.
         * example:
         * ```json
         * { "display": true,"label":"Hello, World","color": "red","lineWidth": 5,"dashWidth": 3,"dashOffset": 30 }
         * ```
         * @param {ChartAPI.Axis} data
         */
        function axisToChartJS(data, type, axis) {
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
            // objBuilder.scaleLabel = {
            //   display: !!data.label,
            //   labelString: data.label
            // };
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
                  !isNaN(data.dashOffset)
                    ? data.dashOffset
                    : data.dashWidth || 0
                ],
                lineWidth:
                  typeof data.lineWidth === "number" ? data.lineWidth : 1,
                color:
                  typeof data.color === "string"
                    ? data.color
                    : "rgba(0, 0, 0, 0.1)",
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
        function getColor({
          type,
          colors,
          columnsColor,
          maxColor,
          index,
          border
        }) {
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
        function supportTypes() {
          return {
            bar: ["line", "area"],
            line: ["area"],
            area: ["line"],
            radar: false,
            pie: false,
            doughnut: false,
            halfDoughnut: false,
            polarArea: false,
            barStacked: false,
            horizontalBar: false,
            horizontalBarStacked: false
          };
        }
        return {
          id: "com.oneweb.chartjs",
          name: "Chart.Js",
          supportTypes: supportTypes(),
          getInspector: function(type) {
            return {};
          },
          toDataset: function(dataTable) {
            this._dataTable = dataTable;
            var rows = this._dataTable.rows;
            var columns = this._dataTable.columns;
            var options = this._dataTable.options;
            var columnsColor = this._dataTable.colors;
            this._labels = rows.map(item => {
              return item[0];
            });
            var sr = rows.map(item => {
              return item.slice(1);
            });
            this._defaultBg = this._type === "line" ? "transparent" : null;
            this._datasets = columns.slice(1).map((item, index) => {
              var backgroundColor = getColor({
                type: this._type,
                colors: this._colors,
                columnsColor,
                maxColor: sr.length,
                index,
                border: false
              });
              var borderColor = getColor({
                type: this._type,
                colors: this._colors,
                columnsColor,
                maxColor: sr.length,
                index,
                border: true
              });
              let dataObj = {
                label: item,
                backgroundColor: backgroundColor,
                fill: !!this._fillArea,
                borderColor: borderColor,
                data: sr.map(s => s[index])
              };
              if (options) {
                let _type = !!this._fillArea ? "area" : this._type;
                let combine = supportTypes()[_type];
                if (combine) {
                  options.forEach(ot => {
                    if (ot.col === item) {
                      var type = ot.type;
                      if (combine.includes(type)) {
                        var fill = ot.type === "area";
                        if (ot.type === "area") {
                          type = "line";
                        }
                        Object.assign(dataObj, { type: type, fill: fill });
                      }
                    }
                  });
                }
              }
              return dataObj;
            });
            return { labels: this._labels, datasets: this._datasets };
          },
          update: function(dataTable) {
            if (this._chartjs) {
              if (dataTable) {
                let datasets = this.toDataset(dataTable);
                if (this._chartjs.data !== datasets) {
                  this._chartjs.data = datasets;
                }
              }
              this._chartjs.update();
            }
          },
          updateConfig: function(config) {
            if (config && config.colors) {
              this._colors = config.colors;
            } else if (this._chartjs) {
              Object.assign(this._chartjs.config, config);
            }
          },
          axis: function(axes, type) {
            if (typeof axes !== "object") {
              return;
            }
            if (typeof axes.x === "object") {
              if (this._chartjs && this._chartjs.config) {
                Object.assign(
                  this._chartjs.config.options.scales.xAxes[0],
                  axisToChartJS(axes.x, type, "x")
                );
              }
            }
            if (typeof axes.y === "object") {
              if (this._chartjs && this._chartjs.config) {
                Object.assign(
                  this._chartjs.config.options.scales.yAxes[0],
                  axisToChartJS(axes.y, type, "y")
                );
              }
            }
          },
          changeTitle: function(titleOption) {
            if (typeof titleOption === "object" && this._chartjs) {
              titleOption.display = !!titleOption.text;
              Object.assign(this._chartjs.config.options.title, titleOption);
              this._chartjs.update();
            }
          },
          resize: function() {
            if (this._chartjs) this._chartjs.resize();
          },
          destroy: function() {
            if (this._chartjs) this._chartjs.destroy();
          },
          render: function($, _config) {
            this._dataTable = _config.dataTable;
            this._options = _config.options;
            this._type = _config.type;
            this._fillArea = _config.type === "area";
            if (_config.type === "area") {
              this._type = "line";
            }
            if (
              _config.type === "barStacked" ||
              _config.type === "horizontalBarStacked"
            ) {
              this._type =
                _config.type === "barStacked" ? "bar" : "horizontalBar";
              let stacked = true;
              let xAxes = [{ stacked }];
              let yAxes = [{ stacked }];
              let scales = { xAxes, yAxes };
              if (!_config.options.scales) {
                Object.assign(_config.options, {
                  scales
                });
              } else if (_config.options.scales) {
                if (!_config.options.scales.xAxes) {
                  Object.assign(_config.options.scales, { xAxes });
                } else if (_config.options.scales.xAxes) {
                  Object.assign(_config.options.scales.xAxes[0], { stacked });
                }
                if (!_config.options.scales.yAxes) {
                  Object.assign(_config.options.scales, { yAxes });
                } else if (_config.options.scales.yAxes) {
                  Object.assign(_config.options.scales.yAxes[0], { stacked });
                }
              }
            }
            if (_config.type === "halfDoughnut") {
              this._type = "doughnut";
              Object.assign(_config.options, {
                rotation: 1 * Math.PI,
                circumference: 1 * Math.PI
              });
            }
            this.toDataset(this._dataTable);
            this._chartjs = new ChartJs($.Canvas, {
              type: this._type,
              data: {
                labels: this._labels,
                datasets: this._datasets
              },
              options: Object.assign(
                {},
                defaultOptionByType(this._type),
                _config.options
              )
            });
            this._config = this._chartjs.config;
            return this;
          }
        };
      }
    );
  }
  // @ts-ignore
})(window);
