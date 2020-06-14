import { LitElement, html, property } from "lit-element";
import QrCodeWithLogo from "qr-code-with-logo";

class QRCodeElement extends LitElement {
  @property({ type: String }) pgxId = "com.ava.qrcode";
  @property({ type: String }) content: "";
  @property({ type: String }) width = 150;
  @property({ type: String, attribute: "correction-level" }) errCorrectionLevel = "Q";
  @property({ type: String, attribute: "foreground-color" }) colorDark = "#000000ff";
  @property({ type: String, attribute: "background-color" }) colorLight = "#ffffff";
  @property({ type: String, attribute: "type-content" }) typeContent = "link";
  @property({ type: String, attribute: "link" }) link = "https://oneweb.tech/";
  @property({ type: String, attribute: "data-field" }) dataField;
  @property({
    type: Object,
    hasChanged(newVal, oldVal) {
      if (newVal != oldVal) {
        return true;
      } else {
        return false;
      }
    }
  })
  data: any;

  getInspector() {
    return {
      title: "QRcode",
      sidebar: {
        action: {
          eventTypes: []
        },
        style: {
          text: {
            font: false,
            textStyle: false,
            paragraph: false,
            alignment: false,
            color: false
          },
          boxSize: true,
          background: {
            image: false,
            color: false
          },
          border: {
            size: true,
            radius: true
          },
          appearance: {
            opacity: true,
            padding: true,
            margin: true
          },
          boxShadow: true
        },
        specific: {
          title: "QRCode",
          sections: [
            {
              title: "Data",
              forms: [
                {
                  type: "dependency",
                  label: "Content",
                  attribute: "type-content",
                  element: "select",
                  defaultValue: "link",
                  values: {
                    "link": {
                      label: "Link",
                      forms: [
                        {
                          type: "string",
                          attribute: "link",
                          placeholder: "https://oneweb.tech/"
                        }
                      ]
                    },
                    "data": {
                      label: "Data",
                      forms: [
                        {
                          type: "store",
                          attribute: "data-field"
                        }
                      ]
                    }
                  }
                },
                {
                  type: "option",
                  label: "Error Correction Level",
                  attribute: "correction-level",
                  layout: "V",
                  defaultValue: "L",
                  options: [
                    {
                      label: "Low",
                      value: "L"
                    },
                    {
                      label: "Medium",
                      value: "M"
                    },
                    {
                      label: "Quartile",
                      value: "Q"
                    },
                    {
                      label: "High",
                      value: "H"
                    }
                  ]
                },
                {
                  type: "color",
                  label: "Foreground Color",
                  attribute: "foreground-color",
                  layout: "V",
                  defaultValue: "#000000ff"
                },
                {
                  type: "color",
                  label: "Background Color",
                  attribute: "background-color",
                  layout: "V",
                  defaultValue: "#ffffff"
                }
              ]
            }
          ]
        }
      },
      toolbar: {
        move: true,
        clone: true,
        selectParent: true,
        connectToData: true,
        remove: true
      }
    }
  }

  render() {
    return html`
            <style>
                :host {
                    display: inline-block !important;
                    min-width: 150px;
                    min-height: 150px;
                    width: ${this.width}px;
                    height: ${this.width}px;
                }
                #canvas {
                    min-width: 150px;
                    min-height: 150px;
                    pointer-events: none;
                }
            </style>
            <canvas id="canvas"></canvas>
        `;
  }

  firstUpdated() {
    this.generateQRCode();
  }

  updated() {
    this.generateQRCode();
  }

  generateQRCode() {
    var canvasEle = this.renderRoot.querySelector("canvas");
    var qrCodeData = {
      canvas: canvasEle,
      content: "https://oneweb.tech/",
      width: this.width,
      nodeQrCodeOptions: {
        errorCorrectionLevel: this.errCorrectionLevel,
        color: {
          dark: this.colorDark,
          light: this.colorLight
        }
      }
    };
    if (this.typeContent === "data" && this.data && this.data.length > 0) {
      qrCodeData.content = this.data[0][this.dataField];
    } else {
      qrCodeData.content = this.link;
    }

    QrCodeWithLogo.toCanvas(qrCodeData);
  }
}

customElements.define("qr-code-element", QRCodeElement);