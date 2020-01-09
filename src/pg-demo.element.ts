import { LitElement, html, property } from "lit-element";

export class PGDDemoElement extends LitElement {
  @property({ type: String }) pgxId = "component.plugin.demo";
  @property({ type: String }) text;

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName == "pgxId" && this.pgxId != oldValue) {
        this.pgxId = "component.plugin.demo";
      }
    });
  } 

  attributeChangedCallback(name, oldval, newval) {
    super.attributeChangedCallback(name, oldval, newval);
  }

  validateProperty(prop){
    let response = {
      status: true,
      message: ""
    };
    if(!prop){
      response.status = false;
      response.message = "Error message";
    }
    return response;
  }

  onPropertyChange(property){
    console.log("property-change:", property);
  }

  getInspector(){
    return {
      title: "PGD Demo",
      sidebar: {
        action: {
          eventTypes: ["clientX", "clientY"]      //examples
        },
        style: {
          link: true,
          text: {
            font: true,
            textStyle: true,
            paragraph: true,
            alignment: true,
            color: true
          },
          boxSize: true,
          background: {
            image: true,
            color: true
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
          title: "PGD Demo",
          sections: [
            {
              title: "Data",
              forms: [
                {
                  type: "string",
                  label: "Name",
                  title: "PGDDemo Name",                  //Optional
                  attribute: "name",
                  validate: this.validateProperty,        //Optional
                  onChanged: this.onPropertyChange,       //Optional
                  placeholder: "Name"
                },
                {
                  type: "number",
                  label: "Size",
                  title: "PGDDemo Size",                  //Optional
                  attribute: "size",
                  validate: this.validateProperty,        //Optional
                  onChanged: this.onPropertyChange,       //Optional
                  min: -9999,
                  max: 9999
                },
                {
                  type: "option",
                  label: "Font",
                  title: "PGDDemo Font",                  //Optional
                  attribute: "font",
                  placeholder: "Font Family",
                  options: [
                    {
                      label: "Arial",
                      value: "1"
                    },
                    {
                      label: "Courier",
                      value: "2"
                    },
                    {
                      label: "Gadget",
                      value: "3"
                    },
                    {
                      label: "Georgia",
                      value: "4"
                    },
                    {
                      label: "Impact",
                      value: "5"
                    }
                  ],
                  onChanged: this.onPropertyChange        //Optional
                },
                {
                  type: "boolean",
                  label: "Enable",
                  title: "PGDDemo Enable",                //Optional
                  attribute: "enable",
                  onChanged: this.onPropertyChange        //Optional
                },
                {
                  type: "color",
                  label: "Color",
                  title: "PGDDemo Color",                 //Optional
                  attribute: "color",
                  onChanged: this.onPropertyChange        //Optional
                }
              ]
            },
            {
              title: "Advance",
              forms: [
                {
                  type: "dependency",
                  label: "Support?",
                  attribute: "support",
                  values: {
                    "true": {
                      forms: [
                        {
                          type: "string",
                          label: "Feild A",
                          attribute: "feild-a"
                        },
                        {
                          type: "number",
                          label: "Feild B",
                          attribute: "feildb"
                        }
                      ]
                    },
                    "false": {
                      forms: [
                        {
                          type: "color",
                          label: "Feild C",
                          attribute: "feild-c"
                        }
                      ]
                    }
                  }
                },
                {
                  type: "dependency",
                  attribute: "select-feild",
                  label: "select-feild",
                  element: "select",
                  values: {
                    "one": {
                      label: "One",
                      forms: [
                        {
                          type: "string",
                          attribute: "string-one",
                          label: "String One"
                        },
                        {
                          type: "number",
                          attribute: "number-one",
                          label: "Number One"
                        }
                      ]
                    },
                    "two": {
                      label: "Two",
                      forms: [
                        {
                          type: "string",
                          attribute: "string-two",
                          label: "String Two"
                        },
                        {
                          type: "number",
                          attribute: "number-two",
                          label: "Number Two"
                        }
                      ]
                    },
                    "three": {
                      label: "Three",
                      forms: [
                        {
                          type: "string",
                          label: "String Three",
                          attribute: "string-three"
                        },
                        {
                          type: "number",
                          label: "Number Three",
                          attribute: "number-three"
                        }
                      ]
                    }
                  }
                },
                {
                  type: "dependency",
                  attribute: "case",
                  label: "Case",
                  element: "radio-button",
                  values: {
                   "caseA" : {
                     label: "Case A",
                     forms: [
                       {
                         type: "string",
                         attribute: "string-a",
                         label: "Str Case A"
                       },
                       {
                         type: "number",
                         attribute: "number-a",
                         label: "Num Case A"
                       }
                     ]
                   },
                   "caseB" : {
                      label: "Case B",
                      forms: [
                        {
                          type: "string",
                          attribute: "string-b",
                          label: "Str Case B"
                        },
                        {
                          type: "number",
                          attribute: "number-b",
                          label: "Num Case B"
                        }
                      ]
                    },
                    "caseC": {
                      label: "Case C",
                      forms: [
                        {
                          type: "string",
                          attribute: "string-c",
                          label: "Str Case C"
                        },
                        {
                          type: "number",
                          attribute: "number-c",
                          label: "Num Case C"
                        }
                      ]
                    }
                  }
                },
                {
                  type: "array",
                  attribute: "para-list",
                  label: "Paragraph List",
                  fields: [
                    {
                      type: "string",
                      attribute: "nameList",
                      label: "Name List"
                    },
                    {
                      type: "number",
                      attribute: "countList",
                      label: "Count List"
                    },
                    {
                      type: "option",
                      label: "Select List",
                      attribute: "selectList",
                      options: [
                        {
                          label: "Item 1",
                          value: "1"
                        },
                        {
                          label: "Item 2",
                          value: "2"
                        },
                        {
                          label: "Item 3",
                          value: "3"
                        },
                        {
                          label: "Item 4",
                          value: "4"
                        },
                        {
                          label: "Item 5",
                          value: "5"
                        }
                      ]
                    },
                    {
                      type: "boolean",
                      label: "Enable",
                      attribute: "enableList"
                    },
                    {
                      type: "color",
                      label: "Color List",
                      attribute: "colorList"
                    },
                    {
                      type: "dependency",
                      label: "Support List",
                      attribute: "support-list",
                      element: "radio-button",
                      values: {
                        "true": {
                          forms: [
                            {
                              type: "string",
                              label: "Feild A List",
                              attribute: "feildAList"
                            },
                            {
                              type: "number",
                              label: "Feild B List",
                              attribute: "feildBList"
                            }
                          ]
                        },
                        "false": {
                          forms: [
                            {
                              type: "color",
                              label: "Feild C List",
                              attribute: "feildCList"
                            }
                          ]
                        }
                      }
                    },
                    {
                      type: "store",
                      attribute: "field-store",
                      label: "Store Data",
                      placeholder: "Data form parent"
                    }
                  ]
                }
              ]
            }
          ]
        }
      },
      toolbar: {
        move: true, // default true
        clone: true,
        selectParent: true,
        connectToData: true,
        remove: true
      }
    }
  }

  render(){
    return html`
      <style>
        :host{
          display: inline-block !important;
          width: 160px;
          height: 80px;
          color: black;
          background-color: #ADD8E6;
        }
      </style>
      <div>
        ${this.text}
      </div>
    `;
  }

}

customElements.define("pg-ele-demo", PGDDemoElement);