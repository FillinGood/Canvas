import { ShapeType } from "../components/Canvas";

export const ADDSHAPE = 'ADDSHAPE';
export const SETSHAPE = 'SETSHAPE';
export const SETSIZE = 'SETSIZE';
export const SETCOLOR = 'SETCOLOR';
export const SETFILL = 'SETFILL';

export interface BaseAction {
  type:
    | typeof ADDSHAPE
    | typeof SETSHAPE
    | typeof SETSIZE
    | typeof SETCOLOR
    | typeof SETFILL;
  data: [number, number] | ShapeType | number | string | boolean;
}
export interface AddShapeAction extends BaseAction {
  type: typeof ADDSHAPE;
  data: [number, number];
}
export interface SetShapeAction extends BaseAction {
  type: typeof SETSHAPE;
  data: ShapeType;
}
export interface SetSizeAction extends BaseAction {
  type: typeof SETSIZE;
  data: number;
}
export interface SetColorAction extends BaseAction {
  type: typeof SETCOLOR;
  data: string;
}
export interface SetFillAction extends BaseAction {
  type: typeof SETFILL;
  data: boolean;
}
export type AnyAction =
  | AddShapeAction
  | SetShapeAction
  | SetSizeAction
  | SetColorAction
  | SetFillAction;

export function AddShape(x: number, y: number): AddShapeAction {
  return { type: 'ADDSHAPE', data: [x, y] };
}
export function SetShape(shape: ShapeType): SetShapeAction {
  return { type: 'SETSHAPE', data: shape };
}
export function SetSize(size: number): SetSizeAction {
  return { type: 'SETSIZE', data: size };
}
export function SetColor(color: string): SetColorAction {
  return { type: 'SETCOLOR', data: color };
}
export function SetFill(fill: boolean): SetFillAction {
  return { type: 'SETFILL', data: fill };
}