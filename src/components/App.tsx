import React from 'react';
import { useDispatch } from 'react-redux';
import { AddShape, SetFill, SetShape } from '../redux/actions';
import { ReduxCanvas } from './Canvas';

export default function App() {
  const dispatch = useDispatch();
  const OnClick = React.useCallback((x: number, y: number) => {
    dispatch(AddShape(x, y));
  }, []);
  return (
    <div className="Page">
      <ReduxCanvas onClick={OnClick} />
      {/*<ReduxSettings />*/}
    </div>
  );
}
