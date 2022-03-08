import { Shape, ShapeType } from "../components/Canvas";
import { reducer } from "./reducer";
import { createStore } from 'redux';

export interface StoreState {
  shape: ShapeType;
  size: number;
  color: string;
  fill: boolean;
  shapes: Shape[];
}

export const defaultState: StoreState = {
  shape: 'circle',
  size: 5,
  color: 'black',
  fill: false,
  shapes: []
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const devtools = (window as any).__REDUX_DEVTOOLS_EXTENSION__;
export const store = createStore(reducer, defaultState, devtools && devtools());
