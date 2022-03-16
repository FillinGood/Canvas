import React from 'react';
import { connect, useDispatch, useStore } from 'react-redux';
import { AddShape, SetColor, SetFill, SetShape, SetSize } from '../redux/actions';
import { ReduxCanvas, ShapeType } from './Canvas';
import { StoreState } from '../redux/store';
import { ReduxSettings } from './Settings';

interface AppProps {
  shape: ShapeType;
  fill: boolean;
  size: number;
  color: string;
}

function App(props: AppProps) {
  const dispatch = useDispatch();
  const OnClick = React.useCallback((x: number, y: number) => {
    dispatch(AddShape(x, y));
  }, []);
  const OnShapeChange = React.useCallback(
    (newShape: ShapeType) => {
      dispatch(SetShape(newShape));
    },
    [props.shape]
  );
  console.log('app', props.fill);
  const OnFillChange = React.useCallback(
    (newFill: boolean) => {
      console.log('OnFillChange', props.fill, newFill);
      if (props.fill == newFill) return;
      dispatch(SetFill(newFill));
    },
    [props.fill]
  );
  const OnColorChange = React.useCallback(
    (newColor: string) => {
      if (props.color == newColor) return;
      dispatch(SetColor(newColor));
    },
    [props.color]
  );
  const OnSizeChange = React.useCallback(
    (newSize: number) => {
      if (props.size == newSize) return;
      dispatch(SetSize(newSize));
    },
    [props.size]
  );
  
  return (
    <div className="Page">
      <ReduxCanvas onClick={OnClick} />
      <ReduxSettings OnShapeChange={OnShapeChange} OnFillChange={OnFillChange} OnColorChange={OnColorChange} OnSizeChange={OnSizeChange}/>
    </div>
  );
}

function mapProps(state: StoreState): AppProps {
  return {
    shape: state.shape,
    fill: state.fill,
    size: state.size,
    color: state.color
  }
}

export const ReduxApp = connect(mapProps)(App);