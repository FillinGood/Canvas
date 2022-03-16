import _ from "lodash";
import { ADDSHAPE, AnyAction, SETCOLOR, SETFILL, SETSHAPE, SETSIZE } from "./actions";
import { defaultState, StoreState } from "./store";

export function reducer(state: StoreState | undefined, action: AnyAction): StoreState {
  console.log(action);
    if (!state) return defaultState;
    switch (action.type) {
      case ADDSHAPE:
        return {
          ...state,
          shapes: _.cloneDeep(state.shapes).concat([
            {
              type: state.shape,
              size: state.size,
              fill: state.fill,
              color: state.color,
              x: action.data[0],
              y: action.data[1]
            }
          ])
        };
      case SETSHAPE:
        return {
          ...state,
          shape: action.data
        };
      case SETSIZE:
        return {
          ...state,
          size: action.data
        };
      case SETCOLOR:
        return {
          ...state,
          color: action.data
        };
      case SETFILL:
        return {
          ...state,
          fill: action.data
        };
      default:
        return state;
    }
  }