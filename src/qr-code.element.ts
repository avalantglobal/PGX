import { LitElement, html, property } from "lit-element";
import QrCodeWithLogo from "qr-code-with-logo";

class QRCodeElement extends LitElement {
  @property({ type: String }) content: "";
  @property({ type: String }) width = 250;
  @property({ type: String }) logo = "";
  @property({ type: String }) errCorrectionLevel = "Q";
  @property({ type: String }) colorDark = "#000000ff";
  @property({ type: String }) colorLight = "#ffffff";

  getInspector() {
    return {
      title: "Demo Component",
      sidebar: {
        action: {
          eventTypes: []
        },
        style: {
          text: {
            font: true,
            textStyle: true,
            paragraph: false,
            alignment: true,
            color: true
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
          title: "Demo Component",
          sections: [
            {
              title: "Heading",
              forms: [
                {
                  type: "string",
                  label: "Text Component",
                  attribute: "text",
                  layout: "V"
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