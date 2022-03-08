import classNames from 'classnames';
import React from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../redux/store';

export default function Settings () : Settings {
    return (
        <div className="settings">
        <div className="shape-button">
          <button
            className={state.shape="circle"? "shapeCircle" : "shapeSquare"}
            onClick={() => dispatch(SetShape('circle'))}
          >
            circle
          </button>
          <button
            className="shapeSquare"
            onClick={() => dispatch(SetShape('square'))}
          >
            square
          </button>
        </div>
        <div className="fill-button">
          <button className="fillA" onClick={() => dispatch(SetFill(true))}>
            fill
          </button>
          <button className="fillB" onClick={() => dispatch(SetFill(false))}>
            unfill
          </button>
        </div>
        <div className="size">
          <input type="set size (>2)"  />
        </div>
        <div className="color"></div>
      </div>
    )
}
