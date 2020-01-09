/// <reference path="index.d.ts" />
import ChartJs from "chart.js";
import { getColor } from "./colors";
import { getDefaultOptionByType } from "./options";
import { axisToChartJS } from "./axis";
import { supportTypes } from "./types";
import { getInspector } from "./inspectors";
import { prepareDataset } from "./dataset";

interface IChartJsComponent extends chartAPI.ChartComponent {
  convert2ChartJsData(dataTable: chartAPI.PGDChartData);
}

let chartID = "com.oneweb.chartjs";
class ChartJSComponent implements IChartJsComponent {
  id: string;
  name: string;
  displayName?: string;
  supportTypes: any;
  _dataTable: chartAPI.PGDChartData;
  _labels: string[];
  _defaultBg: string;
  _datasets: any;
  _type: string;
  _colors: any;
  _fillArea: any;
  _chartjs: any;
  _options: any;
  _config: any;
  constructor() {
    this.id = chartID;
    this.displayName = "ChartJs Component";
    this.name = "Chart.Js";
    this.supportTypes = supportTypes();
  }
  getInspector(type: string): chartAPI.PGDInspectorAPI {
    return getInspector(type);
  }

  convert2ChartJsData(dataTable: chartAPI.PGDChartData) {
    this._dataTable = dataTable;
    var rows = dataTable.rows;
    var columns = dataTable.columns;
    var options = dataTable.options;
    var columnsColor = dataTable.colors;
    this._labels = rows.map(item => {
      return item[0];
    });
    var series = rows.map(item => {
      return item.slice(1);
    });
    this._defaultBg = this._type === "line" ? "transparent" : null;
    this._datasets = prepareDataset({
      columns,
      series,
      options,
      columnsColor,
      type: this._type,
      colors: this._colors,
      fillArea: this._fillArea
    });
    return { labels: this._labels, datasets: this._datasets };
  }
  update(dataTable) {
    if (this._chartjs) {
      if (dataTable) {
        let datasets = this.convert2ChartJsData(dataTable);
        if (this._chartjs.data !== datasets) {
          this._chartjs.data = datasets;
        }
      }
      this._chartjs.update();
    }
  }
  updateConfig(config) {
    if (config && config.colors) {
      this._colors = config.colors;
    } else if (this._chartjs) {
      Object.assign(this._chartjs.config, config);
    }
  }
  axis(axes, type) {
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
  }
  changeTitle(titleOption) {
    if (typeof titleOption === "object" && this._chartjs) {
      titleOption.display = !!titleOption.text;
      Object.assign(this._chartjs.config.options.title, titleOption);
      this._chartjs.update();
    }
  }
  resize() {
    if (this._chartjs) this._chartjs.resize();
  }
  destroy() {
    if (this._chartjs) this._chartjs.destroy();
  }
  render($, _config) {
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
      this._type = _config.type === "barStacked" ? "bar" : "horizontalBar";
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
    this.convert2ChartJsData(this._dataTable);
    this._chartjs = new ChartJs($.Canvas, {
      type: this._type,
      data: {
        labels: this._labels,
        datasets: this._datasets
      },
      options: Object.assign(
        {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        },
        getDefaultOptionByType(this._type),
        _config.options
      )
    });
    this._config = this._chartjs.config;
    return this;
  }
}

(function(ctx: chartAPI.WindowCtx) {
  if (ctx.ChartCtx && ctx.ChartCtx.define) {
    console.log("registered");
    ctx.ChartCtx.define(chartID, ChartJSComponent);
  }
  // @ts-ignore
})(window);
