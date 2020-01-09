import { html, property, LitElement } from "lit-element";
import $ from 'jquery';

class TableEditor extends LitElement {
  // getInspector: () => ExtInspector;

  rawData: any = [];

  private setDataTable = {
    headers: [],
    values: []
  };
  private perPage;
  private currentPage = 1;

  private resultDataSelected = [];
  private resultDataView = {};
  private resultDataLink = {};
  private resultDataDelete = {};
  private renderData = [];
  private renderHeader = [];

  private defaultConfig = {
    headerbgcolor: "#343a40",
    headertextcolor: "#ffffff",
    valuetextcolor: "#000000",
    valuebgcolor: "#ffffff",
    valuelinkcolor: "#ffc107",
    valuebtnviewcolor: "#17a2b8",
    valuebtnviewtextcolor: "#ffffff",
    valuebtndeletecolor: "#dc3545",
    valuebtndeletetextcolor: "#ffffff",
    valuerowsummarycolor: "#9B9B9B",
    valuerowsummarytextcolor: "#ffffff",
    valuetextsummary: 'Total',

    valuecolumnbackgroundcolor: "#ffffff",
    valuecolumntextcolor: "#000000",
    valueheaderbackgroundcolor: "#343a40",
    valueheadertextcolor: "#ffffff",
    

    confighassequence: true,
    confighaspaging: true,
    confighasperpage: 10,
    confighascheckbox: true,
    confighasview: true,
    confighasdelete: true,
    islink: false,
    linkname: 'Link',
    isheadermergerow: false,
    isheadermergecol: false,
    isfieldmergerow: false,
    isfieldmergecol: false,
    istextinline: false,
    iscollapsenewrow:true,

    padding: '0px',
    arrowup: 'data:image/png;base64,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',
    arrowdown: 'data:image/png;base64,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'
  }
  private actionEvent = {
    checkbox: "checkbox",
    view: "view",
    delete: 'delete',
    link: 'link',
    editext: 'editext',
    onload: 'onload'
  }
  @property({ type: String }) headerbgcolor = this.defaultConfig.headerbgcolor;
  @property({ type: String }) headertextcolor = this.defaultConfig.headertextcolor;
  @property({ type: String }) valuetextcolor = this.defaultConfig.valuetextcolor;
  @property({ type: String }) valuebgcolor = this.defaultConfig.valuebgcolor;
  @property({ type: String }) valuelinkcolor = this.defaultConfig.valuelinkcolor;
  @property({ type: String }) valuebtnviewcolor = this.defaultConfig.valuebtnviewcolor;
  @property({ type: String }) valuebtnviewtextcolor = this.defaultConfig.valuebtnviewtextcolor;
  @property({ type: String }) valuebtndeletecolor = this.defaultConfig.valuebtndeletecolor;
  @property({ type: String }) valuebtndeletetextcolor = this.defaultConfig.valuebtndeletetextcolor;

  @property({ type: String }) valuerowsummarycolor = this.defaultConfig.valuerowsummarycolor;
  @property({ type: String }) valuerowsummarytextcolor = this.defaultConfig.valuerowsummarytextcolor;
  @property({ type: String }) valuetextsummary = this.defaultConfig.valuetextsummary;



  @property({ type: Array }) configdatatable = [];
  @property({ type: Array }) configcustomtable = [];


  @property({ type: Array }) configsubheadertable = [];

  @property({ type: Number }) configlevelsubheader;
  @property({ type: Array }) configsubheader0;
  @property({ type: Array }) configsubheader1;
  @property({ type: Array }) configsubheader2;
  @property({ type: Array }) configsubheader3;




  @property({ type: Boolean }) confighaspaging;
  @property({ type: Number }) confighasperpage = this.defaultConfig.confighasperpage;
  @property({ type: Boolean }) confighascheckbox;
  @property({ type: Boolean }) confighasview;
  @property({ type: Boolean }) confighasdelete;
  @property({ type: Boolean }) confighassequence;

  @property({ type: Boolean }) confighasmergeallrow;
  @property({ type: Boolean }) confighasmergeallcol;
  @property({ type: Boolean }) confighasmergeheader;

  @property({ type: Boolean }) confighasusegroupby;
  @property({ type: String }) confighasgroupby;

  @property({ type: Boolean }) confighasumaryvalue;
  @property({ type: Boolean }) confighasusesubheader;

  @property({ type: String }) confighassectionby = "example1";



  @property({ type: String }) cusclasstable;
  @property({ type: String }) cusclassheader;
  @property({ type: String }) cusclassvalue;

  @property({ type: String }) cusclassthisheader;
  @property({ type: String }) cusclassthisvalue;


  @property({ type: Array }) configsectiondata;






  // @property({ type: Boolean }) confighasmerge;

  // @property({ type: String }) headerbgcolor = this.defaultConfig.headerbgcolor;
  // @property({ type: String }) headertextcolor = this.defaultConfig.headertextcolor;
  // @property({ type: String }) valuetextcolor = this.defaultConfig.valuetextcolor;
  // @property({ type: String }) valuebgcolor = this.defaultConfig.valuebgcolor;
  // @property({ type: String }) valuelinkcolor = this.defaultConfig.valuelinkcolor;
  // @property({ type: String }) valuebtnviewcolor = this.defaultConfig.valuebtnviewcolor;
  // @property({ type: String }) valuebtnviewtextcolor = this.defaultConfig.valuebtnviewtextcolor;
  // @property({ type: String }) valuebtndeletecolor = this.defaultConfig.valuebtndeletecolor;
  // @property({ type: String }) valuebtndeletetextcolor = this.defaultConfig.valuebtndeletetextcolor;

  // @property({ type: Array }) configdatatable = [];
  // @property({ type: Boolean }) confighaspaging = this.defaultConfig.confighaspaging;
  // @property({ type: Number }) confighasperpage = this.defaultConfig.confighasperpage;
  // @property({ type: Boolean }) confighascheckbox = this.defaultConfig.confighascheckbox;
  // @property({ type: Boolean }) confighasview = this.defaultConfig.confighasview;
  // @property({ type: Boolean }) confighasdelete = this.defaultConfig.confighasdelete;
  // @property({ type: Boolean }) confighassequence = this.defaultConfig.confighassequence;

  @property({ type: String, attribute: 'pg-data' }) pgData;
  @property({ type: String }) pgxId = "com.oneweb.tableeditor";


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
  // <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
  // <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>


  protected createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <style>
        :host {
          display: inline-block !important;
        }
        table-editor{
          display: block;
        }
        table-editor *{
         ${window["__ENV__"] === "PGD" ? html`pointer-events: none;` : html`pointer-events: auto;`}
        }
        .table td, .table th{
          vertical-align: middle !important;
        }
        .table th{
          border-right: 1px solid #dee2e6;
        }
        .table td{
          vertical-align: middle !important;
          border: 1px solid #dee2e6;
          // border-left: 1px solid #dee2e6;
          // border-rigth: 1px solid #dee2e6;
        }
        td.td-summary{
          border:0;
          border-bottom: 1px solid #dee2e6;
        }
        td img, .td-img{
          width:30px;
          height:30px;
          margin-right:10px;
        }    
        th,td{
          outline:0
        }
        select:active, select:hover,select:focus {
          outline: 0;
        
        }
  
      .paging-select{
        border-radius: 0;
        border: 0;
        border-bottom: solid 1px #dee2e6;
        border-top: solid 1px #dee2e6;
        display: block;
        width: 100%;
        height: calc(2.25rem + 2px);
        padding: .375rem .75rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
      }
      .td-section > .section-text{
        float:left;
        padding-left:20px;
      }
      .td-section > .section-icon{
        float:right;
        padding-right:10px;
        width:35px;
        height:20px;
        cursor:pointer;
      }
      // .custom-control-input:checked~.custom-control-label::before {
      //   background-color: transparent !important;
      //   border-color:transparent!important;
      // }
      </style>
     <div style="display:block">

      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <table  class="te-table table text-center">
      <thead>
      </thead>
      <tbody>
      </tbody>
    </table>
    <div class="w-100" style="height:50px">
    <span class="paging-text float-left ml-1">  </span>
    <ul class="pagination float-right">
    <li data-paging="paging-first" @click=${this.handlePaging} class="page-item"><a class="page-link">First</a> </li>
    <li data-paging="paging-left"  @click=${this.handlePaging} class="page-item"><a class="page-link" >&#60;</a></li>

