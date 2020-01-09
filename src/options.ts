export const defaultOptions = {
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

export function getDefaultOptionByType(type) {
  return (
    defaultOptions[type] || {
      elements: { line: { tension: 0, borderWidth: 3 } }
    }
  );
}
