import { html, property, LitElement } from "lit-element";
// Extend the LitElement base class
class PGDDemoElement extends LitElement {

  @property({ type: String })
  text;
  /**
   * Implement `render` to define a template for your element.
   *
   * You must provide an implementation of `render` for any element
   * that uses LitElement as a base class.
   */

   getInspector(){
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
    /**
     * `render` must return a lit-html `TemplateResult`.
     *
     * To create a `TemplateResult`, tag a JavaScript template literal
     * with the `html` helper function:
     */
    return html`
        <style>
            :host {
                display: inline-block !important;
                font-size: 20px;
            }
            .wrapper {
                width: 250px;
                border: 1px solid #000;
            }
        </style>
        <div class='wrapper'>
            <p>${this.text}</p>
        </div>
    `;
  }
  firstUpdated() {}
}
// Register the new element with the browser.
customElements.define("demo-element", PGDDemoElement);
