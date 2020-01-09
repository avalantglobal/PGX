declare module chartAPI {
  interface WindowCtx {
    ChartCtx: IChartCtx;
    Chart: any;
  }
  type Axis = {
    display: boolean;
    color: string;
    lineWidth: number;
    dashWidth: number;
    dashOffset: number;
  };
  type ChartContext = {
    Container: HTMLDivElement;
    Canvas: HTMLCanvasElement;
  };
  type ChartTitle = {
    text: string;
    display: boolean;
    position: "top" | "bottom" | "left" | "right";
  };
  type PGDChartData = {
    columns: string[];
    rows: string[];
    options?: any;
    colors?: any;
  };
  type PGDChartConfig = {
    options: {};
    colors?: any;
  };
  type SupportCombineTypes = {
    [key: string]: string[] | string;
  };
  type PGDInspectorAPI = {};

  interface ChartComponent {
    readonly id: string;
    readonly name: string;
    readonly displayName?: string;
    readonly supportTypes: SupportTypes;
    readonly getInspector(type: string): PGDInspectorAPI;
    readonly axis(axes: any, type: string);
    readonly changeTitle(titleOption: ChartTitle);
    readonly resize();
    /**
     * Update only chart config
     * @param config
     */
    readonly updateConfig(config: PGDChartConfig): any;
   
    /**
     * Use for update Chart Data and Config.
     *
     * @param config
     */
    readonly update(config: PGDChartConfig & PGDChartData): any;
    
    /**
     * For render chart component
     *
     * @param $
     * @param config
     */
    readonly render($: ChartContext, config: any): any;
    
    /**
     * Remove rendered chart from canvas.
     */
    readonly destroy();
  }
  interface IProvider {
    [key: string]: ChartComponent;
  }
  interface IChartCtx {
    providers: IProvider;
    define(id: string, provider: any): boolean;
    get(string): () => ChartComponent;
    size(): number;
  }
}

type PGXDataTypes = "string" | "number" | "option" | "boolean" | "color" | 
  "dependency" | "tags" | "store" | "icon";
type PGXExtraDataTypes = PGXDataTypes | "arrays";
type PGXElement = "select" | "radio-button";
interface ResponseValidate {
  status: boolean;
  message: string;
}
interface TextStyleSidebar {
  font: boolean;
  textStyle: boolean;
  paragraph: boolean;
  alignment: boolean;
  color: boolean;
}
interface StyleSidebar {
  text: TextStyleSidebar; 
  boxSize: boolean;
  background : {
    image: boolean;
    color: boolean;
  };
  border: {
    size: boolean;
    radius: boolean;
  };
  appearance: {
    opacity: boolean;
    padding: boolean;
    margin: boolean;
  };
  boxShadow: boolean;
}
interface OptionSelect {
  label: string;
  value: string;
}
interface Props {
   /**
   * for normal type attr mean html element attr.
   * for arrays type attr mean object attr.
   */
  attribute: string;
  label: string;

  /**
   * for title of html element.
   */
  title?: string;

  /**
   * layout of label and form.
   * "H": Horizontal
   * "V": Vertical
   * default is "H"
   */
  layout?: "H" | "V"; 

  /**
   * only for type dependency
   */
  element?: PGXElement;
  defaultValue?: any;

  /**
  * Use for type option only.
  */
  options?: Array<OptionSelect>;

  /**
  * Use for type number only.
  * default is -9999
  */
  min?: string | number;

  /**
  * Use for type number only.
  * default is 9999
  */
  max?: string | number;

  /**
   * for dependency fields
   */
  values?: {
    [key: string]: {
      label?: string;
      forms: Array<CommonAttribute>
    }
  }
  validate?: () => ResponseValidate;
  onChanged?: (property: any) => void;
  placeholder?: string;
}
interface CommonAttribute extends Props{
  type: PGXDataTypes;
  forms?: Array<CommonAttribute>;
  
  /**
   * use for type array only.
   * for show value in arraylist item.
   * default is show first value.
   */
  showValueToSetting?: boolean
}
interface ExtForm extends Props{
  type: PGXExtraDataTypes;

  /**
   * using for type arrays
   */
  fields?: Array<CommonAttribute>;
}
interface SectionSpecific{
  title: string;
  forms: Array<ExtForm>;
}
interface SpecificSidebar {
  title: string;
  sections: Array<SectionSpecific>;
}
interface ExtSidebar {
  action: { eventTypes: Array<string> };
  style: StyleSidebar;
  specific: SpecificSidebar;
}
interface ExtToolbar {
  move: boolean;
  clone: boolean;
  selectParent: boolean;
  connectToData: boolean;
  remove: boolean;
}
interface ExtInspector {
  /**
  * Title of specific tab.
  */
  title: string;            
  sidebar: ExtSidebar;
  toolbar: ExtToolbar;
}
interface PGDElement {
  /**
  * Name of extension in package.json
  */
  pgxId: string;     
  
  /**
  * (attribute: "pg-store")
  * Use when connect with microflow.
  */
  pgStore: string; 
  
  /**
  * Result from microflow.
  */
  data: any;             
  getInspector: () => ExtInspector;
}
