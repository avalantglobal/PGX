import { LitElement, html, property } from "lit-element";
import QrCodeWithLogo from "qr-code-with-logo";

class QRCodeElement extends LitElement {
  @property({ type: String }) content: "";
  @property({ type: String }) width = 250;
  @property({ type: String }) logo = "";
  @property({ type: String, attribute: "correction-level" }) errCorrectionLevel = "Q";
  @property({ type: String, attribute: "foreground-color" }) colorDark = "#000000ff";
  @property({ type: String, attribute: "background-color" }) colorLight = "#ffffff";
  @property({ type: String, attribute: "url" }) url = "https://oneweb.tech/";
  @property({ type: String, attribute: "pg-data" }) pgData;
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
                  type: "string",
                  label: "Content",
                  attribute: "content",
                  layout: "V",
                  placeholder: "https://oneweb.tech/"
                },
                {
                  type: "option",
                  label: "Error Correction Level",
                  attribute: "correction-level",
                  layout: "V",
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
                  layout: "V"
                },
                {
                  type: "color",
                  label: "Background Color",
                  attribute: "background-color",
                  layout: "V"
                },
                {
                  type: "store",
                  label: "URL",
                  attribute: "url"
                }
              ]
            }
          ]
        }
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
    if(this.data.length > 0){
      this.content = this.data[0][this.url];
    }
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
    if (this.logo) {
      qrCodeData["logo"] = {
        src: this.logo,
        borderSize: 0
      };
    }
    if (this.content) {
      qrCodeData.content = this.content;
    }

    QrCodeWithLogo.toCanvas(qrCodeData);
  }
}

customElements.define("qr-code-element", QRCodeElement);