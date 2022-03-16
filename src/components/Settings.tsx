import classNames from 'classnames';
import React, { ButtonHTMLAttributes } from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../redux/store';
import { ShapeType } from './Canvas';

interface ConnectedSettingsProps {
  OnShapeChange: (newShape: ShapeType) => void;
  OnFillChange: (newFill: boolean) => void;
  OnColorChange: (newColor: string) => void;
  OnSizeChange: (newSize: number)=>void;
}

export interface SettingsProps {
  OnShapeChange: (newShape: ShapeType) => void;
  OnFillChange: (newFill: boolean) => void;
  OnColorChange: (newColor: string) => void;
  OnSizeChange: (newSize: number)=>void;
  shape: ShapeType;
  fill: boolean;
  size:number;
  color: string;
  className?: string;
}

export default function Settings(props: SettingsProps) {
  const OnSquareClick = React.useCallback(()=>{
    if (props.OnShapeChange) props.OnShapeChange("square")
  }, [props.OnShapeChange]);
  const OnCricleClick = React.useCallback(()=>{
    if (props.OnShapeChange) props.OnShapeChange("circle")
  }, [props.OnShapeChange]);

  const OnFillChange = React.useCallback((e:React.ChangeEvent<HTMLInputElement>)=>{
    console.log(e.currentTarget.checked, props.fill)
    if (props.OnFillChange) props.OnFillChange(e.currentTarget.checked)
  }, [props.OnFillChange,props.fill]);

  const OnColorChange = React.useCallback((e:React.ChangeEvent<HTMLInputElement>)=>{
    if (props.OnColorChange) props.OnColorChange(e.currentTarget.value)
  }, [props.OnColorChange]);

  const OnSizeChange = React.useCallback((e:React.ChangeEvent<HTMLInputElement>)=>{
    if (props.OnSizeChange) props.OnSizeChange(e.currentTarget.valueAsNumber)
  }, [props.OnSizeChange]);

  console.log('render', props.fill);

  return (
    <div className="settings">
      <div className="shape-button">
        <button
          className={classNames('shapeCircle', {inv:props.shape == 'square'})}
          onClick={OnSquareClick}
        >
          circle
        </button>
        <button
          className={classNames('shapeSquare', {inv:props.shape == 'circle'})}
          onClick={OnCricleClick}
        >
          square
        </button>
      </div>
      <div className="fill-button">
        <input type="checkbox" onChange={OnFillChange} checked={props.fill}/>
      </div>
      <div className="size">
        <input type="range" min={2} max={10} onChange={OnSizeChange} value={props.size}/>
        set size (&gt;2)
      </div>
      <input className="color" type="color" onChange={OnColorChange} value={props.color}/>
    </div>
  );
}

function mapProps(
  state: StoreState,
  props: ConnectedSettingsProps
): SettingsProps {
  return {
    shape: state.shape,
    fill: state.fill,
    color: state.color,
    size: state.size,
    OnShapeChange: props.OnShapeChange,
    OnFillChange: props.OnFillChange,
    OnColorChange: props.OnColorChange,
    OnSizeChange: props.OnSizeChange
  };
}
export const ReduxSettings = connect(mapProps)(Settings);
