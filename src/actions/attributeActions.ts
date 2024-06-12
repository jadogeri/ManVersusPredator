
import { AttributeDispatch } from "../actionTypes/AttributDispatch";
import { attributeType } from "../actionTypes/attributeType";

export function updateStrength(payload : number): AttributeDispatch {
    return { type: attributeType.STRENGTH , payload };
  }
  
  export function updateHealth(payload : number): AttributeDispatch {
    return { type: attributeType.HEALTH , payload : payload };
  }
  
  export function updateSpecial(payload : number): AttributeDispatch {
    return { type: attributeType.SPECIAL , payload : payload };




  }


//   import { attributeType } from "./attributType";

// export type AttributeDispatch =
//   | { type: attributeType.HEALTH , payload: number }
//   | { type: attributeType.SPECIAL , payload : number }
//   | { type: attributeType.STRENGTH , payload: number };
