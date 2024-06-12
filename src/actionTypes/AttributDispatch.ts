import { attributeType } from "./attributeType";

export type AttributeDispatch =
  | { type: attributeType.HEALTH , payload: number }
  | { type: attributeType.SPECIAL , payload : number }
  | { type: attributeType.STRENGTH , payload: number };