    <li class="page-item"> 
    <select data-paging="paging-input" @change=${this.handlePaging}   class="text-center paging-select">
    </select>
    </li>
    <li data-paging="paging-right" @click=${this.handlePaging} class="page-item"><a class="page-link">&#62;</a> </li>
    <li data-paging="paging-last" @click=${this.handlePaging} class="page-item"><a class="page-link">Last</a> </li>
  </ul>
    </div>
    </div>
    `;
  }
  getInspector() {
    return {
      title: "PGD Demo",
      sidebar: {
        action: {
          eventTypes: ["clientX", "clientY"]      //examples
        },
        // style: {
        //   link: false,
        //   text: {
        //     font: true,
        //     textStyle: true,
        //     paragraph: false,
        //     alignment: true,
        //     color: true
        //   },
        //   boxSize: true,
        //   background: {
        //     image: false,
        //     color: false
        //   },
        //   border: {
        //     size: true,
        //     radius: true
        //   },
        //   appearance: {
        //     opacity: true,
        //     padding: true,
        //     margin: true
        //   },
        //   boxShadow: true
        // },
        specific: {
          title: "Extension",
          sections: [
            {
              title: "STYLES",
              forms: [
                {
                  type: "color",
                  label: "Header Background Color",
                  attribute: "headerbgcolor",
                  defaultValue: this.defaultConfig.headerbgcolor
                },
                {
                  type: "color",
                  label: "Header Text Color",
                  attribute: "headertextcolor",
                  defaultValue: this.defaultConfig.headertextcolor
                },
                {
                  type: "color",
                  label: "Body Background Color",
                  attribute: "valuebgcolor",
                  defaultValue: this.defaultConfig.valuebgcolor
                },
                {
                  type: "color",
                  label: "Body Text Color",
                  attribute: "valuetextcolor",
                  defaultValue: this.defaultConfig.valuetextcolor
                },
                {
                  type: "color",
                  label: "Link Color",
                  attribute: "valuelinkcolor",
                  defaultValue: this.defaultConfig.valuelinkcolor
                },
                {
                  type: "color",
                  label: "Button View Background Color",
                  attribute: "valuebtnviewcolor",
                  defaultValue: this.defaultConfig.valuebtnviewcolor
                },
                {
                  type: "color",
                  label: "Button View Text Color",
                  attribute: "valuebtnviewtextcolor",
                  defaultValue: this.defaultConfig.valuebtnviewtextcolor
                }
              ]
            },
            {
              title: "OPTION",
              forms: [
                {
                  type: "boolean",
                  label: "Show Sequence",
                  attribute: "confighassequence",
                  // defaultValue: this.defaultConfig.confighassequence
                },
                {
                  type: "boolean",
                  label: "Show View Button",
                  attribute: "confighasview",
                  // defaultValue: this.defaultConfig.confighasview
                },
                {
                  type: "boolean",
                  label: "Show Delete Button",
                  attribute: "confighasdelete",
                  // defaultValue: this.defaultConfig.confighasdelete
                },
                {
                  type: "boolean",
                  label: "Show Checkbox",
                  attribute: "confighascheckbox",
                  // defaultValue: this.defaultConfig.confighascheckbox
                },
                {
                  type: "boolean",
                  label: "Merge All Row",
                  attribute: "confighasmergeallrow",
                  // defaultValue: this.defaultConfig.confighascheckbox
                },
                {
                  type: "boolean",
                  label: "Merge All Column",
                  attribute: "confighasmergeallcol",
                  // defaultValue: this.defaultConfig.confighascheckbox
                },
                {
                  type: "boolean",
                  label: "Merge Header",
                  attribute: "confighasmergeheader",
                  // defaultValue: this.defaultConfig.confighascheckbox
                },
                {
                  type: "dependency",
                  label: "Show Paging",
                  attribute: "confighaspaging",
                  // defaultValue: this.defaultConfig.confighaspaging,
                  values: {
                    "true": {
                      forms: [
                        {
                          type: "string",
                          label: "Perpage",
                          attribute: "confighasperpage",
                          defaultValue: this.defaultConfig.confighasperpage
                        }
                      ]
                    },
                    "false": {}
                  }
                },
                {
                  type: "dependency",
                  label: "Use Group By",
                  attribute: "confighasusegroupby",
                  // defaultValue: this.defaultConfig.confighaspaging,
                  values: {
                    "true": {
                      forms: [
                        {
                          type: "store",
                          attribute: "confighasgroupby",
                          label: "Group By",
                          placeholder: "Group By"
                        },
                        {
                          type: "dependency",
                          label: "Calculate Summary fields",
                          attribute: "confighasumaryvalue",
                          placeholder: "Calculate Summary fields",
                          // defaultValue: this.defaultConfig.confighaspaging,
                          values: {
                            "true": {
                              forms: [
                                {
                                  type: "string",
                                  label: "Text Summary",
                                  attribute: "valuetextsummary",
                                  defaultValue: this.defaultConfig.valuetextsummary
                                },
                                {
                                  type: "color",
                                  label: "Background Color",
                                  attribute: "valuerowsummarycolor",
                                  defaultValue: this.defaultConfig.valuerowsummarycolor
                                },
                                {
                                  type: "color",
                                  label: "Text Color",
                                  attribute: "valuerowsummarytextcolor",
                                  defaultValue: this.defaultConfig.valuerowsummarytextcolor
                                },
                              ]
                            },
                            "false": {}
                          }
                        },
                        // {
                        //   type: "boolean",
                        //   attribute: "confighasumaryvalue",
                        //   label: "Calculate Summary fields",
                        //   placeholder: "Calculate Summary fields"
                        // }
                      ]
                    },
                    "false": {}
                  }
                },
                {
                  type: "dependency",
                  label: "Enable Sub Header",
                  attribute: "confighasusesubheader",
                  values: {
                    "true": {
                      forms: [
                        {
                          type: "dependency",
                          label: "Level Of Sub Header",
                          attribute: "configlevelsubheader",
                          placeholder: "Level Of Sub Header",
                          // defaultValue: this.defaultConfig.confighaspaging,
                          values: {
                            "1": {
                              forms: [
                                {
                                  type: "array",
                                  attribute: "configsubheader0",
                                  label: "Add Sub Header",
                                  fields: [
                                    {
                                      type: "string",
                                      attribute: "header",
                                      label: "Header"
                                    }
                                  ]
                                }
                              ]
                            },
                            "2": {
                              forms: [
                                {
                                  type: "array",
                                  attribute: "configsubheader1",
                                  label: "Add Header",
                                  fields: [
                                    {
                                      type: "string",
                                      attribute: "header",
                                      label: "Header"
                                    }
                                  ]
                                }
                              ]
                            },
                            "3": {
                              forms: [
                                {
                                  type: "array",
                                  attribute: "configsubheader2",
                                  label: "Add Header",
                                  fields: [
                                    {
                                      type: "string",
                                      attribute: "header",
                                      label: "Header"
                                    }
                                  ]
                                }
                              ]
                            },
                            "4": {
                              forms: [
                                {
                                  type: "array",
                                  attribute: "configsubheader3",
                                  label: "Add Header",
                                  fields: [
                                    {
                                      type: "string",
                                      attribute: "header",
                                      label: "Header"
                                    }
                                  ]
                                }
                              ]
                            }
                          }
                        },

                      ]
                    },
                    "false": {}
                  }
                }
              ]
            },
            {
              title: "DATA",
              forms: [
                {
                  type: "array",
                  attribute: "configdatatable",
                  label: "Add Header",
                  fields: [
                    {
                      type: "string",
                      attribute: "header",
                      label: "Header"
                    },
                    {
                      type: "store",
                      attribute: "value",
                      label: "Field",
                      placeholder: "Field form Microflow"
                    },
                    {
                      type: "boolean",
                      attribute: "isfieldmergecol",
                      label: "Merge this Column",
                      placeholder: "Merge Field Column",
                      defaultValue: this.defaultConfig.isfieldmergecol,
                    },
                    {
                      type: "boolean",
                      attribute: "istextinline",
                      label: "Enable Text Inline",
                      placeholder: "Use Text Inline Mode",
                      defaultValue: this.defaultConfig.istextinline,
                    },
                    {
                      type: "icon",
                      attribute: "isimg",
                      label: "Insert Image",
                      placeholder: "Insert Image",
                    },
                    // {
                    //   type: "color",
                    //   label: "Column Background Color",
                    //   attribute: "valuecolumnbackgroundcolor",
                    //   placeholder: "Column Background Color",
                    //  // defaultValue: this.defaultConfig.valuecolumnbackgroundcolor,
                    // },
                    // {
                    //   type: "color",
                    //   label: "Column Text Color",
                    //   attribute: "valuecolumntextcolor",
                    //   placeholder: "Column Text Color",
                    //  // defaultValue: this.defaultConfig.valuecolumntextcolor,
                    // },

                    // {
                    //   type: "color",
                    //   label: "Header Background Color",
                    //   attribute: "valueheaderbackgroundcolor",
                    //   placeholder: "Header Background Color",
                    //  // defaultValue: this.defaultConfig.valueheaderbackgroundcolor,
                    // },

                    // {
                    //   type: "color",
                    //   label: "Header Text Color",
                    //   attribute: "valueheadertextcolor",
                    //   placeholder: "Header Text Color",
                    //  // defaultValue: this.defaultConfig.valueheadertextcolor,
                    // },



                    // {
                    //   type: "string",
                    //   label: "Custom Class Table",
                    //   attribute: "cusclassthistable",
                    //   placeholder: "Custom Class Table",
                    // },

                    {
                      type: "string",
                      label: "Custom Class Header",
                      attribute: "cusclassthisheader",
                      placeholder: "Custom Class Header",
                    },

                    {
                      type: "string",
                      label: "Custom Class Value",
                      attribute: "cusclassthisvalue",
                      placeholder: "Custom Class Value",
                    },




                    // {
                    //   type: "dependency",
                    //   label: "Data is Link",
                    //   attribute: "islink",
                    //   defaultValue: this.defaultConfig.islink,
                    //   values: {
                    //     "true": {
                    //       forms: [
                    //         {
                    //           type: "string",
                    //           label: "Column Name",
                    //           attribute: "linkname",
                    //           defaultValue: this.defaultConfig.linkname
                    //         }
                    //       ]
                    //     },
                    //     "false": {}
                    //   }
                    // }

                  ]
                }
              ]
            },
            {
              title: "GROUP DATA",
              forms: [
                {
                  type: "array",
                  attribute: "configsectiondata",
                  label: "Add Section",
                  fields: [

                    {
                      type: "store",
                      attribute: "sectionby",
                      label: "Section By Field",
                    },
                    {
                      type: "string",
                      attribute: "sectionname",
                      label: "Name"
                    },
                    {
                      type: "icon",
                      attribute: "sectionicon",
                      label: "Icon"
                    },
                    {
                      type: "dependency",
                      label: "Enable Collapse",
                      attribute: "sectioncollapse",
                      values: {
                        "true": {
                          forms: [
                            {
                              type: "boolean",
                              label: "Collapse on New Row",
                              attribute: "iscollapsenewrow",
                              defaultValue: this.defaultConfig.iscollapsenewrow
                            },
                          ]
                        }
                      }
                    },
                    {
                      type: "boolean",
                      attribute: "sectionhideattr",
                      label: "Hidden Field Section By"
                    },
                    {
                      type: "string",
                      attribute: "sectionclass",
                      label: "Class Name"
                    },
                  ]

                }

              ]

            },
            {
              title: "CUSTOMS",
              forms: [
                {
                  type: "array",
                  attribute: "configcustomtable",
                  label: "Add Custom",
                  fields: [
                    {
                      type: "string",
                      attribute: "cusattributekey",
                      label: "Attribute Key",
                      placeholder: "Attribute Key",
                    },
                    {
                      type: "string",
                      attribute: "cusattributevalue",
                      label: "Attribute value",
                      placeholder: "Attribute Value",
                    },
                    {
                      type: "string",
                      attribute: "cususeinlinetext",
                      label: "Enable Inline Text",
                      placeholder: "Enable Inline Text",
                    },
                    {
                      type: "boolean",
                      label: "Merge This Row",
                      attribute: "cusmergecellrow",
                    },
                    {
                      type: "option",
                      label: "Affected",
                      attribute: "cusaffected",
                      options: [
                        {
                          label: 'To This Field',
                          value: "one"
                        },
                        {
                          label: "To This Row",
                          value: "all"
                        },
                      ]
                    },
                    {
                      type: "color",
                      label: "Background Color",
                      attribute: "cusbackgroundcolor",
                    },
                    {
                      type: "color",
                      label: "Text Color",
                      attribute: "custextcolor",
                    },
                    {
                      type: "option",
                      label: "Text Align",
                      attribute: "custextalign",
                      options: [
                        {
                          label: 'Left',
                          value: "left"
                        },
                        {
                          label: "Center",
                          value: "center"
                        },
                        {
                          label: "Right",
                          value: "right"
                        }
                      ]
                    },
                    {
                      type: "string",
                      label: "Padding Top",
                      attribute: "cuspaddingtop",
                      defaultValue: this.defaultConfig.padding
                    },
                    {
                      type: "string",
                      label: "Padding Left",
                      attribute: "cuspaddingleft",
                      defaultValue: this.defaultConfig.padding
                    },
                    {
                      type: "string",
                      label: "Padding Right",
                      attribute: "cuspaddingright",
                      defaultValue: this.defaultConfig.padding
                    },
                    {
                      type: "string",
                      label: "Padding Bottom",
                      attribute: "cuspaddingbot",
                      defaultValue: this.defaultConfig.padding
                    },
                  ]
                },
                {
                  type: "string",
                  label: "Custom Class Table",
                  attribute: "cusclasstable",
                },
                {
                  type: "string",
                  label: "Custom Class Header",
                  attribute: "cusclassheader",
                },
                {
                  type: "string",
                  label: "Custom Class value",
                  attribute: "cusclassvalue",
                },


              ]
            }

            // {
            //   title: "Data",
            //   forms: [
            //     {
            //       type: "string",
            //       label: "Name",
            //       title: "PGDDemo Name",                  //Optional
            //       attribute: "name"
            //     },
            //     {
            //       type: "number",
            //       label: "Size",
            //       title: "PGDDemo Size",                  //Optional
            //       attribute: "size",
            //       min: -9999,
            //       max: 9999
            //     },
            //     {
            //       type: "option",
            //       label: "Font",
            //       title: "PGDDemo Font",                  //Optional
            //       attribute: "font",
            //       options: [
            //         {
            //           label: "Arial",
            //           value: "1"
            //         },
            //         {
            //           label: "Courier",
            //           value: "2"
            //         },
            //         {
            //           label: "Gadget",
            //           value: "3"
            //         },
            //         {
            //           label: "Georgia",
            //           value: "4"
            //         },
            //         {
            //           label: "Impact",
            //           value: "5"
            //         }
            //       ],
            //     },
            //     {
            //       type: "boolean",
            //       label: "Enable",
            //       title: "PGDDemo Enable",                //Optional
            //       attribute: "enable"
            //     },
            //     {
            //       type: "color",
            //       label: "Color",
            //       title: "PGDDemo Color",                 //Optional
            //       attribute: "color"
            //     }
            //   ]
            // }
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
  firstUpdated(changedProperties) {
    this.initialSetup();

  }
  initialSetup() {
    console.log("this.data:", this.data);
    //     let a = {
    //       example1: "field1",
    //       example2: "field2",
    //       example3: "field3",
    //       example4: "https://www.w3schools.com/bootstrap4/bootstrap_buttons.asp",
    //     }
    //       this.rawData = [
    //  a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,
    //  a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,
    //  a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,
    //  a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,
    //       ]


    // this.rawData = [



    // ]



    if (window["__ENV__"] !== "PGD" && this.data) {
      this.rawData = this.data || [];

      // this.rawData = [
      //   {
      //     example1: "field1",
      //     example2: "field2",
      //     example3: "field3",
      //     example4: "https://www.w3schools.com/bootstrap4/bootstrap_buttons.asp",
      //   }
      // ]
    }
    let toTalPage = Math.ceil(this.rawData.length / this.defaultConfig.confighasperpage)
    $(this).find('.pagination').find('select').html(null);
    $(this).find('.pagination').find('select').append(`<option value="${1}">${1}</option>`);
    for (let i = 1; i < toTalPage; i++) {
      $(this).find('.pagination').find('select').append(`<option value="${i + 1}">${i + 1}</option>`);
    }

    this.rawData = [
      {
        example1: "a",
        example2: "7,500",
        example3: "4",
        example4: "2",
      },
      {
        example1: "a",
        example2: "yyy",
        example3: "4",
        example4: "4saa",
      },
      {
        example1: "a",
        example2: "xxx",
        example3: "5",
        example4: "ccsa",
      },
      {
        example1: "a",
        example2: "3,511.11",
        example3: "5",
        example4: "4xx",
      },
      {
        example1: "a",
        example2: "cda",
        example3: "5",
        example4: "14f",
      },
      {
        example1: "field132",
        example2: "field6",
        example3: "5",
        example4: "<img src='https://www.svgrepo.com/show/92827/avatar.svg'/><span>testimg</span>",
      },
      {
        example1: "field1",
        example2: "field6",
        example3: "8",
        example4: "field9",
      },
      {
        example1: "field1",
        example2: "field6",
        example3: "8",
        example4: "field8x",
      }
      ,
      {
        example1: "field1",
        example2: "field5",
        example3: "8",
        example4: "field7",
      }
    ]


    // }
    this.createData().then((result) => {
      console.log('Data Table ☛ ', result)
      this.setDataTable = result;
      this.tableConfig()

    });
  }
  attributeChangedCallback(name, oldval, newval) {
    console.log('attCallback: ', name, newval);
    this[name] = newval;
    if (name === "confighasview" || name === "confighascheckbox" || name === "confighaspaging" || name === "confighassequence" || name === "confighasdelete" || name === "confighasusesubheader") {
      this[name] = true;
    }
    else if (name === "configdatatable") {
      this[name] = JSON.parse(newval);
    }
    // else if (name === "configsubheadertable") {
    //     this.configsubheadertable[this.configlevelsubheader].push()
    // }

    this.initialSetup();
    // const textArea = this.shadowRoot.getElementById('test');
    // console.log('vxv', textArea)


    // console.log("xxxc",this.shadowRoot.get
    // $(this.shadowRoot)
    super.attributeChangedCallback(name, oldval, newval);
  }

  // shouldUpdate(changedProperties) {
  //   changedProperties.forEach((oldValue, propName) => {
  //     console.log(`${propName} changed. oldValue: ${oldValue}`);
  //   });
  //   return changedProperties.has('data');
  // }

  updated() {
    console.log("----update-----");
    this.initialSetup();
    //   this.tableStyle()
    //  console.log("this.configHasPaging",this.configHasPaging)
    //   //console.log('vxv', this.shadowRoot.querySelector('#canvas'))
    //   // this.generateQRCode();
  }
  private async createData() {
    if (!this.configdatatable || this.configdatatable.length == 0) {
      this.configdatatable = [
        {
          header: 'header1',
          value: 'example1',
          isfieldmergecol: true,
          istextinline: false,
          isimg: 'fa fa-cut',
          valuecolumnbackgroundcolor: 'red',
          valuecolumntextcolor: 'white',
          valueheaderbackgroundcolor: 'blue',
          valueheadertextcolor: 'orange'
        },
        {
          header: 'header2',
          value: 'example2',
          isfieldmergecol: false,
        },
        {
          header: 'header3',
          value: 'example3',
          isfieldmergecol: false
        },
        {
          header: 'header4',
          value: 'example4',
          islink: this.defaultConfig.islink,
          linkname: this.defaultConfig.linkname,
        },
      ]
    }



    // this.configsectiondata = [
    //   {
    //     sectionby: 'example1',
    //     sectionname: 'Inbound',
    //     sectionicon: null,
    //     sectionhideattr: false,
    //     sectioncollapse: true,
    //     sectionclass: null,
    //     iscollapsenewrow:true
    //   },
    //   {
    //     sectionby: 'example3',
    //     sectionname: 'test',
    //     sectionicon: null,
    //     sectionhideattr: false,
    //     sectioncollapse: true,
    //     sectionclass: null,
    //     iscollapsenewrow:false
    //   }
    // ]

    // {
    //   type: "string",
    //   attribute: "sectionname",
    //   label: "Name"
    // },
    // {
    //   type: "icon",
    //   attribute: "sectionicon",
    //   label: "Icon"
    // },
    // {
    //   type: "boolean",
    //   attribute: "sectioncollapse",
    //   label: "Enable Collapse"
    // },
    // {
    //   type: "string",
    //   attribute: "sectionclass",
    //   label: "Class Name"

    // this.configsubheader0 = [

    //              {
    //           header: 'header1',
    //          }, 
    //          {
    //           header: 'headerx',
    //          },
    //          {
    //           header: 'headerx',
    //          },
    //          {
    //           header: 'headerx',
    //          }
    // ]
    // this.configsubheader1 = [
    //           {
    //             header: 'header4',
    //            }, 
    //            {
    //             header: 'header4',
    //            },
    //            {
    //             header: 'header2',
    //            },
    //            {
    //             header: 'header2',
    //            }


    // ]
    // if (!this.configsubheadertable || this.configsubheadertable.length == 0) {
    //      this.configsubheadertable = [
    //         [
    //          {
    //           header: 'header1',
    //          }, 
    //          {
    //           header: 'headerx',
    //          },
    //          {
    //           header: 'headerx',
    //          },
    //          {
    //           header: 'headerx',
    //          }
    //         ]
    //         ,
    //         [
    //           {
    //             header: 'header4',
    //            }, 
    //            {
    //             header: 'header4',
    //            },
    //            {
    //             header: 'header2',
    //            },
    //            {
    //             header: 'header2',
    //            }
    //         ],

    //         // [
    //         //   {
    //         //     header: 'header1',
    //         //    }, 
    //         //    {
    //         //     header: 'header2',
    //         //    },
    //         //    {
    //         //     header: 'header3',
    //         //    },
    //         //    {
    //         //     header: 'header4',
    //         //    }
    //         // ],

    //      ]
    // }


    if (!this.configcustomtable || this.configcustomtable.length == 0) {
      this.configcustomtable = [
        {
          cusattributekey: 'example1',
          cusattributevalue: 'field2',
          cususerelativeword: true,
          cususeinlinetext: false,
          custextcolor: 'blue',
          custextalign: 'right',
          cusbackgroundcolor: 'red',
          cuspaddingtop: '10px',
          cuspaddingbot: '10px',
          cuspaddingleft: '10px',
          cuspaddingright: '10px',
          cusmergecellrow: true,
          cusaffected: 'one'
        }
      ]

    }

    let arrayHeader = [];
    let arrayValue = [];
    for (let data = 0; data < this.configdatatable.length; data++) {
      for (let key in this.configdatatable[data]) {
        if (key == 'header') {
          arrayHeader.push(this.configdatatable[data][key])
        } else if (key == 'value') {
          arrayValue.push({
            data: this.configdatatable[data][key],
            islink: this.configdatatable[data]['islink'],
            linkname: this.configdatatable[data]['linkname'],
            isfieldmergerow: this.configdatatable[data]['isfieldmergerow'],
            isfieldmergecol: this.configdatatable[data]['isfieldmergecol'],
            istextinline: this.configdatatable[data]['istextinline'],
            isimg: this.configdatatable[data]['isimg'],
            cusclassthisheader: this.configdatatable[data]['cusclassthisheader'],
            cusclassthisvalue: this.configdatatable[data]['cusclassthisvalue'],
            // valuecolumnbackgroundcolor:this.configdatatable[data]['valuecolumnbackgroundcolor'],
            // valuecolumntextcolor:this.configdatatable[data]['valuecolumntextcolor'],
            // valueheaderbackgroundcolor:this.configdatatable[data]['valueheaderbackgroundcolor'],
            // valueheadertextcolor:this.configdatatable[data]['valueheadertextcolor']




          })
        }

      }
    }
    return { headers: arrayHeader, values: arrayValue }
  }
  createColumn() {
    this.calMergeCell().then(async () => {
      console.log("this.setDataTable", this.setDataTable);
      let htmlHeaderColumn = '';
      let htmlValueColumn = '';
      if (this.confighascheckbox) {
        htmlHeaderColumn += `<th><div class="custom-control custom-checkbox">
      <input data-index="all" type="checkbox" class="custom-control-input" id="te-checkbox-all">
      <label class="custom-control-label" for="te-checkbox-all"></label>
    </div></th>`
      }
      if (this.confighassequence) {
        htmlHeaderColumn += `<th>#</th>`
      }
      this.setDataTable.headers.forEach((header, index) => {

        //   let styleHeader =  `
        //   background:${this.setDataTable.values[index].valueheaderbackgroundcolor};
        //   color:${this.setDataTable.values[index].valueheadertextcolor};

        // `
        if (this.setDataTable.values[index].cusclassthisheader) {
          htmlHeaderColumn += `<th class="${this.setDataTable.values[index].cusclassthisheader}" >${header}</th>`
        } else {
          htmlHeaderColumn += `<th>${header}</th>`
        }

      });
      if (this.confighasview) {
        htmlHeaderColumn += `<th></th>`
      }
      // if(this.confighasDelete){
      //   htmlHeaderColumn += `<th></th>`
      // }


      let startData = ((this.currentPage * this.perPage) - this.perPage);
      let endData = this.perPage * this.currentPage
      if (startData > this.rawData.length - 1 && this.rawData.length > 0) {
        this.currentPage = this.currentPage - 1;
        startData = (((this.currentPage) * this.perPage) - this.perPage);
        endData = this.perPage * (this.currentPage)
      }


      if (window["__ENV__"] !== "PGD") {
        for (let i = startData; i < endData; i++) {
          if (i < this.rawData.length) {
            htmlValueColumn += `<tr>`
            if (this.confighascheckbox) {
              htmlValueColumn += `<td><div class="custom-control custom-checkbox">
              <input data-index="${i}" type="checkbox" class="custom-control-input" id="te-checkbox-${i}">
              <label class="custom-control-label" for="te-checkbox-${i}"></label>
            </div></td>`
            }
            if (this.confighassequence) {
              htmlValueColumn += `<td>${i + 1}</td> `;
            }

            await this.setDataTable.values.forEach(async (value) => {
              let optionLinkHtml = '';
              let optionTextInline = false;
              let optionImgHtml = '';

              if (value.islink) {
                optionLinkHtml = `<a data-attribute="${value.data}"  data-index="${i}" href="${this.rawData[i][value.data]}" target="_blank" id="te-value-link-${i}" class="stretched-link te-value-link">${value.linkname}</a>`
              }
              if (value.istextinline) {
                optionTextInline = true;
              }
              if (value.isimg) {
                optionImgHtml = `<span class="td-img ${value.isimg}"></span>`
              }

              // htmlValueColumn += `<td>${this.rawData[i][value].data}</td>`

              //  htmlValueColumn += `<td> <a data-attribute="${value.data}"  data-index="${i}" href="${this.rawData[i][value.data]}" target="_blank" id="te-value-link-${i}" class="stretched-link te-value-link">${value.linkName}</a></td>`

              // let styleColumn =  `
              //   background:${value.valuecolumnbackgroundcolor};
              //   color:${value.valuecolumntextcolor};

              // `
              if (value.cusclassthisvalue) {
                htmlValueColumn += `<td class="${value.cusclassthisvalue}" data-index="${i}" data-attribute="${value.data}" contenteditable="${optionTextInline}">${optionImgHtml}${optionLinkHtml || this.rawData[i][value.data]}</td>`
              } else {
                htmlValueColumn += `<td data-index="${i}" data-attribute="${value.data}" contenteditable="${optionTextInline}">${optionImgHtml}${optionLinkHtml || this.rawData[i][value.data]}</td>`
              }



              // if (value.islink) {
              //   htmlValueColumn += `<td > </td>`
              // } else {
              //   if (value.istextinline) {
              //     htmlValueColumn += `<td data-index="${i}" contenteditable="true"  data-attribute="${value.data}">${this.rawData[i][value.data]}</td>`
              //   } 
              //  else if (value.isImg) {

              //     htmlValueColumn += `<td data-index="${i}" data-attribute="${value.data}"><i class="td-img ${value.isImg}"></i> ${this.rawData[i][value.data]}</td>`
              //   }
              //   else {

              //     htmlValueColumn += `<td  data-index="${i}" data-attribute="${value.data}">${this.rawData[i][value.data]}</td>`
              //   }

              // }
            })
            let btnHtml = "";
            if (this.confighasview) {
              btnHtml += `<a  data-index="${i}" id="te-value-view-${i}" class="btn stretched-link  te-value-view">View</a> `
            }
            if (this.confighasdelete) {
              btnHtml += `<a  data-index="${i}" id="te-value-delete-${i}" class="btn stretched-link  te-value-delete">Delete</a>`
            }
            if (this.confighasview || this.confighasdelete) {
              htmlValueColumn += `<td>${btnHtml}</td>`
            }


            htmlValueColumn += `</tr>`
          }
        }
        if (this.rawData.length === 0 || startData > this.rawData.length - 1) {
          let colspanLength = this.setDataTable.headers.length;
          if (this.confighascheckbox) {
            colspanLength += 1;
          }
          if (this.confighasview) {
            colspanLength += 1;
          }
          if (this.confighasdelete) {
            colspanLength += 1;
          }
          htmlValueColumn += `<tr><td class="text-center" colspan="${colspanLength}">No data</td></tr>`
        }
      } else {
        this.setDataTable.values.forEach((value, index) => {
          // htmlValueColumn += `<td>${this.rawData[i][value].data}</td>`
          if (this.confighascheckbox && index === 0) {
            htmlValueColumn += `<td><div class="custom-control custom-checkbox">
              <input data-index="${index}" type="checkbox" class="custom-control-input" id="te-checkbox-${index}">
              <label class="custom-control-label" for="te-checkbox-${index}"></label>
            </div></td>`
          }
          if (this.confighassequence && index === 0) {
            htmlValueColumn += `<td>${index + 1}</td> `;
          }

          if (value.islink) {
            htmlValueColumn += `<td> <a  data-index="${index}" href="${value.data}" target="_blank" id="te-value-link-${index}" class="stretched-link te-value-link">${value.data}</a></td>`
          } else {
            if (value.cusclassthisvalue) {
              htmlValueColumn += `<td class="${value.cusclassthisvalue}">${value.data}</td>`
            } else {
              htmlValueColumn += `<td>${value.data}</td>`
            }

          }
          if (index === this.setDataTable.values.length - 1) {
            let btnHtml = "";
            if (this.confighasview) {
              btnHtml += `<a  data-index="${index}" id="te-value-view-${index}" class="btn stretched-link  te-value-view">View</a> `
            }
            if (this.confighasdelete) {
              btnHtml += `<a  data-index="${index}" id="te-value-delete-${index}" class="btn stretched-link  te-value-delete">Delete</a>`
            }
            if (this.confighasview || this.confighasdelete) {
              htmlValueColumn += `<td>${btnHtml}</td>`
            }
          }


        })


      }

      htmlHeaderColumn = '<tr>' + htmlHeaderColumn + '</tr>'
      $(this).find('.pagination').find('select').val(this.currentPage)
      $(this).find('.te-table').find('thead').html(htmlHeaderColumn)
      $(this).find('.te-table').find('tbody').html(htmlValueColumn)

      if (this.confighaspaging) {
        if (endData < this.rawData.length) {
          $(this).find('.paging-text').text(`Showing ${startData + 1} to ${endData} of ${this.rawData.length} entries`)
        }
        else if (this.rawData.length == 0) {
          $(this).find('.paging-text').text(`Showing ${this.rawData.length} to ${this.rawData.length} of ${this.rawData.length} entries`)
        }
        else {
          $(this).find('.paging-text').text(`Showing ${startData + 1} to ${this.rawData.length} of ${this.rawData.length} entries`)
        }
      } else {
        $(this).find('.paging-text').text(" ")
      }

      this.handleCheckBox();
      this.handleBtn();
      this.handleInlineInput();
      this.createGroupByData()
      this.createSectionByData();
      // this.createMergeData(); 
      setTimeout(() => {
        this.createMergeData();
      });


      this.tableStyle()
      this.createSubHeader();
      setTimeout(() => {
       // this.createSectionByData();
        this.handleOnload();
      }, 1000)

    });

  }

  tableConfig() {
    this.configPaging();
    this.createColumn();
  }
  tableStyle() {
    $(this).find('.te-table').find('thead').css('background', this.headerbgcolor)
    $(this).find('.te-table').find('thead').css('color', this.headertextcolor)


    $(this).find('.te-table').find('tbody').css('background', this.valuebgcolor)
    $(this).find('.te-table').find('tbody').css('color', this.valuetextcolor)
    $(this).find('.te-table').find('tbody').find('.te-value-link').css('color', this.valuelinkcolor)
    $(this).find('.te-table').find('tbody').find('.te-value-view').css('color', this.valuebtnviewtextcolor)
    $(this).find('.te-table').find('tbody').find('.te-value-view').css('background', this.valuebtnviewcolor)
    $(this).find('.te-table').find('tbody').find('.te-value-delete').css('color', this.valuebtndeletetextcolor)
    $(this).find('.te-table').find('tbody').find('.te-value-delete').css('background', this.valuebtndeletecolor)
    $(this).find('.te-table').find('tbody').find(`[data-isgroup="true"]`).css('background', this.valuerowsummarycolor)
    $(this).find('.te-table').find('tbody').find(`[data-isgroupdraft="true"]`).css('background', this.valuerowsummarycolor)
    $(this).find('.te-table').find('tbody').find(`[data-isgroup="true"]`).css('color', this.valuebtnviewtextcolor)
    $(this).find('.te-table').find('tbody').find(`[data-isgroupdraft="true"]`).css('color', this.valuebtnviewtextcolor)


    $(this).find('.te-table').addClass(this.cusclasstable)
    $(this).find('.te-table').find('thead').find('th').addClass(this.cusclassheader)
    $(this).find('.te-table').find('tbody').find('td:not(".td-summary")').addClass(this.cusclassvalue)




    // if(this.cusclassthistable){
    //   $(this).find('.te-table').addClass(this.cusclassthistable)
    // }
    // else if(this.cusclasstable){
    //   $(this).find('.te-table').addClass(this.cusclasstable)
    // }
    // if(this.cusclassthisheader){
    //   $(this).find('.te-table').find('thead').find('th').addClass(this.cusclassthisheader)
    // }
    // else if(this.cusclassheader){
    //   $(this).find('.te-table').find('thead').find('th').addClass(this.cusclassheader)
    // }


    // if(this.cusclassthisvalue){
    //   $(this).find('.te-table').find('tbody').find('td').addClass(this.cusclassthisvalue)
    // }
    // else if(this.cusclassvalue){
    //   $(this).find('.te-table').find('tbody').find('td').addClass(this.cusclassvalue)
    // }


  }
  private configPaging() {
    this.perPage = this.confighasperpage;
    if (this.confighaspaging) {
      $(this).find('.pagination').css('display', 'flex');
    } else {
      $(this).find('.pagination').css('display', 'none');
    }
  }
  handleCheckBox() {
    this.resultDataSelected = [];
    this.resultDataLink = {};
    this.resultDataView = {};

    this.resultDataSelected.forEach((result) => {
      $(this).find('.te-table').find('tbody').find(`input[id=te-checkbox-${result.index}]`).prop('checked', true)
    });
    $(this).find('.te-table').find('thead').find('.custom-control-input').unbind().bind('change', (event) => {
      if ($(event.currentTarget).prop('checked')) {
        $(this).find('.te-table').find('tbody').find('.custom-control-input').prop('checked', true)
        $(this).find('.te-table').find('tbody').find('.custom-control-input').each((index, event) => {
          let indexCheckbox = parseInt($(event).attr('data-index'))
          this.resultDataSelected.push({ index: indexCheckbox, data: this.rawData[indexCheckbox] })
        });
      } else {
        $(this).find('.te-table').find('tbody').find('.custom-control-input').prop('checked', false)
        this.resultDataSelected = [];
      }
      let result = {
        action: this.actionEvent.checkbox,
        data: { microflowName: this.pgData, microflowData: this.resultDataSelected }
      }
      let checkBoxEvent = new CustomEvent('table-editor-event', {
        detail: { results: result },
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(checkBoxEvent);
      console.log("Result Selected ☛", result)



    })
    $(this).find('.te-table').find('tbody').find('.custom-control-input').unbind().bind('change', (event) => {
      let indexCheckbox = parseInt($(event.currentTarget).attr('data-index'))
      if ($(event.currentTarget).prop('checked')) {
        this.resultDataSelected.push({ index: indexCheckbox, data: this.rawData[indexCheckbox] })
      } else {
        this.resultDataSelected = this.resultDataSelected.filter((ev) => ev.index !== indexCheckbox)
      }
      if ($(this).find('.te-table').find('tbody').find('.custom-control-input').length === this.resultDataSelected.length) {
        $(this).find('.te-table').find('thead').find('.custom-control-input').prop('checked', true)
      }
      else if (this.resultDataSelected.length === 0) {
        $(this).find('.te-table').find('thead').find('.custom-control-input').prop('checked', false)
      }
      let result = {
        action: this.actionEvent.checkbox,
        data: { microflowName: this.pgData, microflowData: this.resultDataSelected }
      }
      let checkBoxEvent = new CustomEvent('table-editor-event', {
        detail: { results: result },
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(checkBoxEvent);
      console.log("Result Selected ☛", result)
    })

  }
  handleOnload() {
    let result = {
      action: this.actionEvent.onload,
      data: { microflowName: this.pgData, microflowData: this.rawData }
    }
    let onloadEvent = new CustomEvent('table-editor-event', {
      detail: { results: result },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(onloadEvent);
  }
  handleInlineInput() {
    $(this).find('.te-table').find('tbody').find('td').unbind().bind('input', this.debounce((element) => {
      let targetElement = $(element.currentTarget);
      this.rawData[targetElement.attr('data-index')][targetElement.attr('data-attribute')] = $(element.currentTarget).text();
      let result = {
        action: this.actionEvent.editext,
        data: { microflowName: this.pgData, microflowData: this.rawData }
      }
      let inlineEvent = new CustomEvent('table-editor-event', {
        detail: { results: result },
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(inlineEvent);

    }, 1000));
  }
  handleBtn() {
    $(this).find('.te-table').find('tbody').find('a').unbind().bind('click', (event) => {
      let indexLink = parseInt($(event.currentTarget).attr('data-index'))
      this.resultDataLink = { index: indexLink, data: this.rawData[indexLink] }

      let result = {
        action: this.actionEvent.link,
        data: { microflowName: this.pgData, microflowData: this.resultDataLink }
      }
      let linkEvent = new CustomEvent('table-editor-event', {
        detail: { results: result },
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(linkEvent);
      console.log("Result link ☛", result)
    });



    $(this).find('.te-table').find('tbody').find('.te-value-view').unbind().bind('click', (event) => {
      let indexView = parseInt($(event.currentTarget).attr('data-index'))
      this.resultDataView = { index: indexView, data: this.rawData[indexView] }
      let result = {
        action: this.actionEvent.view,
        data: { microflowName: this.pgData, microflowData: this.resultDataView }
      }
      let viewEvent = new CustomEvent('table-editor-event', {
        detail: { results: result },
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(viewEvent);
      console.log("Result view ☛", result)
    });
    $(this).find('.te-table').find('tbody').find('.te-value-delete').unbind().bind('click', (event) => {
      let indexView = parseInt($(event.currentTarget).attr('data-index'))
      this.resultDataDelete = { index: indexView, data: this.rawData[indexView] }
      let result = {
        action: this.actionEvent.delete,
        data: { microflowName: this.pgData, microflowData: this.resultDataDelete }
      }
      let deleteEvent = new CustomEvent('table-editor-event', {
        detail: { results: result },
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(deleteEvent);
      console.log("Result view ☛", result)
    });
  }
  handlePaging(event) {
    if ($(event.currentTarget).attr('data-paging') === "paging-first") {
      this.currentPage = 1;
    }
    else if ($(event.currentTarget).attr('data-paging') === "paging-right") {
      if (this.currentPage * this.perPage < this.rawData.length) {
        this.currentPage += 1;
      }
    }
    else if ($(event.currentTarget).attr('data-paging') === "paging-input") {
      let inputPaging = parseInt($(event.currentTarget).val().toString());
      if (inputPaging < 1) {
        this.currentPage = 1;
      } else {
        if (((inputPaging * this.perPage) - this.perPage) < this.rawData.length) {
          this.currentPage = inputPaging
        } else {
          this.currentPage = Math.ceil(this.rawData.length / this.perPage)
        }
      }
    }
    else if ($(event.currentTarget).attr('data-paging') === "paging-left") {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
      }
    }
    else if ($(event.currentTarget).attr('data-paging') === "paging-last") {
      this.currentPage = Math.ceil(this.rawData.length / this.perPage)
    }
    this.createColumn();
    this.tableStyle();
  }
  handleSection() {
    $('[data-section="icon"]').unbind().bind('click',(event) => {
      // console.log("xx",$(event.currentTarget).parent())
      
      let parentTr = $($(event.currentTarget).parents('[data-issection="true"]'))
      // console.log(parentTr.nextUntil(`[data-section_level="${parseInt(parentTr.attr('data-section_level'))}"]`))

      // console.log(parentTr.nextUntil(`[data-section_level="${parseInt(parentTr.attr('data-section_level'))+1}"],[data-section_level="${parentTr.attr('data-section_level')}"]`))
    // parentTr.nextUntil(`[data-section_level="${parentTr.attr('data-section_level')}"],[data-section_level="${parseInt(parentTr.attr('data-section_level'))-1}"]`).toggle();

    
    if (parentTr.attr('data-collaspe-action')==='hide') {
      parentTr.attr('data-collaspe-action','show')
      parentTr.nextUntil(`[data-section_level="${parentTr.attr('data-section_level')}"],[data-section_level="${parseInt(parentTr.attr('data-section_level'))-1}"]`).show();
    }else{
      parentTr.attr('data-collaspe-action','hide')
      parentTr.nextUntil(`[data-section_level="${parentTr.attr('data-section_level')}"],[data-section_level="${parseInt(parentTr.attr('data-section_level'))-1}"]`).hide();

    }

      //console.log(parentTr.attr('data-section_level'))
     // console.log(parentTr.nextUntil(`[data-section_level="${parentTr.attr('data-section_level')}"]`))
     // parentTr.nextUntil(`[data-section_level="${parentTr.attr('data-section_level')}"]`).toggle();
      // $($(event.currentTarget).parents('[data-issection="true"]')).unbind().bind('click', (event) => {
      //   event.stopImmediatePropagation();
      //   event.stopPropagation();
        if (parentTr.nextUntil('[data-issection="true"]').is(":visible")) {
          $(event.currentTarget).find('[data-section="icon"]').attr('src', this.defaultConfig.arrowup)
        } else {
          $(event.currentTarget).find('[data-section="icon"]').attr('src', this.defaultConfig.arrowdown)
        }
       // parentTr.nextUntil('[data-issection="true"]').toggle()
      // })


    })
  }
  async calMergeCell() {
    // let runnumber = 0;

    this.renderData = this.rawData;
    this.renderHeader = [];
    //this.renderHeader = [...this.configdatatable]
    let objHeader = {}
    await this.configsubheader3 && this.configsubheader3.forEach(async (data, index) => {
      objHeader['header' + index] = data.header
    })
    if (Object.keys(objHeader).length > 0) {
      this.renderHeader.push(objHeader)
    }


    objHeader = {}
    await this.configsubheader2 && this.configsubheader2.forEach(async (data, index) => {
      objHeader['header' + index] = data.header
    })
    if (Object.keys(objHeader).length > 0) {
      this.renderHeader.push(objHeader)
    }

    objHeader = {}
    await this.configsubheader1 && this.configsubheader1.forEach(async (data, index) => {
      objHeader['header' + index] = data.header
    })
    if (Object.keys(objHeader).length > 0) {
      this.renderHeader.push(objHeader)
    }

    objHeader = {}



    await this.configsubheader0 && this.configsubheader0.forEach(async (data, index) => {
      objHeader['header' + index] = data.header
    })
    if (Object.keys(objHeader).length > 0) {
      this.renderHeader.push(objHeader)
    }

    objHeader = {}

    await this.configdatatable.forEach(async (data, index) => {
      objHeader['header' + index] = data.header
    })
    if (Object.keys(objHeader).length > 0) {
      this.renderHeader.push(objHeader)
    }



    // console.log("this.configsubheader0",this.configsubheader0)
    // console.log("this.renderHeader",this.renderHeader)

    //console.log('aaaaaaaaaaa',this.renderHeader)

    // this.configsubheadertable.slice().reverse().forEach((subheaders)=>{
    //     let objHeader = {}
    //     subheaders.forEach((subheader,index) => {
    //       objHeader['header'+index] = subheader.header
    //       // this.renderHeader.push(subheader)
    //     });
    //     this.renderHeader.push(objHeader)
    // })



    //his.renderHeader.push(...this.configdatatable);


    for (let i = 0; i < this.renderData.length; i++) {
      this.renderData[i] = { ...this.renderData[i], meta_: { merge: {} } }
    }

    for (let i = 0; i < this.renderHeader.length; i++) {
      this.renderHeader[i] = { ...this.renderHeader[i], meta_: { merge: {} } }
    }




    if (this.rawData.length > 0) {
      let runnumberColValue = this.rawData.length - 1;
      for await (let obj of this.setDataTable.values) {
        // if (obj.isfieldmergecol || this.confighasmergeallcol && this.rawData.length > 0) {
        await this.findMergeColCell(runnumberColValue, 0, obj.data, 'value');
        runnumberColValue = this.rawData.length - 1;
        // }
      }

      let runnumberRowValue = this.setDataTable.values.length - 1;
      for (let i = this.rawData.length - 1; i >= 0; i--) {
        await this.findMergeRowCell(runnumberRowValue, i, 0, 'value');
        runnumberRowValue = this.setDataTable.values.length - 1;
      }

    }
    let runnumberColHeader = this.renderHeader.length - 1;
    for (let obj in this.renderHeader[0]) {
      // if (obj.isfieldmergecol || this.confighasmergeallcol && this.rawData.length > 0) {
      if (obj != 'meta_') {
        await this.findMergeColCell(runnumberColHeader, 0, obj, 'header');
        runnumberColHeader = this.renderHeader.length - 1;
      }
      // }
    }
    for (let i = this.renderHeader.length - 1; i >= 0; i--) {
      let runnumberRowHeader = Object.keys(this.renderHeader[i]).length - 1;
      await this.findMergeRowCell(runnumberRowHeader, i, 0, 'header');
    }
    // console.log(this.configsubHeadertable.length) 
    // console.log(this.configdatatable.length)
    // let runnumberColHeader = this.configsubHeadertable.length +1;
    // for await (let obj of this.renderHeader) {
    //   console.log(obj)
    //   await this.findMergeColCell(runnumberColHeader, 0, null, 'header');
    //   runnumberColHeader = this.configsubHeadertable.length +1;
    //   //runnumberColHeader
    // }

    // for (let i = this.rawData.length - 1; i >= 0; i--) {
    //   await this.findMergeRowCell(runnumberColHeader, i, 0, 'value',null);
    //   runnumberColHeader = this.setDataTable.values.length - 1;
    // }




    // if (this.confighasmergeheader) {

    // }
  }
  async calGroupBy() {
    for (let i = 0; i < this.renderData.length; i++) {
      this.renderData[i].meta_['groupby'] = {}
    }
    this.renderData.forEach(async (obj, index) => {
      if (obj.meta_.merge['col_' + this.confighasgroupby] > 0) {
        //this.renderData[index+obj.meta_.merge['col_' + this.confighasgroupby]]
        this.renderData[index + obj.meta_.merge['col_' + this.confighasgroupby]].meta_.groupby['key_' + this.confighasgroupby] = 1
      } else if (
        !this.renderData[index].meta_.groupby['key_' + this.confighasgroupby] &&
        (this.renderData[index - 1] && this.renderData[index - 1][this.confighasgroupby] !== this.renderData[index][this.confighasgroupby]
          || this.renderData[index + 1] && this.renderData[index][this.confighasgroupby] !== this.renderData[index + 1][this.confighasgroupby])) {
        this.renderData[index].meta_.groupby['key_' + this.confighasgroupby] = 1

      }
    })
  }


  async calSectionBy() {
    for (let i = 0; i < this.renderData.length; i++) {
      this.renderData[i].meta_['sectionby'] = {}
    }
    this.configsectiondata.forEach((config,index) => {
            let ojectKey = config.sectionby
            //let ojectKey = this.confighassectionby;
            for  (let i = this.renderData.length-1; i >= 0; i--) {
   
                // if (this.renderData[i].meta_.merge['col_' + ojectKey] > 0) {
                //   this.renderData[i].meta_.sectionby['key_' + ojectKey] = 1
                // }
              if(index === 0){
                if(i === 0){
                  this.renderData[i].meta_.sectionby['key_' + ojectKey] = 1
                  // if (this.renderData[i].meta_.merge['col_' + ojectKey] > 0) {
                  //   this.renderData[i].meta_.sectionby['key_' + ojectKey] = 1
                  // }
                }
                else if (this.renderData[i - 1][ojectKey] !== this.renderData[i][ojectKey]) {
                    this.renderData[i].meta_.sectionby['key_' + ojectKey] = 1
                } 
              }else{

                if (this.renderData[i - 1]&&this.renderData[i - 1][ojectKey] !== this.renderData[i][ojectKey] || this.renderData[i].meta_.sectionby['key_' + this.configsectiondata[index-1].sectionby] > 0) {
                    this.renderData[i].meta_.sectionby['key_' + ojectKey] = 1
                } 

              }

            }
    });
    


  }

  async calSummaryNumber() {
    for (let i = 0; i < this.renderData.length; i++) {
      this.renderData[i].meta_['summary'] = {}
    }
    if (this.renderData.length > 0) {
      let runnumber = 0;
      for await (let obj of this.setDataTable.values) {
        // if (obj.isfieldmergecol || this.confighasmergeallcol && this.rawData.length > 0) {
        await this.findSectionSummary(runnumber, 0, obj.data, 0);
        runnumber = 0;
        // }
      }
    }

  }
  findSectionSummary(runnumber, numberOfSummary, attributeName, sectionNo) {

    //console.log('valueOFColumn',valueOFColumn)
    let valueOFColumn;
    if (runnumber <= this.renderData.length - 1) {
      valueOFColumn = this.parseStringToInt(this.renderData[runnumber][attributeName])
      numberOfSummary = numberOfSummary + valueOFColumn;

    }
    if (runnumber === this.renderData.length - 1) {
      if (!isNaN(numberOfSummary)) {
        this.renderData[runnumber].meta_.summary['key_' + attributeName] = numberOfSummary
      }
      return;
    }

    else if (this.renderData[runnumber].meta_.groupby['key_' + this.confighasgroupby] > 0) {
      //numberOfSummary  = numberOfSummary + valueOFColumn;

      if (!isNaN(numberOfSummary)) {
        this.renderData[runnumber].meta_.summary['key_' + attributeName] = numberOfSummary
      }
      numberOfSummary = 0;
    }
    return this.findSectionSummary(runnumber + 1, numberOfSummary, attributeName, sectionNo)


  }

  createMergeData() {

    console.log("this.renderData", this.renderData)

    this.renderData.forEach((obj, index) => {
      
      for (var key in obj) {
        let targetValue = this.configdatatable.find((config) => config.value === key);
        if (obj.meta_.merge['col_' + key] > 0 && (targetValue.isfieldmergecol || this.confighasmergeallcol)) {

              let i = 0;
              let totalRowSpan  = obj.meta_.merge['col_' + key]+1;
              let remainRowSpan  = obj.meta_.merge['col_' + key]+1;

              for (let i = 0 ; i < obj.meta_.merge['col_' + key] ; i++){
               console.log($($(this).find(`tbody tr([data-isgroup!='true'][data-issection=="true"])`)[index+i])) 
              }

              
              while(i < obj.meta_.merge['col_' + key]){
                if($($(this).find(`tbody tr:not([data-isgroup='true'],[data-issection="true"])`)[index+i]).next().attr('data-issection')
                ){
                  // if($($(this).find(`tbody tr:not([data-isgroup='true'],[data-issection="true"])`)[index+i]).next().attr('data-isselfsection')){
                  //  // console.log('cxxxxxxxxxxxxx')
                  //  remainRowSpan= remainRowSpan -1;
                  // }
                  $($(this).find(`tbody tr:not([data-isgroup='true'],[data-issection="true"])`)[index]).find(`[data-attribute='${key}']`).attr('rowspan', i + 1);
                  remainRowSpan= remainRowSpan - (i + 1);
                  for (let j = 1; j < i+1; j++) {
                    $($(this).find(`tbody tr:not([data-isgroup='true'],[data-issection="true"])`)[index+j]).find(`[data-attribute='${key}']`).remove();
                  }
                }else{
                   console.log("remainRowSpan",key,remainRowSpan,index+i+1)

                   if(i=== obj.meta_.merge['col_' + key]-1){
                     
                    $($(this).find(`tbody tr:not([data-isgroup='true'],[data-issection="true"])`)[(index+i+1)-(remainRowSpan-1)]).find(`[data-attribute='${key}']`).attr('rowspan', remainRowSpan);
                    for (let j = 1; j < remainRowSpan; j++) {
                      $($(this).find(`tbody tr:not([data-isgroup='true'],[data-issection="true"])`)[(index+i+1+j)-(remainRowSpan-1)]).find(`[data-attribute='${key}']`).remove();
                      // $($(this).find(`tbody tr:not([data-isgroup='true'],[data-issection="true"])`)[index+jind(`[data-attribute='${key}']`).remove();
                    } 
                  }
                  // // console.log("obj.meta_.merge['col_' + key]",obj.meta_.merge['col_' + key]);
                  // // console.log(i)
                  // if(i=== obj.meta_.merge['col_' + key]-1){
                  //   $($(this).find(`tbody tr:not([data-isgroup='true'],[data-issection="true"])`)[(index+i)-remainRowSpan]).find(`[data-attribute='${key}']`).attr('rowspan', remainRowSpan);
                    
                  //   // for (let j = 1; j < remainRowSpan; j++) {
                  //   //   $($(this).find(`tbody tr:not([data-isgroup='true'],[data-issection="true"])`)[index+remainRowSpan+j]).find(`[data-attribute='${key}']`).remove();
                  //   // }

                  // }
                }
                // else{
                //   if(i=== obj.meta_.merge['col_' + key]){
                //     $($(this).find(`tbody tr:not([data-isgroup='true'],[data-issection="true"])`)[index]).find(`[data-attribute='${key}']`).attr('rowspan', remainRowSpan);
                //   }
                // }

                // $($(this).find(`tbody tr:not([data-isgroup='true'],[data-issection="true"])`)[index + i]).find(`[data-attribute='${key}']`).remove()
                //console.log( $($(this).find(`tbody tr:not([data-isgroup='true'],[data-issection="true"])`)[index]).next().css('background','red'))
                i++;
              }

          // // console.log( $($(this).find('tbody tr')[index]))
          // $($(this).find(`tbody tr:not([data-isgroup='true'],[data-issection="true"])`)[index]).find(`[data-attribute='${key}']`).attr('rowspan', obj.meta_.merge['col_' + key] + 1);
          // for (let i = 1; i <= obj.meta_.merge['col_' + key]; i++) {
          //   $($(this).find(`tbody tr:not([data-isgroup='true'],[data-issection="true"])`)[index + i]).find(`[data-attribute='${key}']`).remove()
          //   //console.log(     $($(this).find('tbody tr')[index + i]).find(`[data-attribute='${key}']`).remove())
          //   //$($(this).find('tbody tr')[index + i]).find(`[data-attribute='${key}']`).remove();
          // }
        }
        if (obj.meta_.merge['row_' + key] > 0) {
          //console.log($(this).find('tbody tr td'))
          // console.log(" $($(this).find('tbody tr td')[index]).find(`[data-attribute='${key}']`)", $($(this).find('tbody tr')[index]).find(`[data-attribute='${key}']`))
          if (this.confighasmergeallrow) {
            $($(this).find('tbody tr')[index]).find(`[data-attribute='${key}']`).attr('colspan', obj.meta_.merge['row_' + key] + 1);
            for (let i = 1; i <= obj.meta_.merge['row_' + key]; i++) {

              $($(this).find('tbody tr')[index]).find(`[data-attribute='${key}']`).next().remove();
              // $($(this).find('tbody tr')[index]).find('td')[obj.meta_.merge['col_'+key]+i].remove();
            }
          }


        }

      }
    })

    this.renderHeader.forEach((obj, index) => {
      for (var key in obj) {
        if (obj.meta_.merge['col_' + key] > 0) {
          // console.log( $($(this).find('tbody tr')[index]))
          $($(this).find(`thead tr:not([data-isgroup='true'],[data-issection="true"])`)[index]).find(`[data-attribute='${key}']`).attr('rowspan', obj.meta_.merge['col_' + key] + 1);
          for (let i = 1; i <= obj.meta_.merge['col_' + key]; i++) {
            $($(this).find(`thead tr:not([data-isgroup='true'],[data-issection="true"])`)[index + i]).find(`[data-attribute='${key}']`).remove()
            //console.log(     $($(this).find('tbody tr')[index + i]).find(`[data-attribute='${key}']`).remove())
            //$($(this).find('tbody tr')[index + i]).find(`[data-attribute='${key}']`).remove();
          }
        }
        if (obj.meta_.merge['row_' + key] > 0) {
          $($(this).find('thead tr')[index]).find(`[data-attribute='${key}']`).attr('colspan', obj.meta_.merge['row_' + key] + 1);
          for (let i = 1; i <= obj.meta_.merge['row_' + key]; i++) {

            $($(this).find('thead tr')[index]).find(`[data-attribute='${key}']`).next().remove();
          }
        }
      }
    })




    this.setCustomTable()
    //   $(this).find('tbody tr').each((index,element)=>{
    //     console.log(element)
    //   })
    //  console.log($(this).find('tbody tr')) 
  }
  async createGroupByData() {
    if (!$(this).find('tbody tr').attr('data-isgroupdraft') && this.confighasusegroupby) {
      $(this).find('tbody').append('<tr><td  data-isgroupdraft="true"></td></td></tr>')
    }

    if (this.confighasusegroupby) {

      if (window["__ENV__"] !== "PGD") {
        $(this).find('tbody').find(`[data-isgroupdraft="true"]`).hide();

        let countGroup = 0;
        this.calGroupBy().then(async () => {
          // console.log('renderData',this.renderData)
          if (this.confighasumaryvalue) {
            await this.calSummaryNumber()
          }

          let existTextSummary = false;
          this.renderData.forEach(async (obj, index) => {
            if (obj.meta_.groupby['key_' + this.confighasgroupby] > 0) {
              $($(this).find('tbody tr')[index + countGroup]).after('<tr data-group_no="' + countGroup + '" data-isgroup="true"></tr>')
              let newHtmlColumn = '';
              let totalField = $($(this).find('tbody tr')[0]).find('td').length;


              for (let i = 0; i < totalField; i++) {
                if (i === 0) {
                  if (!this.confighasumaryvalue) {
                    newHtmlColumn = newHtmlColumn + '<td class="td-summary" colspan="' + totalField + '"></td>'
                  }
                  else {
                    //console.log("$($(this).find('tbody tr')[index]",$($(this).find('tbody tr')[index]))
                    let firstAttrbuteName = $($($(this).find('tbody tr')[index]).find('td')[i]).attr('data-attribute')
                    let value = obj.meta_.summary['key_' + firstAttrbuteName];
                    if (!value) {
                      existTextSummary = true;
                      newHtmlColumn = newHtmlColumn + '<td class="td-summary">' + this.valuetextsummary + '</td>'
                    } else {
                      let valueCurrencyFomat = this.formatCurrency(value)
                      if (!Number.isInteger(value)) {
                        valueCurrencyFomat = this.formatCurrency(value, 2)
                      }
                      newHtmlColumn = newHtmlColumn + '<td class="td-summary">' + valueCurrencyFomat + '</td>'
                    }
                  }

                } else {
                  let attrbuteName = $($($(this).find('tbody tr')[index]).find('td')[i]).attr('data-attribute')



                  if (i === totalField - 1 && !existTextSummary && !obj.meta_.summary['key_' + attrbuteName]) {
                    // $(this).find('tbody tr').find(`[data-isgroupdraft="true"]`).text()
                    newHtmlColumn = newHtmlColumn + '<td class="td-summary">' + this.valuetextsummary + '</td>'

                  } else {
                    let value = obj.meta_.summary['key_' + attrbuteName];
                    if (value) {
                      let valueCurrencyFomat = this.formatCurrency(value)
                      if (!Number.isInteger(value)) {
                        valueCurrencyFomat = this.formatCurrency(value, 2)
                      }

                      newHtmlColumn = newHtmlColumn + '<td class="td-summary">' + valueCurrencyFomat + '</td>'
                    } else {
                      newHtmlColumn = newHtmlColumn + '<td class="td-summary"></td>'
                    }
                  }

                  // }


                  // $($(this).find('tbody tr')[index+countSection]).append('<td>'+ obj.meta_.summary['key_' + attrbuteName] +'</td>')
                  //newHtmlColumn = newHtmlColumn + '<td></td>'
                }

                // $($(this).find('tbody tr')[index+countSection]).append('<td>total</td>')
              }
              countGroup = countGroup + 1;
              $($(this).find('tbody tr')[index + countGroup]).append(newHtmlColumn)


              // if(!this.confighasumaryvalue){
              //   this.calSummaryNumber().then(()=>{
              //     console.log('after cal summary ',this.renderData);
              //   })

              // }else{
              //   $(this).find('tbody tr').find(`[data-isgroup="true"]`).find('td').attr('colspan',$($(this).find('tbody tr')[0]).find('td').length)
              // }
            }
          })
          this.tableStyle()
        })
      } else {
        let totalField = $($(this).find('thead')[0]).find('th').length;
        console.log("totalField", totalField)
        $(this).find('tbody').find(`[data-isgroupdraft="true"]`).show();
        $(this).find('tbody').find(`[data-isgroupdraft="true"]`).text(this.valuetextsummary);
        $(this).find('tbody').find(`[data-isgroupdraft="true"]`).attr('colspan', totalField)
        this.tableStyle()
        //$(this).find('tbody').append('<tr><td data-isgroupdraft="true" class="border-0" colspan="'+totalField+'">total</td></tr>')
      }

    }

  }
  createSubHeader() {
    if (this.confighasusesubheader) {
      this.renderHeader.slice().reverse().forEach((subheaders, index) => {
        if (index !== 0) {
          let subHeaderHtml = '<tr>'
          for (let subheaderName in subheaders) {
            if (subheaderName != "meta_") {
              subHeaderHtml = subHeaderHtml + '<th>' + subheaders[subheaderName] + '</th>'
            }
          }
          subHeaderHtml += '</tr>'
          $(this).find('thead').prepend(subHeaderHtml)
        }
      })
      // this.configsubheadertable.forEach((subheaders)=>{
      //   let subHeaderHtml =  '<tr>'
      //   subheaders.forEach((subheader,index) => {

      //     subHeaderHtml = subHeaderHtml + '<th>'+subheader.header+'</th>'
      //     if(index ===  subheaders.length-1){
      //       console.log("subHeaderHtml",subHeaderHtml)
      //       $(this).find('thead').prepend(subHeaderHtml)
      //     }

      //   });
      //   subHeaderHtml = '</tr>'

      // })
    }
    // $($($(this).find('thead tr')[i]).find('th').remove();
    for (let i = 0; i < this.renderHeader.length; i++) {
      let countColumn = 0;
      for (var key in this.renderHeader[i]) {
        if (key != "meta_") {
          $($($(this).find('thead tr')[i]).find('th')[countColumn]).attr('data-attribute', key)
          countColumn = countColumn + 1;
        }
        // $($(this).find('thead tr').find('th')[i]).attr('data-attribute',key)
      }

    }



  }
  async createSectionByData() {
    if (window["__ENV__"] !== "PGD") {
      this.calSectionBy().then(async()=>{
          let sectionLevel = 0;
          for await (const config of this.configsectiondata) {
            let countSection = 0;
    
          
                let totalField =  $($(this).find('tbody tr:not([data-issection="true"], [data-isgroup="true"])')[0]).find('td').length;
                this.renderData.forEach(async (obj, index) => {
                  if (obj.meta_.sectionby['key_' + config.sectionby] > 0) {
                    if(!config.iscollapsenewrow){
                      $($(this).find(`tbody tr:not([data-issection=true])`)[index]).attr('data-section_level',sectionLevel)
                      $($(this).find(`tbody tr:not([data-issection=true])`)[index]).attr('data-section_no',countSection)
                      $($(this).find(`tbody tr:not([data-issection=true])`)[index]).attr('data-isselfsection',"true")
                      $($(this).find(`tbody tr:not([data-issection=true])`)[index]).attr('data-issection',"true")
                    }else{
                      $($(this).find(`tbody tr:not([data-issection=true])`)[index]).before(`<tr data-section_level="${sectionLevel}" data-section_no="${countSection}" data-issection="true">
                      <td style="padding-left:${20*sectionLevel}px" class="td-section" colspan="${totalField}">
                      <span class="section-text">${config.sectionby}</span>
                        <img data-section="icon" src="${this.defaultConfig.arrowdown}" class="section-icon"></img>
                      </td></tr>`)
                    }

        
                    countSection++;
                  }
                });
                this.handleSection();
                sectionLevel++;
            
          }

      })
      // for (let i = 0; i < this.renderData.length; i++) {
      //   this.renderData[i].meta_['sectionby'] = {}
      // }
      // let index = 0;

      // for await (const config of this.configsectiondata) {
      //   let countSection = 0;
      //   if (index === 0) {
      //     this.calSectionBy(config.sectionby, this.renderData.length - 1, 0)
      //       let totalField = $($(this).find('tbody tr')[0]).find('td').length;
      //        this.renderData.forEach(async (obj, index) => {
      //         if (obj.meta_.sectionby['key_' + this.confighassectionby] > 0) {

      //           $($(this).find(`tbody tr:not([data-issection=true])`)[index]).before(`<tr data-section_level="0" data-section_no="${countSection}" data-issection="true">
      //             <td class="td-section" colspan="${totalField}">
      //              <span class="section-text">${this.confighassectionby}</span>
      //                <img data-section="icon" src="${this.defaultConfig.arrowdown}" class="section-icon"></img>
      //             </td></tr>`)
      //           countSection++;
      //         }
      //       });
      //       this.handleSection();
      //   }else{
      //     let targetSection = $(`[data-section_level="${index-1}"]`)
      //     console.log(targetSection.next())
      //    console.log( targetSection.nextUntil(targetSection.next()))
      //    // console.log(targetSection.attr('data-section_no')+1)
      //     // targetSection.nextUntil(`[data-section_no="${parseInt(targetSection.attr('data-section_no'))+1}"]`).css('background','red')
     
         
      //   }
      //   index++;
      // }

      // await this.configsectiondata.forEach(async (config, index) => {
      //   let countSection = 0;
      //   if (index === 0) {
      //     await this.calSectionBy(config.sectionby, this.renderData.length - 1, 0)
      //       console.log('xxxxxxx')
      //       let totalField = $($(this).find('tbody tr')[0]).find('td').length;
      //        this.renderData.forEach(async (obj, index) => {
      //         if (obj.meta_.sectionby['key_' + this.confighassectionby] > 0) {

      //           $($(this).find(`tbody tr:not([data-issection=true])`)[index]).before(`<tr data-section_level="0" data-section_no="${countSection}" data-issection="true">
      //             <td class="td-section" colspan="${totalField}">
      //              <span class="section-text">${this.confighassectionby}</span>
      //                <img data-section="icon" src="${this.defaultConfig.arrowdown}" class="section-icon"></img>
      //             </td></tr>`)
      //           countSection++;

      //         }
      //       });
      //       this.handleSection();
         
      //   }else{

      //       console.log($(`[data-section_level="${index-1}"]`))
      //       console.log( $(`[data-section_level="${index-1}"]`).nextUntil(`[data-section_level="${index-1}"]`)   )
     
         
          

      //   }
      // });
      // let sectionBy =  this.configsectiondata && this.configsectiondata.length > 0 && this.configsectiondata[0].sectionby || null;

    }
    // this.handleSection();
  }

  async setCustomTable() {
    console.log('configcustomtable ==>', this.configcustomtable)
    this.configcustomtable.forEach(async (config) => {
      //let targetData =  this.rawData.filter((data)=>data[config.cusattributekey]==config.cusattributevalue) || []
      this.renderData.forEach(async (data, targetRowIndex) => {

        //let targetData =  this.rawData.findIndex((data)=>data[config.cusattributekey]==config.cusattributevalue)
        if (data[config.cusattributekey] == config.cusattributevalue) {
          let targetRenderObj = this.renderData[targetRowIndex]
          let runnumberCol = this.setDataTable.values.length - 1;

          if (config.cusmergecellrow) {
            await this.findMergeRowCell(runnumberCol, targetRowIndex, 0, 'value')
            for (var key in targetRenderObj) {
              if (targetRenderObj.meta_.merge['row_' + key] > 0 && key === data[config.cusattributekey]) {
                $($(this).find('tbody tr')[targetRowIndex]).find(`[data-attribute='${key}']`).attr('colspan', targetRenderObj.meta_.merge['row_' + key] + 1);
                for (let i = 1; i <= targetRenderObj.meta_.merge['row_' + key]; i++) {


                  if ($($(this).find('tbody tr')[targetRowIndex]).find(`[data-attribute='${key}']`).next().text() === config.cusattributevalue) {
                    $($(this).find('tbody tr')[targetRowIndex]).find(`[data-attribute='${key}']`).next().remove();
                  }
                  // $($(this).find('tbody tr')[targetRowIndex]).find(`[data-attribute='${key}']`).next().remove();
                  //$($(this).find('tbody tr')[targetRowIndex]).find(`[data-attribute='${key}']`).next().remove();
                }
              }
            }
          }
          // console.log(targetColumnIndex)
          // if(this.confighascheckbox ){
          //   targetColumnIndex = targetColumnIndex +1;
          // }
          if (config.cusaffected === 'one') {
            $($(this).find('tbody tr')[targetRowIndex]).find(`[data-attribute='${config.cusattributekey}']`).css('background', config.cusbackgroundcolor)
            $($(this).find('tbody tr')[targetRowIndex]).find(`[data-attribute='${config.cusattributekey}']`).css('color', config.custextcolor)
            $($(this).find('tbody tr')[targetRowIndex]).find(`[data-attribute='${config.cusattributekey}']`).css('text-align', config.custextalign)

            $($(this).find('tbody tr')[targetRowIndex]).find(`[data-attribute='${config.cusattributekey}']`).css('padding-top', config.cuspaddingtop)
            $($(this).find('tbody tr')[targetRowIndex]).find(`[data-attribute='${config.cusattributekey}']`).css('padding-left', config.cuspaddingleft)
            $($(this).find('tbody tr')[targetRowIndex]).find(`[data-attribute='${config.cusattributekey}']`).css('padding-right', config.cuspaddingright)
            $($(this).find('tbody tr')[targetRowIndex]).find(`[data-attribute='${config.cusattributekey}']`).css('padding-bottom', config.cuspaddingbot)

            if (config.cususeinlinetext) {
              $($(this).find('tbody tr')[targetRowIndex]).find(`[data-attribute='${config.cusattributekey}']`).attr('contenteditable', 'true')
            } else {
              $($(this).find('tbody tr')[targetRowIndex]).find(`[data-attribute='${config.cusattributekey}']`).attr('contenteditable', 'false')
            }

          } else {
            $($(this).find('tbody tr')[targetRowIndex]).find('td').css('background', config.cusbackgroundcolor)
            $($(this).find('tbody tr')[targetRowIndex]).find('td').css('color', config.custextcolor)
            $($(this).find('tbody tr')[targetRowIndex]).find('td').css('text-align', config.custextalign)
            $($(this).find('tbody tr')[targetRowIndex]).find('td').css('padding-top', config.cuspaddingtop)
            $($(this).find('tbody tr')[targetRowIndex]).find('td').css('padding-left', config.cuspaddingleft)
            $($(this).find('tbody tr')[targetRowIndex]).find('td').css('padding-right', config.cuspaddingright)
            $($(this).find('tbody tr')[targetRowIndex]).find('td').css('padding-bottom', config.cuspaddingbot)

            if (config.cususeinlinetext) {
              $($(this).find('tbody tr')[targetRowIndex]).find('td').attr('contenteditable', 'true')
            } else {
              $($(this).find('tbody tr')[targetRowIndex]).find('td').attr('contenteditable', 'false')
            }

          }
        }

        //  await this.findMergeColCell(runnumberCol,i,0)
        // if()
        // $('tbody tr')[targetColumnIndex]
        //  console.log($('tbody tr')[targetColumnIndex])
      });
    })
  }

  findMergeColCell(runnumber, numberOfMerge, attributeName, type) {
    if (type === 'header') {
      if (runnumber <= 0) {
        this.renderHeader[runnumber].meta_.merge['col_' + attributeName] = numberOfMerge;
        return;
      }
      else if (
        this.renderHeader[runnumber - 1][attributeName] !== this.renderHeader[runnumber][attributeName]
      ) {
        this.renderHeader[runnumber].meta_.merge['col_' + attributeName] = numberOfMerge
        numberOfMerge = 0;
      } else {
        this.renderHeader[runnumber].meta_.merge['col_' + attributeName] = 0;
        numberOfMerge = numberOfMerge + 1;
      }

    }
    else if (type === 'value') {
      if (runnumber <= 0) {
        this.renderData[runnumber].meta_.merge['col_' + attributeName] = numberOfMerge;
        return;
      }
      else if (
        this.renderData[runnumber - 1][attributeName] !== this.renderData[runnumber][attributeName]
      ) {
        this.renderData[runnumber].meta_.merge['col_' + attributeName] = numberOfMerge
        numberOfMerge = 0;
      } else {
        this.renderData[runnumber].meta_.merge['col_' + attributeName] = 0;
        numberOfMerge = numberOfMerge + 1;
      }
    }
    return this.findMergeColCell(runnumber - 1, numberOfMerge, attributeName, type)
  }
  findMergeRowCell(runnumber, index, numberOfMerge, type) {

    if (type === 'header') {
      if (runnumber <= 0) {
        this.renderHeader[index].meta_.merge['row_header' + runnumber] = numberOfMerge;
        return;
      } else if (
        this.renderHeader[index]['header' + runnumber] !== this.renderHeader[index]['header' + (runnumber - 1)]
      ) {
        this.renderHeader[index].meta_.merge['row_header' + runnumber] = numberOfMerge
        numberOfMerge = 0;
      } else {
        this.renderHeader[index].meta_.merge['row_header' + runnumber] = 0;
        numberOfMerge = numberOfMerge + 1;
      }


      // if (runnumber <= 0) {

      //   this.renderHeader[runnumber].meta_.merge['row_' + this.renderHeader[runnumber].header+'_'+headerNo ] = numberOfMerge;
      //   return;
      // } else if (
      //   this.renderHeader[runnumber].header !== this.renderHeader[runnumber-1].header
      // ) {
      //   this.renderHeader[runnumber].meta_.merge['row_' + this.renderHeader[runnumber].header+'_'+headerNo] = numberOfMerge
      //   numberOfMerge = 0;
      // } else {
      //   this.renderHeader[runnumber].meta_.merge['row_' + this.renderHeader[runnumber].header+'_'+headerNo] = 0;
      //   numberOfMerge = numberOfMerge + 1;
      // }
      // headerNo = headerNo-1;
    }
    else if (type === 'value') {
      if (runnumber <= 0) {
        this.renderData[index].meta_.merge['row_' + this.setDataTable.values[runnumber].data] = numberOfMerge;
        return;
      } else if (
        this.renderData[index][this.setDataTable.values[runnumber].data] !== this.renderData[index][this.setDataTable.values[runnumber - 1].data]
      ) {
        this.renderData[index].meta_.merge['row_' + this.setDataTable.values[runnumber].data] = numberOfMerge
        numberOfMerge = 0;
      } else {
        this.renderData[index].meta_.merge['row_' + this.setDataTable.values[runnumber].data] = 0;
        numberOfMerge = numberOfMerge + 1;
      }
    }

    return this.findMergeRowCell(runnumber - 1, index, numberOfMerge, type)
  }
  debounce(callback, delay) {
    let timeout;
    return function () {
      const args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        callback.apply(this, args);
      }.bind(this), delay);
    };
  }
  parseStringToInt(string) {
    string = string.toString();
    let numberonly = string.replace(',', '')
    return new Number(numberonly).valueOf()

  }
  formatCurrency(value, n?, x?) {
    var re = '(\\d)(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return value.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$1,');
  };


}
customElements.define("table-editor", TableEditor);
