import { html, property, LitElement, css, unsafeCSS } from "lit-element";

class DemoTableElement extends LitElement {
  @property({
    type: String,
    attribute: "bg-color",
    reflect: true,
    hasChanged(val, prevVal) {
      console.log("hasChagne:", val, prevVal);
      return val !== prevVal;
    }
  })
  bgColor: string = "#222";
  render() {
    return html`
      <style>
        :host {
          display: block;
        }
        #submit {
          background-color: ${unsafeCSS(this.bgColor)};
        }
        #cancel {
          background-color: ${unsafeCSS(this.bgColor)};
        }
      </style>
      <div>
        <button id="cancel">Clickttt ME!</button>
        <button id="submit">Clickxxs ME!</button>
      </div>
    `;
  }
  firstUpdated() {}

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      console.log(`${propName} changed. oldValue: ${oldValue}`);
      if (propName === "bgColor") {
        var el: HTMLButtonElement = this.renderRoot.querySelector("#cancel");
        console.log("el:", el);
        if (el && el.style) el.style.backgroundColor = this.bgColor;
      }
    });
  }
  attributeChangedCallback(name, oldval, newval) {
    console.log("attribute change: ", name, newval);
    super.attributeChangedCallback(name, oldval, newval);
  }
}
customElements.define("demo-table", DemoTableElement);
